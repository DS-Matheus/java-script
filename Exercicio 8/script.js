function Calcular() {
    // Declaração de variáveis
    let nome = document.getElementById("nome").value
    let vlrSalarioFixo = Number(document.getElementById("vlrSalarioFixo").value)
    let vlrVendas= Number(document.getElementById("vlrVendas").value)

    let comissão = vlrVendas * 0.15
    let salarioFinal = vlrSalarioFixo + comissão

    document.getElementById("resultado").innerHTML = "O vendedor '" + nome +"' deverá receber R$ "
    + vlrSalarioFixo +" como salário fixo, acrescido da sua comissão de R$ " + comissão
    + " que totaliza o salário final de R$ " + salarioFinal
}