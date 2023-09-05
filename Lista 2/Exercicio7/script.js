function Calcular() {
    // Declaração de variáveis
    let valorA = Number(document.getElementById("valorA").value)
    let valorB = Number(document.getElementById("valorB").value)
    let valorC = Number(document.getElementById("valorC").value)
    let valorResultado = Number(document.getElementById("valorResultado").value)

    if (valorA == 0) {
        document.getElementById("resultado").innerHTML = "A equação apresentada não é de segundo grau pois o valor de A é 0"
    } else {
        
        //Equação do segundo grau: Ax^2 + Bx + C = 0
    
        if (valorResultado != 0) {
            valorC -= valorResultado
            valorResultado = 0
        }
        if (valorA == null) {
            valorA = 0
        }
        if (valorB == null) {
            valorB == 0
        }
        if (valorC == null) { 
            valorC == 0
        }
        if (valorResultado == null) {
            valorResultado == 0
        }
    
        //Delta = B^2 - 4.a.c
        let valorDelta = Math.pow(valorB, 2) - (4 * valorA * valorC)
    
        // delta < 0 - não possuí raízes reais; delta = 0 - 1 raíz; delta > 0 - 2 raízes
        if (valorDelta < 0) {
            document.getElementById("resultado").innerHTML = "A equação apresentada não possuí uma raíz com valor real "
            + `(Delta é negativo e de valor ${valorDelta})`
        }
        else if (valorDelta == 0) {
            let raizDelta = Math.sqrt(valorDelta)
            let valorRaiz = (-valorB + raizDelta) / (2 * valorA)
            
            document.getElementById("resultado").innerHTML = "A equação apresentada possuí a raíz de valor: " + valorRaiz
        }
        else {
            let raizDelta = Math.sqrt(valorDelta)
            let valorRaiz1 = (-valorB + raizDelta) / (2 * valorA)
            let valorRaiz2 = (-valorB - raizDelta) / (2 * valorA)
            
            document.getElementById("resultado").innerHTML = "A equação apresentada possuí as raízes de valor: "
            + valorRaiz1 + " e " + valorRaiz2
        }

    }


}