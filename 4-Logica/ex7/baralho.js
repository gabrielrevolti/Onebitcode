let pilha = []
let opcao = ""

do{

    opcao = prompt("Quantidade de cartas: " + pilha.length + 
    "\n\nQual a opção desejada: \n\n1.Adicionar uma carta \n2.Puxar uma carta \n3.Sair")

    switch(opcao){
        case "1":
            let adicionar = prompt("Qual a carta que deseja adiconar: ")
            pilha.push(adicionar)
            break
        
        case "2":
            let puxar = pilha.pop()
            if(puxar){
                alert("A carta puxada foi: " + puxar)
            } else{
                alert("Não há mais cartas no baralho")
            }
            break

        case "3":
            alert("Encerrando...")
            break

        default:
            alert("Opção inválida!")
            break
    }
    
}while(opcao !== "3")
