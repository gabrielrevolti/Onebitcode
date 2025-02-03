const person = {
    name: "Gabriel",
    job: "Dev web",
    parents: ["Rogério", "Vânia"]
}

const name = person.name

const {job, parents} = person

console.log(job, parents, name)

const [Rogério, Vânia] = parents

console.log(Rogério, Vânia)

function createUser({name, job, parents}){
    const id = Math.floor(Math.random() * 9999)
    return {
        id,
        name,
        job,
        parents
    }
}

const gabriel = createUser(person)

console.log(gabriel)