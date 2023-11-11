let button = document.querySelector("button")
button.addEventListener('click', () => {
    let numero1 = Number(document.getElementById("numero1").value)
    let numero2 = Number(document.getElementById("numero2").value)
    let numero3 = Number(document.getElementById("numero3").value)
    
    let h2 = document.querySelector("h2")

    if (numero1 == numero2 && numero1 == numero3) {     //3 números iguais
        h2.innerHTML = `Os 3 números são iguais e possuem o mesmo valor de ${numero1}`
    } else if (numero1 == numero2 && numero1 > numero3) {   //1 e 2 > 3
        h2.innerHTML = `Os números 1 e 2 são iguais (${numero1}) e maiores que o número 3 (${numero3})`
    } else if (numero1 == numero3 && numero1 > numero2) {   //1 e 3 > 2
        h2.innerHTML = `Os números 1 e 3 são iguais (${numero1}) e maiores que o número 2 (${numero2})`
    } else if (numero2 == numero3 && numero2 > numero1) {   //2 e 3 > 1
        h2.innerHTML = `Os números 2 e 3 são iguais (${numero2}) e maiores que o número 1 (${numero1})`
    } else if (numero1 > numero2 && numero1 > numero3) {    //1 > 2 e 3
        h2.innerHTML = `O número 1 (${numero1}) é o maior`
    } else if (numero2 > numero1 && numero2 > numero3) {    //2 > 1 e 3
        h2.innerHTML = `O número 2 (${numero2}) é o maior`
    } else if (numero3 > numero1 && numero3 > numero2) {    //3 > 1 e 2
        h2.innerHTML = `O número 3 (${numero3}) é o maior`
    } else {
        h2.innerHTML `ERRO - Não foi possível determinar qual número é maior.`
    }
})