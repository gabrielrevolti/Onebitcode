const pg = require('pg');

// connection string: protocolo://usuario:senha@host:porta/nome_do_banco
const db = new pg.Client({
 connectionString: "postgresql://postgres:revolt@1613388@localhost:5432/node-prisma"
});

async function createTable () {
  await db.connect()

  const query = `
  create table if not exists "public"."Pokemon" (
   id serial primary key,
   name varchar(255) not null,
   type varchar(255) not null
  );
  `;

  const result = await db.query(query)
  console.log(result)
  await db.end()
}

createTable()