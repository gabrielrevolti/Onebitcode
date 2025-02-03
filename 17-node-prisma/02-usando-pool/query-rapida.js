const { Pool } = require("pg");

const pool = new Pool ({
  connectionString : "postgresql://gabri:revolt@1613388@localhost:5432/node-prisma", max:2
});

async function queryRapida () {
  const result = await pool.query("SELECT 1 + 1 as soma");
  console.log(result.rows[0])

  setTimeout(() => {
    console.log("fechando conexão...")
  }, 3000);
}

queryRapida()

queryRapida()

queryRapida()