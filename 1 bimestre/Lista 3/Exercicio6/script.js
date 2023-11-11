function botao() {
    let numero = Number(document.getElementById("input1").value)
    let h2 = document.getElementById("output")

    if (numero == 1) {
        h2.innerHTML = `Não há elementos pares positivos menores que 1.`
    } else if (numero > 0) {

        let i = numero

        if (i % 2 != 0) {
            i -= 1
        }

        let soma = 0
        for (i; i >= 2; i -= 2) {
            soma += i
        }

        h2.innerHTML = `A soma dos elementos pares de 1 a ${numero}: ${soma}.`

    } else {
        h2.innerHTML = `Número inválido! Digite apenas números positivos maiores ou iguais a 1.`
    }

}