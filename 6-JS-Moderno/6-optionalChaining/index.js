const user = {
    name: "john Doe",
    email: "doejohn@email.com",
    friends: [{
        name:"Mary",
        street: "Some Street",
        number: 89
    }],
    age: 42,
    phone: {
        countryCode: "+55",
        ddd: "22",
        number: "998765432"
    }
}

//console.log(user.friends[0].phone.ddd)
console.log(user?.friends[0]?.phone?.ddd)
console.log(user?.brother?.length)

console.log(user.brother?.[5].name)