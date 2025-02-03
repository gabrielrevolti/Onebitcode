let fila = []
let opcao = ""


do{
    let paciente = ""
    for(let i = 0; i < fila.length; i++){
        paciente += (i+1) + "° Paciente - " + fila[i] + "\n"
    }

    opcao = prompt(
        "Pacientes:\n" + paciente + 
        "\nEscolha uma das ações a seguir:" +
        "\n\n1.adicionar um paciente\n 2.consultar um paciente\n 3.sair")

    switch(opcao){
        case "1":
            let adiconar = prompt("Nome do paciente: ")
            fila.push(adiconar)
        break

        case "2":
            let consulta = fila.shift()
            if(consulta){
                alert(consulta + " Paciente consultado" )
            } else{
                alert("Não há pacientes")
            }
        break

        case "3":
            alert("Encerrando ...")
        break

        default:
            alert("Opção inválida")
    }
}while(opcao !== "3")

