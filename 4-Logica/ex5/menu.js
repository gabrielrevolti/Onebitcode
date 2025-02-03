let menu = " "

do{
    menu = prompt("Qual da opções você deseja? " +
    "\nOpcão 1" +
    "\nOpção 2" +
    "\nOpção 3" +
    "\nOpção 4" +
    "\nOpção 5")

    switch(menu){
        case "1":
            alert("Você escolheu a opção 1")
            break
        case "2":
            alert("Você escolhou a opção 2")
            break
        case "3":
            alert("Você escolhou a opção 3")
            break
        case "4":
            alert("Você escolhou a opção 4")
            break
        case "5":
            alert("Você escolheu a opção 5")
            break
    }
    
} while (menu !== "5")