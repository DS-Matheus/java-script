function botao() {
    let numero = Number(document.getElementById("input1").value)
    let h2 = document.getElementById("output")
    let soma = 0

    if (numero > 0) {
        for (let i = 1; numero >= i; i++) {
            soma += Math.pow(i, 2)
        }

        h2.innerHTML = `Soma do quadro dos ${numero} primeiros elementos: ${soma}`
    } else {
        h2.innerHTML = `Número inválido! Digite apenas números inteiros maiores que 0.`
    }
}