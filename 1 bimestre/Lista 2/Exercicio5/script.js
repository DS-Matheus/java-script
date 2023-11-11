let button = document.querySelector("button")
button.addEventListener('click', () => {
    let numeroA = Number(document.getElementById("numero1").value)
    let numeroB = Number(document.getElementById("numero2").value)
    
    let h2 = document.querySelector("h2")

    if (numeroA % numeroB == 0 || numeroB % numeroA == 0) {
        h2.innerHTML = `${numeroA} e ${numeroB} são múltiplos!`
    } else {
        h2.innerHTML = `${numeroA} e ${numeroB} NÃO são múltiplos!`
    }
    
})