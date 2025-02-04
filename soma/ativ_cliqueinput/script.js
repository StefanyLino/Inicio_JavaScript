/* Dentro da const para funcionar no on click
Após o parseInt se faz a leitura do ID */ 

const clique = () => {
    // Converte p/ número (parseFloat)
    let num1 = parseFloat (document.getElementById("num1").value)
    let num2 = parseFloat (document.getElementById("num2").value)
    let soma = num1 + num2
    document.getElementById("resultado").innerText = "O resultado é " + soma
}