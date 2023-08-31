function Calcular() {
    // Declaração de variáveis
    let altura = Number(document.getElementById("altura").value)
    let raio = Number(document.getElementById("raio").value)
    
    let litrosLata = 5
    let rendimentoLitro = 3
    let demaos = 2
    let PI = 3.14

    let areaBase = PI * Math.pow(raio, 2) //considerando que uma das bases está no chão, somente a superior será pintada
    let areaLateral = 2 * PI * raio * altura
    let areaCilindro = areaBase + areaLateral

    let qtdLitrosNecessarios = areaCilindro/rendimentoLitro * demaos
    let qtdLatas = Math.ceil(qtdLitrosNecessarios/litrosLata)

    let custo = qtdLatas * 40

    document.getElementById("resultado").innerHTML = `Para se pintar o cilindro de ${areaCilindro.toFixed(2)} m²,`
    + ` são necessários ${qtdLitrosNecessarios.toFixed(2)} litros de tinta para ${demaos} demãos.<br>Assim é preciso`
    + ` adquirir o equivalente a ${qtdLatas} latas de tinta, totalizando o valor de R$ ${custo.toFixed(2)}`
}