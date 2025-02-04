let num1 = parseInt(prompt("Digite um número"))
let num2 = parseInt(prompt("Digite outro número"))

/*Number é utilizado para fazer uma soma dentro da variável
let soma = Number(num1) + Number(num2)*/ 

let soma = num1 + num2


document.getElementById("resultado").innerText = "Sua soma é igual a " + soma

/*Se pode usar o parseInt e parseFloat, eles são mais utilizados
PARSEINT= Inteiro || PARSEFLOAT= Decimal*/ 