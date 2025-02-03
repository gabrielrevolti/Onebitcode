const { Pool } = require("pg");

const pool = new Pool ({
  connectionString: "postgresql://postgres:revolt@1613388@localhost:5432/node-prisma"
})

async function query(queryString, params, callback) {
 return pool.query(queryString, params, callback)
}

async function getClient() {
  return pool.connect();
}

module.exports = {query, getClient}