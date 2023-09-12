let button = document.querySelector("button")
button.addEventListener('click', () => {
    let h2 = document.querySelector("h2")
    let saldoMedio = Number(document.getElementById("saldoMedio").value)

    if (saldoMedio < 0) {
        h2.innerHTML = `ERRO! O saldo médio é inválido!`
    } else if (saldoMedio >= 0 && saldoMedio <= 200) {
        h2.innerHTML = `Não há nenhum valor disponível para o saldo médio informado.`
    } else if (saldoMedio >= 201 && saldoMedio <= 400) {
        let porcentagem = 20
        let credito = saldoMedio * (porcentagem/100)
        
        h2.innerHTML = `Para o saldo informado está disponível o valor de crédito: R$ ${credito.toFixed(2)} (${porcentagem}%)`
    } else if (saldoMedio >= 401 && saldoMedio <= 600) {
        let porcentagem = 30
        let credito = saldoMedio * (porcentagem/100)
        
        h2.innerHTML = `Para o saldo informado está disponível o valor de crédito: R$ ${credito.toFixed(2)} (${porcentagem}%)`
    } else if (saldoMedio >= 601) {
        let porcentagem = 40
        let credito = saldoMedio * (porcentagem/100)
        
        h2.innerHTML = `Para o saldo informado está disponível o valor de crédito: R$ ${credito.toFixed(2)} (${porcentagem}%)`
    } else {
        h2.innerHTML = `ERRO! Não foi possível consultar o crédito disponível.`
    }
})