function Calcular() {
    // Declaração de variáveis
    let numero = Number(document.getElementById("numero").value)

    let squareRoot = numero*numero

    document.getElementById("resultado").innerHTML = "A raiz quadrada de " + numero
    + " é igual a: " + squareRoot                                                   

    // console.log(`O resultado da operação ${numero1}+${numero2}*${numero3} é igual a: ${resultado}`)
}