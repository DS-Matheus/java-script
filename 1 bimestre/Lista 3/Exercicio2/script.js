function botao() {
    let numero = Number(document.getElementById("input1").value)
    let h2 = document.getElementById("output")
    let soma = 0

    if (numero > 0) {
        for (numero -= 1; numero > 0; numero--) {
            soma += numero
        }
        h2.innerHTML = `Soma dos números antecessores: ${soma}`
    } else {
        h2.innerHTML = `Número inválido! Digite apenas números inteiros maiores que 0.`
    }
}