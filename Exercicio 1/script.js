function Calcular() {
    // Declaração de variáveis
    let numero1 = Number(document.getElementById("numero1").value)
    let numero2 = Number(document.getElementById("numero2").value)
    let numero3 = Number(document.getElementById("numero3").value)

    let resultado = (numero1 + numero2) * numero3

    document.getElementById("resultado").innerHTML = "O resultado é " + resultado
    // console.log(`O resultado da operação ${numero1}+${numero2}*${numero3} é igual a: ${resultado}`)
}