function Calcular() {
    // Declaração de variáveis
    let valorA = Number(document.getElementById("valorA").value)
    let valorB = Number(document.getElementById("valorB").value)
    let valorC = Number(document.getElementById("valorC").value)

    let valorR = Math.pow( (valorA + valorB), 2)
    let valorS = Math.pow( (valorB + valorC), 2)
    
    let valorD = (valorR + valorS) / 2

    document.getElementById("resultado").innerHTML = "Resultado da expressão: " + valorD
}