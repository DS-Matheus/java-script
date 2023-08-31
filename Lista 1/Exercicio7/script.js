function Calcular() {
    // Declaração de variáveis
    let custoFabrica= Number(document.getElementById("custo").value)

    let impostos = custoFabrica * 0.45
    let lucroRevendedor = custoFabrica * 0.25

    let valorVenda = custoFabrica + impostos + lucroRevendedor

    document.getElementById("resultado").innerHTML = "O carro será vendido no valor de R$ " + valorVenda
}