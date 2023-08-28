function Calcular() {
    // Declaração de variáveis
    let temperaturaF = Number(document.getElementById("temperaturaF").value)

    let temperaturaC = (temperaturaF - 32) * (5/9)

    document.getElementById("resultado").innerHTML = "Temperatura em °C: " + temperaturaC
}