let button = document.querySelector("button")
button.addEventListener('click', () => {
    let ano = Number(document.getElementById("ano").value)

    let h2 = document.querySelector("h2")
    
    if (ano % 4 == 0) { //anos que são uniformemente divididos por 4 são bissextos

        if (ano % 100 == 0) { //com exceção de anos que podem ser divididos uniformemente por 100
            
            if (ano % 400 == 0) { //caso eles sejam divisiveis por 100 e 400, são bissextos
                h2.innerHTML = `O ano ${ano} é bissexto`
            } else {              //caso não sejam, não são bissextos
                h2.innerHTML = `O ano ${ano} NÃO é bissexto`
            }
        
        } else {    ///caso não sejam divisiveis por 100, mas sejam por 4, são bissextos
            h2.innerHTML = `O ano ${ano} é bissexto`
        }
    
    } else {    //caso não sejam divisiveis por nada
        h2.innerHTML = `O ano ${ano} NÃO é bissexto`
    }
})