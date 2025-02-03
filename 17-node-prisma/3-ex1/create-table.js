const { query } = require("./pool");


async function createTable() {
  await query (`
    create table if not exists events (
    id serial primary key,
    name varchar(255) not null,
    event_date date not null,
    total_tickets int not null,
    tickets_sold int default 0
    );
  `)

  console.log("Tabela de eventos criadas com sucesso!")

  process.exit(0)
}

createTable();