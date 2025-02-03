let  imoveis = []
let opcao = ""
const imovel = {}

do{
    opcao = prompt("O total de imóveis é de: " + imoveis.length +
    "\n\nAgora escolha algumas das opções a seguir" +
    "\n1.Adiconar imóveis" +
    "\n2.Mostrar imóveis salvos" +
    "\n3.Sair")

    switch(opcao){
        case "1":
            imovel.nome = prompt("Informe seu nome:")
            imovel.quarto = prompt("Informe quantos quartos exite no imóvel:")
            imovel.banheiro = prompt("Informe quantos banheiros exite no imóvel:")
            imovel.garagem = prompt("Informe se existe garagem (sim/não):")

            let confirmacao = confirm("Deseja salvar esses dados?\n"+
            "\nNome do proprietário: " + imovel.nome +
            "\nQuantidade de quartos no imóvel: " + imovel.quarto +
            "\nQuantidade de banheiros no imóvel: " + imovel.banheiro +
            "\nPossue garagem: " + imovel.garagem)

            if(confirmacao){
                alert("Os dados foram salvos!")
                imoveis.push(imovel)
            } else{
                alert("Voltando para o início")
            }
            break

        case "2":
            for(let i = 0; i < imoveis.length; i++){
                alert(
                    "Imóvel " + (i+1) +
                    "\nProprietário: " + imoveis[i].nome +
                    "\nQuartos: " + imoveis[i].quarto +
                    "\nBanheiros: " + imoveis[i].banheiro +
                    "\nPossue garagem: " + imoveis[i].garagem
                )
            }
            break
        
        case "3":
            alert("Saindo...")
            break
        default:
            alert("Opção inválida")
    }
        
}while(opcao !== "3")