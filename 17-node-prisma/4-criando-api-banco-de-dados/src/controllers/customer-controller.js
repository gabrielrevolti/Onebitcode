const Customer = require("../model/customer");

const customerController = {
  //GET /customers
 index: async (req, res) => {
  const customers = await Customer.findAll();
  res.json(customers)
 },

 //POST /customers/
 create: async (req, res) => {
  const newCustomer = await Customer.create(req.body)
  res.status(201).json(newCustomer)
 },

 show: async (req, res) => {
  const customer = await Customer.findById(req.params.id)
  if (!customer) return res.status(404).json({message: "Customer not found!"})
  res.status(201).json(customer)
 },

 update: async (req, res) => {
  const updatedCustomer = await Customer.update(req.params.id, req.body)
  if (!updatedCustomer) return res.status(404).json({ message : "Customer not found!"})
  res.json(updatedCustomer)
 },

 delete: async (req, res) => {
  const deletedCustomer = await Customer.delete(req.params.id)
  if (!deletedCustomer) return res.status(404).json({ message : "Customer not found!"})
  res.json({message: "deleted success", deletedCustomer})
 }

}

module.exports = customerController