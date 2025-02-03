const metros = parseFloat(prompt("metros: "))
const medida = prompt("Digite a medida:" +
"\nmilímetros = mm" +
"\ncentímetros = cm" +
"\ndecímitros = dm" +
"\ndecâmetros = dam" +
"\n hectômetros = hm" +
"\nquilômetros = km"
)

switch(medida){
    case "mm":
        alert(metros + " metros" + " são " + (metros * 1000) + " milímetros")
        break
    case "cm":
        alert(metros + " metros" + " são " + (metros * 100) + " centímetros")
        break
    case "dm":
        alert(metros + " metros" + " são " + (metros * 10) + " decímetros")
        break
    case "dam":
        alert(metros + " metros" + " são " + (metros / 10) + " decâmetros")
         break
    case "hm":
        alert(metros + " metros" + " são " + (metros / 100) + " hectômetros")
        break
    case "km":
        alert(metros + " metros" + " são " + (metros / 1000) + " quilômetros")
        break
    default:
        alert("erro")
}