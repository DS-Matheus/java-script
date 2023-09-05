let button = document.querySelector("button")
button.addEventListener('click', () => {
    let numero = Number(document.getElementById("numero").value)

    let h2 = document.querySelector("h2")
    
    if (numero % 2 == 0) {
        h2.innerHTML = `O número ${numero} é par`
    } else {
        h2.innerHTML = `O número ${numero} é ímpar`
    }
})