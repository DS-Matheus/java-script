let button = document.querySelector("button")
button.addEventListener('click', () => {
    let num1 = Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("num2").value)
    let h2 = document.querySelector("h2")
    
    if (num1 > num2)
        h2.innerHTML = `O número 1 (${num1}) é maior que o número 2 (${num2})`
    else if (num1 < num2)
        h2.innerHTML = `O número 2 (${num2}) é maior que o número 1 (${num1})`
    else 
        h2.innerHTML = `Ambos números são iguais (${num1})`

})