function Calcular() {
    // Declaração de variáveis
    let valor = Number(document.getElementById("valor").value)
    let taxa = Number(document.getElementById("taxa").value)
    let tempo = Number(document.getElementById("tempo").value)

    let prestacao = valor + ( valor * (taxa/100) * tempo )

    document.getElementById("resultado").innerHTML = "Valor da prestação em atraso: R$ " + prestacao
}