let button = document.querySelector("button")
button.addEventListener('click', () => {
    let h2 = document.querySelector("h2")
    let idade = Number(document.getElementById("idade").value)

    if (idade <= 0) {
        h2.innerHTML = `ERRO! A idade informada é inválida!`
    } else if (idade < 5) {
        h2.innerHTML = `O atleta ainda não possuí idade suficiente para se encaixar em uma das categorias de natação. `
    } else if (idade >= 5 && idade <= 7) {
        h2.innerHTML = `O atleta fará parte da categoria 'Infantil A'`
    } else if (idade >= 8 && idade <= 10) {
        h2.innerHTML = `O atleta fará parte da categoria 'Infantil B'`
    } else if (idade >= 11 && idade <= 13) {
        h2.innerHTML = `O atleta fará parte da categoria 'Juvenil A'`
    } else if (idade >= 14 && idade <= 17) {
        h2.innerHTML = `O atleta fará parte da categoria 'Juvenil B'`
    } else if (idade >= 18) {
        h2.innerHTML = `O atleta fará parte da categoria 'adultos'`
    } else {
        h2.innerHTML = `ERRO! Não foi possível classificar o atleta em nenhuma categoria.`
    }
})