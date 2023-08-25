function Calcular() {
    // Declaração de variáveis
    let numero1 = Number(document.getElementById("numero1").value)
    let numero2 = Number(document.getElementById("numero2").value)

    let soma = numero1 + numero2
    let subtracao = numero1 - numero2
    let multiplicacao = numero1 * numero2
    let divisao = numero1 / numero2

    document.getElementById("resultado").innerHTML = "Resultados obtidos entre os números " //linha 1
    + numero1 +" e " + numero2 + ":<br>"                                                    //linha 1
    + "Soma: " + soma + "<br>"                                                              //linha 2
    + "Subtração: " + subtracao + "<br>"                                                    //linha 3
    + "Multiplicação: " + multiplicacao + "<br>"                                            //linha 4
    + "Divisão: " + divisao                                                                 //linha 5
}