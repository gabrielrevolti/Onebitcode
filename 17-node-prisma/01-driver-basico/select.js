const pg = require('pg');

// connection string: protocolo://usuario:senha@host:porta/nome_do_banco
const db = new pg.Client({
 connectionString: "postgresql://postgres:revolt@1613388@localhost:5432/node-prisma"
});

async function selectPokemon() {
  await db.connect();

  const query = `select * from "Pokemon";`
  const result = await db.query(query);
  console.table(result.rows)

  await db.end();
}


selectPokemon();