function Calcular() {
    // Declaração de variáveis
    let cotacaoDolar = Number(document.getElementById("cotacaoDolar").value)
    let valorDolares = Number(document.getElementById("valorDolares").value)

    let valorReais = valorDolares * cotacaoDolar

    document.getElementById("resultado").innerHTML = "Valor em reais: R$ " + valorReais
}