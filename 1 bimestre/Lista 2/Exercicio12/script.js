let button = document.querySelector("button")
button.addEventListener('click', () => {
    let h2 = document.querySelector("h2")
    let codigo = Number(document.getElementById("codigo").value)
    let quantidade = Number(document.getElementById("quantidade").value)

    if (codigo == 100) {    //cachorro quente - 1,20
        preco = quantidade * 1.2      
        h2.innerHTML = `${quantidade}x Cachorro quente = R$ ${preco.toFixed(2)}`
    }
    else if (codigo == 101) { //bauru simples - 1,30
        preco = quantidade * 1.3
        h2.innerHTML = `${quantidade}x Bauru simples = R$ ${preco.toFixed(2)}`
    }
    else if (codigo == 102) { //bauru com ovo - 1,50
        preco = quantidade * 1.5
        h2.innerHTML = `${quantidade}x Bauru com ovo = R$ ${preco.toFixed(2)}`
    }
    else if (codigo == 103) { //hamburguer - 1,20
        preco = quantidade * 1.2
        h2.innerHTML = `${quantidade}x Hamburguer = R$ ${preco.toFixed(2)}`
    }
    else if (codigo == 104) { //cheeseburguer - 1,30
        preco = quantidade * 1.3
        h2.innerHTML = `${quantidade}x Cheeseburguer = R$ ${preco.toFixed(2)}`
    }
    else if (codigo == 105) { //refrigerante - 1,00
        preco = quantidade * 1
        h2.innerHTML = `${quantidade}x Refrigerante = R$ ${preco.toFixed(2)}`
    }
    else {
        h2.innerHTML = `O código informado não é válido!`
    }
})