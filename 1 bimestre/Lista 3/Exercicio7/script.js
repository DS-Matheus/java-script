let soma = 0
let cont = 0

function botao() {
    let numero = Number(document.getElementById("input1").value)
    let h2 = document.getElementById("output")
    
    if (numero >= 0) {
        soma += numero
        cont++

    } else if (numero == -1) {
        h2.innerHTML = `Média dos elementos: ${soma/cont}`
        soma = 0
        cont = 0
    } else {
        h2.innerHTML = `Número inválido! Digite apenas números maiores que 0.`
    }

}