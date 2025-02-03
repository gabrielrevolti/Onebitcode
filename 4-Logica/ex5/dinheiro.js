let saldo = parseFloat(prompt("Digite o valor existente na sua conta"))
opcao = " "

do{
    opcao = prompt("O valor que têm na sua conta é R$ " + saldo +
    "\nAgora você têm as seguintes opções: " +
    "\n1. Adicionar" +
    "\n2. Remover" +
    "\n3. Sair")

    switch(opcao){
        case "1":
            saldo += parseFloat(prompt("Quantia a ser adicionada R$: ")) 
            break
        case "2":
            saldo -= parseFloat(prompt("Quantia a ser removida R$: "))
            break
        case "3":
    }
}while (opcao !== "3")