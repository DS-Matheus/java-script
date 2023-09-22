function botao() {
    let numero = Number(document.getElementById("input1").value)
    let h2 = document.getElementById("output")
    let output = ``

    if (numero >= 1 && numero <= 100) {
        
        for (let i = numero; i <= 100; i += numero) {
            output += `${i} - `
        }

        output = output.slice(0, -3)
        
        if (output == `` || output == `${numero}`) {
            h2.innerHTML = `Dentro da faixa de 1 a 100, o número ${numero} não possuí valores múltiplos.`
        } else {
            h2.innerHTML = output
        }

    } else {
        h2.innerHTML = `Número inválido! Digite apenas números entre 1 a 100.`
    }

}