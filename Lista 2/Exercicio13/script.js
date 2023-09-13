let button = document.querySelector("button")
button.addEventListener('click', () => {
    let h2 = document.querySelector("h2")
    let valorA = Number(document.getElementById("valorA").value)
    let valorB = Number(document.getElementById("valorB").value)
    let valorC = Number(document.getElementById("valorC").value)

    let somaAB = valorA + valorB
    let somaBC = valorB + valorC
    let somaAC = valorA + valorC

    if ((valorA < somaBC) && (valorB < somaAC) && (valorC < somaAB)) { //se formar um triângulo
        if (valorA == valorB && valorA == valorC) { //se todos angulos foram iguais = equilátero
            h2.innerHTML = `Os valores informados formam um triângulo equilátero`
        } else if (valorA == valorB || valorA == valorC || valorB == valorC) { //se 2 lados forem iguais = isósceles
            h2.innerHTML = `Os valores informados formam um triângulo isósceles`
        } else { // se cada lado for diferente = escaleno
            h2.innerHTML = `Os valores informados formam um triângulo escaleno`
        }
    } else {    //se não formar um triângulo
        h2.innerHTML = `Os valores informados não formam um triângulo!`
    }
})