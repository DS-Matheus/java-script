function botao() {
    let palavra = document.getElementById("input1").value
    let h2 = document.getElementById("output")
    
    let contadorVogais = 0
    let arrayVogais = ['a', 'á', 'à', 'ã', 'â', 'ä', 'e', 'é', 'è', 'ê', 'ë', 'i', 'í', 'ì', 'î', 'ï', 'o', 'ó', 'ò', 'õ', 'ô', 'ö', 'u', 'ú', 'ù', 'û', 'ü']
    
    arrayLetras = palavra.split("")

    for (let i = 0; i < arrayLetras.length; i++) {

        if (arrayVogais.indexOf(arrayLetras[i].toLowerCase()) != -1) {
            contadorVogais += 1
        }

    }

    if (contadorVogais > 0) {
        h2.innerHTML = `Vogais encontradas: ${contadorVogais}`
    } else {
        h2.innerHTML = `Não foram encontradas vogais na palavra inserida.`
    }
 
}