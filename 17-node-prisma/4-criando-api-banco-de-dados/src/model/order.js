const { query, getClient } = require("../database");
const Customer = require("./customer");
const Product = require("./product");

class Order {
  constructor(orderRow, populateCustomer, populateProducts) {
    this.id = orderRow.id;
    this.customerId = orderRow.customer_id;
    this.total = +orderRow.total
    this.createdAt = new Date(orderRow.created_at)
    this.updatedAt = new Date(orderRow.updated_at)

    this.customer = undefined
    if (populateCustomer) {
      this.customer = populateCustomer
    }

    this.products = undefined
    if (populateProducts) {
      this.products = populateProducts
    }
  }

  static async findAll() {
    const result = await query(`
      SELECT
      orders.*,
      customers.id as "customer.id",
      customers.name as "customer.name",
      customers.email as "customer.email"
    from orders join customers on customers.id = orders.customer_id;
    `)

    return result.rows.map((row) => {
      const customer = new Customer({
        id: row["customer.id"],
        name: row["customer.name"],
        email: row["customer.email"]
      })
      return new Order(row, customer)
    })
  }

  /**
   * 
   * @param {number} customerId 
   * @param {{id: number, quantity: number}[]} orderProducts 
   */

  static async create(customerId, orderProducts) {
    const storedOrderProducts = await query(`
      select * from products where id = any($1::int[])`,
      [orderProducts.map(product => product.id)]
    )

    let orderTotal = 0

    const populatedOrderProducts = storedOrderProducts.rows.map((row) => {
      const { quantity } = orderProducts.find((product) => product.id === row.id)
      orderTotal += +row.price * quantity
      return { product: new Product(row), quantity}
    })

    const dbClient = await getClient()

    let response 

    try {
      await dbClient.query("begin")

      const orderCreationResult = await dbClient.query(
        `insert into orders (customer_id, total) values ($1, $2) returning *;`,
        [customerId, orderTotal]
      )

      const order = new Order(orderCreationResult.rows[0], null, populatedOrderProducts)

      for (const entry of populatedOrderProducts) {
        await dbClient.query(
          `insert into order_products (order_id, product_id, quantity) values ($1, $2, $3);`,
          [order.id, entry.product.id, entry.quantity]
        )
      }

      await dbClient.query("commit")
      response = order
    } catch (error) {
      await dbClient.query("rollback")
      response = { message : `Error while creating order: ${error.message}`}
    } finally {
      dbClient.release()
    }

    return response
  }

  static async findById(id) {
    const orderResult = await query(`
    SELECT
      orders.*,
      customers.id as "customer.id",
      customers.name as "customer.name",
      customers.email as "customer.email"
    from orders join customers on customers.id = orders.customer_id
    where orders.id = $1`, [id])

    const orderProductsResult = await query(`
      select order_products.*, products.*
      from order_products join products on order_products.product_id = products.id
      where order_products.order_id = $1`, [id])

      const formattedProducts = orderProductsResult.rows.map((row) => ({
        orderProductDetails: {
          orderId: row.order_id,
          productId: row.product_id,
          quantity: row.quantity,
          createdAt: new Date(row.created_at),
          updatedAt: new Date(row.updated_at),
        },
        product: new Product({
          id: row.id,
          name: row.name,
          description: row.description,
          price: parseFloat(row.price),
          stockQuantity: row.stock_quantity,
          isActive: row.is_active,
        })
      }));
      
    const orderData = orderResult.rows[0]
    const customer = new Customer ({
      id: orderData["customer.id"],
      name: orderData["customer.name"],
      email: orderData["customer.email"]
    })

    return new Order(orderData, customer, formattedProducts)
  }

  static async delete(id) {
    const dbClient = await getClient()
    let result
    try {
      await dbClient.query("BEGIN")
      await dbClient.query(`DELETE FROM order_products WHERE order_id = $1;`, [id])
      await dbClient.query(`DELETE FROM orders WHERE id = $1`, [id])
      await dbClient.query("COMMIT")
      result = { message: "Order deleted successfully" }
    } catch (error) {
      await dbClient.query("ROLLBACK")
      result = { message: "Error while deleting order" }
    } finally {
      dbClient.release()
    }
    return result
  }
}

module.exports = Order