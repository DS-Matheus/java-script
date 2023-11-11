function botao() {
    let numero = Number(document.getElementById("input1").value)
    let h2 = document.getElementById("output")
    let soma = 0

    let output = `== Tabuada do ${numero} ==<br>`
    if (numero >= 0) {
        for (let i = 0; i <= 10; i++) {
            output += `° ${numero}x${i} = ${numero*i}<br>` 
        }

        h2.innerHTML = output
    } else {
        h2.innerHTML = `Número inválido! Digite apenas números inteiros não negativos.`
    }
}