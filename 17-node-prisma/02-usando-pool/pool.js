const { Pool } = require("pg");

const pool = new Pool ({
  connectionString : "postgresql://gabri:revolt@1613388@localhost:5432/node-prisma"
});

async function openConnection() {
  const client = await pool.connect()

  const result = await client.query("select 1 + 1 as soma")
  console.log(result.rows)

  setTimeout(() => {
    client.release()
    console.log("Fechando conexão")
  }, 5000);
}

openConnection()

openConnection()