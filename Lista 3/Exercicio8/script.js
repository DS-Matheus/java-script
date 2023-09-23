function verificarNumPrimo(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return num != 1;  
}

function botao() {
    let numero = Number(document.getElementById("input1").value)
    let h2 = document.getElementById("output")
    
    if (numero > 0) {
        if (verificarNumPrimo(numero)) {
            h2.innerHTML = `O número ${numero} é primo.`
        } else {
            h2.innerHTML = `O número ${numero} NÃO é primo.`
        }
    } else {
        h2.innerHTML = `Número inválido! Digite apenas números inteiros maiores que 0.`
    }

}