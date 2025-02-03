const { Pool } = require("pg")

const pool = new Pool ({
  connectionString: "postgresql://postgres:revolt@1613388@localhost:5432/node-prisma"
})

async function query(queryString, URLSearchParams, callback) {
  return pool.query(queryString, URLSearchParams, callback)
}

module.exports = {query}