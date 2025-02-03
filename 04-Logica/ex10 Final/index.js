const vagas = []

function listVagas(){
    const vagasEmTexto = vagas.reduce(function(textoFinal, vaga, indice){
        textoFinal += indice + "."
        textoFinal += "(" + vaga.candidatos.length + " candidatos)\n"
        return textoFinal
    }, "")

    alert(vagasEmTexto)
}

function novaVaga() {
    const nome = prompt("Informe um nome para a vaga:")
    const descricao = prompt("Informe uma descrição para a vaga:")
    const dataLimite = prompt("Informe uma data limite (dd/mm/aaaa) para a vaga:")

    const confirmacao = confirm(
        "deseja criar uma nova vaga com essas informações?\n" +
        "Nome: " + nome + "\nDescrição: " + descricao + "\nData limite: " + dataLimite
    )

    if(confirmacao){
        const novaVaga = {nome, descricao, dataLimite, candidatos: []}
        vagas.push(novaVaga)
        alert("Vaga criada.")
    }
}


function exibirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja exibir: ")

    if (indice >= vagas.length || indice < 0){
        alert("Índice inválido")
        return
    }
    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce(function(textoFinal, candidato){
        return textoFinal + "\n - " + candidato
    }, "")

    alert(
        "Vaga n° " + indice +
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData Limite: " + vaga.dataLimite +
        "\nQuantidade de candidatos: " + vaga.candidatos.length + 
        "\nCandidatos inscritos: " + candidatosEmTexto
    )
}

function inscreverCandidato(){
    const candidato = prompt("Informe o nome do(a) candidato(a):")
    const indice = prompt("informe o índice da vaga para a qual o(a) candidato(a) deseja se inscrever: " )
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Deseja inscrever o candidato " + candidato + " na vaga" + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )

    if(confirmacao){
        vaga.candidato.push(candidato)
        alert("Inscrição realizada.")
    }
}

function excluirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja excluir:")
    const vaga = vaga[indice]

    const confirmacao = confirm(
        "Tem certeza que deseja excluir a vaga " + indice + "?\n" +
        "Nome: " + vaga.nome + "\n Descrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )

    if(confirmacao){
        vaga.splice(indice, 1)
        alert("Vaga excluída")
    }
}

function exibirMenu(){
    const opcao = prompt(
        "Cadastro de vagas de Emprego" + 
        "\n\nEscolha uma das opções:" +
        "\n1. Listar vagas disponíveis" +
        "\n2. Criar uma nova vaga" +
        "\n3. Visualizar uma vaga" +
        "\n4. Inscrever um(a) candidato(a)" +
        "\n5. Excluir uma vaga" + 
        "\n6. sair"
    )

    return opcao
}

function executar(){
    let opcao = ""
    do{
        opcao = exibirMenu()

        switch(opcao){
            case "1":
                listVagas()
                break
            case "2":
                novaVaga()
                break
            case "3":
                exibirVaga()
                break
            case "4":
                inscreverCandidato()
                break
            case "5":
                excluirVaga()
                break
            case "6":
                alert("Saindo do sistema...")
                break
            default:
                alert("Opção inválida.")
        }
    }while(opcao !== "6")
}

executar()
