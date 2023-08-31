function Calcular() {
    // Declaração de variáveis
    let valorA = Number(document.getElementById("valorA").value)
    let valorB = Number(document.getElementById("valorB").value)

    //Método sem usar memória extra (variável temporária) - Ex: A = 1 | B = 2
    valorA = valorA + valorB //A: 1 + 2 = 3 (representa o total)           
    valorB = valorA - valorB //tira o B do valor total = sobra A | B: 3 - 2 = 1
    valorA = valorA - valorB //tira o A do valor total = sobra B | A: 3 - 1 = 2

    document.getElementById("resultado").innerHTML = "Valores trocados!<br>"
    + "Variável A: " + valorA + "<br>Variável B: " + valorB


}