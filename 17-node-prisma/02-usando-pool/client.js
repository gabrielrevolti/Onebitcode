const {Client} = require("pg")

const client = new Client ({
  connectionString : "postgresql://gabri:revolt@1613388@localhost:5432/node-prisma"
});

async function openConnection () {
  await client.connect()

  const result = await client.query ("select 1 + 1 as resultado;")
  console.log(result.rows)

  setTimeout(() => {
    client.end()
    console.log("Fechando conexão...")
  }, 5000)
}

openConnection()

openConnection()