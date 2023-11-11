function botao() {
    let numero = document.getElementById("input1").value
    let h2 = document.getElementById("output")

    let output = "Contagem regressiva:<br>"
    for (let i = numero; i > 0; i--) {
        output += `${i} - `
    }
    output += `0`

    h2.innerHTML = output
}