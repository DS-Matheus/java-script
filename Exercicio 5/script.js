function Calcular() {
    // Declaração de variáveis
    let totalPrestacoes = Number(document.getElementById("prestacoes").value)
    let prestacoesPagas = Number(document.getElementById("quantidade").value)
    let valorPrestacao = Number(document.getElementById("valor").value)

    let totalPago = prestacoesPagas * valorPrestacao
    let saldoDevedor = totalPrestacoes * valorPrestacao - totalPago

    document.getElementById("resultado").innerHTML = "Total pago: R$ " + totalPago + "<br>"
    + "Saldo devedor: R$ " + saldoDevedor
}