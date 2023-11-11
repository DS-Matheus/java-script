function botao() {
    let numero = Number(document.getElementById("input1").value)
    let h2 = document.getElementById("output")
   
    if (numero == 1) {
        h2.innerHTML = `1! = 1`
    } else if (numero > 0) {
        let resultado = 1

        for (let i=2; i <= numero; i++) {
            resultado *= i
        }

        h2.innerHTML = `${numero}! = ${resultado}`

    } else {
        h2.innerHTML = `Número inválido! Digite apenas números inteiros maiores que 0.`
    }

}