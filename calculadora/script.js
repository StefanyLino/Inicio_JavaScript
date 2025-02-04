const adicao = () => {
    // Converte p/ número (parseFloat)
    let num1 = parseFloat (document.getElementById("num1").value)
    let num2 = parseFloat (document.getElementById("num2").value)
    let soma = num1 + num2
    document.getElementById("resultado").innerText = soma
}

const subtracao = () => {
    // Converte p/ número (parseFloat)
    let num1 = parseFloat (document.getElementById("num1").value)
    let num2 = parseFloat (document.getElementById("num2").value)
    let sub = num1 - num2
    document.getElementById("resultado").innerText = sub
}

const divisao = () => {
    // Converte p/ número (parseFloat)
    let num1 = parseFloat (document.getElementById("num1").value)
    let num2 = parseFloat (document.getElementById("num2").value)
    let div = num1 / num2
    document.getElementById("resultado").innerText = div
}

const multiplicacao = () => {
    // Converte p/ número (parseFloat)
    let num1 = parseFloat (document.getElementById("num1").value)
    let num2 = parseFloat (document.getElementById("num2").value)
    let mul = num1 * num2
    document.getElementById("resultado").innerText = mul
}

/*
Concatenando de outra forma:
`O resultado é ${nome}`

a variável vai dentro dos colchetes 
*/ 