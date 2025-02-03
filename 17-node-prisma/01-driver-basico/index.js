const pg = require('pg');

// connection string: protocolo://usuario:senha@host:porta/nome_do_banco
const db = new pg.Client({
 connectionString: "postgresql://postgres:revolt@1613388@localhost:5432/node-prisma"
});

async function insertPokemon() {
  await db.connect();

  //Forma básica
  // const query = `insert into "public"."Pokemon" (name, type) values ('pikachu', 'elétrico');`
  // const result1 = await db.query(query);
  // console.log(result1);

  //Forma dinâmica errada com sql injection
  // const name = "belsproat"
  // const type = "planta"
  // const result2 = await db.query(`Insert into "Pokemon" (name, type) values ('${name}' , '${type}');`)

  

  //Dados dinâmicos da forma correta
  const pokemon = { name: 'charmander', type: 'fogo'};
  const result3 = await db.query(`insert into "Pokemon" (name, type) values ($1, $2);`, [pokemon.name, pokemon.type])

  await db.end();
}


insertPokemon();