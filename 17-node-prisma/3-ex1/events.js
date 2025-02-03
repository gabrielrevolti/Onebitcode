const { Client, Pool } = require("pg");

const client = new Client({
  connectionString: "postgresql://postgres:revolt@1613388@localhost:5432/node-prisma"
})

const pool = new Pool({
  connectionString: "postgresql://postgres:revolt@1613388@localhost:5432/node-prisma"
})

async function createTableEvents(){
  await client.connect()
 const result = await client.query(`create table if not exists events(
  id serial primary key,
  name varchar(255) not null,
  data date default current_date,
  totalTicket int default 0,
  ticketsSold int default 0);`)
  console.log(result.rows)

 setTimeout(() => {
  console.log("finalizando...")
  client.end()
 }, 5000);
}

// createTableEvents()

async function insertEvent (name, totalTicket, ticketssold){
  client.connect()

  const result = await client.query(`insert into events (name, totalticket, ticketssold) values ($1, $2, $3);`, [name, totalTicket, ticketssold])
 console.log(result)

 setTimeout(() => {
  console.log("Finalizando...")
  client.end()
 }, 5000);
}

// insertEvent("Bleach", 10, 0)

async function getAllEvents () {
  client.connect()

  const result = await client.query(`select * from events;`)
  console.table(result.rows)

  console.log("Finalizando...")
  setTimeout(() => {
    client.end()
  }, 5000);
}

// getAllEvents()

async function getEventByName(name) {
 client.connect()

 const result = await client.query(`select * from events where name = '${name}';`)
 console.table(result.rows)

 console.log("Finalizando...")

 setTimeout(() => {
   client.end()
 }, 5000);
}

// getEventByName('bleach')

async function getEventBydate (date) {
  client.connect()

  const result = await client.query(`select * from events where data = '${date}'`)
  console.table(result.rows)

  console.log("Finalizando...")

  setTimeout(() => {
    client.end()
  }, 5000);
}

// getEventBydate('2025-01-24')

async function buyTicket(name, quantity) {

  const ticketAvailable = await pool.query(`select totalticket from events where name = '${name}';`)
  const total = ticketAvailable.rows[0].totalticket

  if ( total > 0 && total - quantity >= 0) {
    const newTicket = total - quantity
  }
}

buyTicket('bleach')

