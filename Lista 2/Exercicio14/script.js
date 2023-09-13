let button = document.querySelector("button")
button.addEventListener('click', () => {
    let h2 = document.querySelector("h2")
    let idade = Number(document.getElementById("idade").value)
    let altura = Number(document.getElementById("altura").value)
    let sexo = document.getElementById("sexo").value
    
    if (sexo == "m" || sexo == "M") {                   //masculino
        
        if (altura > 1.7) {                                 //maior que 1.7
            
            if (idade <= 20 && idade > 0) {                     //idade menor ou igual a 20 
                let pesoIdeal = (72.7 * altura)-58
                h2.innerHTML = `Peso ideal: ${pesoIdeal.toFixed(2)}`
            } else if (idade >= 21 && idade <= 39) {            //idade entre 21 e 39
                let pesoIdeal = (72.7 * altura)-53
                h2.innerHTML = `Peso ideal: ${pesoIdeal.toFixed(2)}`
            } else if (idade >= 40) {                           //idade maior ou igual a 40
                let pesoIdeal = (72.7 * altura)-45
                h2.innerHTML = `Peso ideal: ${pesoIdeal.toFixed(2)}`
            } else {                                            //idade inválida
                h2.innerHTML = `A idade informada não é válida`
            }
            
        } else if (altura <= 1.7 && altura > 0) {           //menor ou igual a 1.7
            
            if (idade <= 40 && idade > 0) {                     //idade menor ou igual a 40
                let pesoIdeal = (72.7 * altura)-50
                h2.innerHTML = `Peso ideal: ${pesoIdeal.toFixed(2)}`
            } else if (idade > 40) {                            //idade maior que 40
                let pesoIdeal = (72.7 * altura)-58
                h2.innerHTML = `Peso ideal: ${pesoIdeal.toFixed(2)}`
            } else {                                            //idade inválida
                h2.innerHTML = `A idade informada não é válida`
            }
            
        } else {                                            //altura inválida
            h2.innerHTML = `A altura informada não é válida`
        }
        
    } else if (sexo == "f" || sexo == "F") {            //feminino
        
        if (altura > 1.5) {                                 //maior que 1.5
            
            if (idade > 0) {                                    //idade válida
                let pesoIdeal = (62.1 * altura)-44.7
                h2.innerHTML = `Peso ideal: ${pesoIdeal.toFixed(2)}`
            } else {                                            //idade inválida
                h2.innerHTML = `A idade informada não é válida`
            }
            
        } else if (altura <= 1.5 && altura > 0) {           //menor ou igual a 1.5
            
            if (idade >= 35) {                                  //idade maior ou igual a 35
                let pesoIdeal = (62.1 * altura)-45
                h2.innerHTML = `Peso ideal: ${pesoIdeal.toFixed(2)}`
            } else if (idade < 35 && idade > 0) {               //idade menor que 35
                let pesoIdeal = (62.1 * altura)-49
                h2.innerHTML = `Peso ideal: ${pesoIdeal.toFixed(2)}`
            } else {                                            //idade inválida
                h2.innerHTML = `A idade informada não é válida`
            }

        } else {                                            //altura inválida
            h2.innerHTML = `A altura informada não é válida`
        }
        
    } else {                                            //sexo inválido
        h2.innerHTML = `O sexo informado não é válido! <br>Utilize M para masculino e F para feminino.`
    }   
})