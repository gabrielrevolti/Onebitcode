const { query } = require("../database");

class Customer {
 constructor(customerRow) {
  this.id = customerRow.id;
  this.name = customerRow.name;
  this.email = customerRow.email
 }

 static async findAll() {
  const result = await query("SELECT * FROM customers");
  if (!result.rows[0]) return null
  return result.rows.map((row) => new Customer(row))
 }

 static async create({ name, email}) {
  const result = await query(`
    insert into customers (name, email) values ($1, $2) returning *`, [name, email])
    return new Customer(result.rows[0])
 }

 static async findById(id) {
  const result = await query(`select * from customers where id = $1`, [id])
  if (!result.rows[0]) return null
  return new Customer(result.rows[0])
 }

 static async update(id, attributes) {
  const { rows } = await query(`select * from customers where id = ($1)`, [id])
  if (!rows[0]) return null
  const customer = new Customer(rows[0])
  Object.assign(customer, attributes)

  const result = await query(`
    update customers set
    name = ($1),
    email = ($2)
    where id = ($3)`
  , [customer.name, customer.email, customer.id])

  return customer
 } 

 static async delete(id) {
  const result = await query(`delete from customers where id = ($1) returning *`, [id])
  if (!result.rows[0]) return null
  return new Customer(result.rows[0])
 }
}

module.exports = Customer