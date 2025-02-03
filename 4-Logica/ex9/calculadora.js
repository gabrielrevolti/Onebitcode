function triangulo(base, altura){
    base = parseFloat(prompt("informe a base:"))
    altura = parseFloat(prompt("informe a altura:"))
    alert("A área do triângulo é " + (base * altura / 2))
}

function retangulo(base, altura){
    base = parseFloat(prompt("informe a base:"))
    altura = parseFloat(prompt("informe a altura:"))
    alert("A área do retângulo é " + (base * altura))
}

function quadrado(lado){
    lado = parseFloat(prompt("informe o lado:"))
    alert("A área do quadrado é " + (lado ** 2))
}

function trapezio(bMaior, bMenor){
    bMaior = parseFloat(prompt("Base maior:"))
    bMenor = parseFloat(prompt("Base menor:"))
    altura = parseFloat(prompt("Altura:"))
    alert("A área do trapézio é " + ((bMaior + bMenor) + altura / 2))
}

function circulo(raio){
    raio = parseFloat(prompt("Raio:"))
    parseFloat(pi = 3.14)
    alert("A área do círculo é " + (pi * (raio ** 2)))
}

function executar(){
    let opcao = ""
    do{
        opcao = prompt("Essas são as seguintes opções:" +
        "\n1.Área do triângulo" +
        "\n2.Área do retângulo" +
        "\n3.Área do quadrado" +
        "\n4.Área do trapézio" +
        "\n5.Área do círculo" +
        "\n6.Sair")

        switch(opcao){
            case "1":
                triangulo()
                break
            case "2":
                retangulo()
                break
            case "3":
                quadrado()
                break
            case "4":
                trapezio()
                break
            case "5":
                circulo()
                break
            case "6":
                alert("Saindo...")
                break
            default:
                alert("Opção inválida!")
        }
    }while(opcao !== "6")
}

executar()