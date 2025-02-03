const { createEvent, getAllEvents, getEventByName, getEventByDate, sellTicket } = require("./function");

async function tests() {
  // await createEvent("Show 3", new Date("2025-03-01"), 10);

  // const result = await getAllEvents()
  // console.table(result)

  // const result2 = await getEventByName("Show 1")
  // console.table(result2)

  // const result3 = await getEventByDate(new Date("2025-01-01"))
  // console.table(result3)

  await sellTicket(4);
  await sellTicket(4);
  await sellTicket(4);
  await sellTicket(4);
  await sellTicket(4);

  process.exit(0)
}

tests()