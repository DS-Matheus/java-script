let button = document.querySelector("button")
button.addEventListener('click', () => {
    let numero1 = Number(document.getElementById("numero1").value)
    let numero2 = Number(document.getElementById("numero2").value)
    let numero3 = Number(document.getElementById("numero3").value)
    
    let h2 = document.querySelector("h2")

    let array = []
    array.push(numero1)
    array.push(numero2)
    array.push(numero3)

    array.sort(function(a, b) {
        return a - b;
    });

    h2.innerHTML = `Elementos organizados em ordem crescente: ` + array
})