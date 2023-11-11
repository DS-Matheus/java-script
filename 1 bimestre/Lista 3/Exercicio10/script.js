function botao() {
    let numero = Number(document.getElementById("input1").value)
    let h2 = document.getElementById("output")
    
    let output = `Sequência de ${numero} elementos de Fibonacci:<br>`
    
    if (numero > 0) {

        if (numero == 1) {
            output += `0`
        } else if (numero == 2) {
            output += `0 - 1`
        } else {
            let nAntecessor2 = 0
            let nAntecessor1 = 1
            
            output += "0 - 1 - "

            for (i = 1; i <= numero-2; i++) {
                let numeroSeq = nAntecessor2 + nAntecessor1
    
                output += `${numeroSeq} - `
    
                nAntecessor2 = nAntecessor1
                nAntecessor1 = numeroSeq
            }
    
            output = output.slice(0, -3)
        }
        
        h2.innerHTML = output
    } else {
        h2.innerHTML = `Número inválido! Digite apenas números inteiros maiores que 0.`
    }

}