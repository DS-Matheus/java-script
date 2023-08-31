//Variável Global - Saldo do cliente
var saldo = 500

function Calcular() {
    // Declaração de variáveis
    let valorDeposito = Number(document.getElementById("numero").value)
    saldo += valorDeposito

    document.getElementById("resultado").innerHTML = "Novo saldo em conta: R$ " + saldo     
}