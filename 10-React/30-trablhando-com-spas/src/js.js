const main = (params) => {
  let array = []
   for (let i = 0; i < 20; i++) {
      array.push(Math.floor(Math.random() * 100) + 1);
  }
  const minNumber = Math.min(...array)
  const maxNumber = Math.max(...array)
  return [minNumber, maxNumber]
}

main()