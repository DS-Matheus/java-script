let cinema = [];
let fileiras = ['A', 'B', 'C', 'D'];

// Criando o registro de cada poltrona no vetor bidimensional cinema
for (let i = 0; i < 4; i++) {
    cinema[i] = [];
    for (let j = 0; j < 20; j++) {
        cinema[i][j] = 0;
    }
}

// Função para exibir as legendas superiores (números das cadeiras)
function exibirLegendas() {
    // Div para a fileira de legendas superior
    let LegendasDiv = document.getElementById('legendas');
    LegendasDiv.innerHTML = '';
    
    // Criar uma div para cada elemento da legenda que receberá um valor (1 a 20)
    let legendaVazia = document.createElement('div');
    legendaVazia.className = 'legenda';

    // Cria uma div dentro da div de fileira com a legenda vázia (sem texto), esta é a que fica no canto superior esquerdo 
    LegendasDiv.appendChild(legendaVazia);
    
    // Loop para criar as demais legendas de 1 a 20
    for (let i = 1; i <= 20; i++) {
        let legenda = document.createElement('div');
        legenda.className = 'legenda';
        legenda.innerText = i;
        LegendasDiv.appendChild(legenda);
    }
    
}

// Função para exibir as legendas laterais e as poltronas, assim como atualizar o status destas.
function exibirCinema() {
    // Div principal da parte gráfica do cinema
    let cinemaDiv = document.getElementById('cinema');
    cinemaDiv.innerHTML = '';
    
    // Loop para criar as cadeiras e legendas laterais de cada fileira
    for (let i = 0; i < 4; i++) {
        // Para cada fileira, uma div será criada
        let fileiraDiv = document.createElement('div');
        fileiraDiv.className = 'fileira';
        
        // Cada elemento da legenda lateral será armazenado em uma div
        let LegendasDiv = document.createElement('div');
        LegendasDiv.className = 'legenda';

        // O texto da legenda de cada fileira será o indice correspondente ao iterador e sua posição no array fileiras
        LegendasDiv.innerText = fileiras[i];
        fileiraDiv.appendChild(LegendasDiv);
        
        // Dentro de uma fileira, 20 poltronas serão criadas por esse loop
        for (let j = 0; j < 20; j++) {
            // Para cada poltrona, cria-se uma div
            let poltrona = document.createElement('div');
            poltrona.className = 'poltrona';
            
            // Essa função é chamada também para atualizar o estado da tela, nessa parte atualiza-se o estado da poltrona
            // Se a poltrona ja tiver sido comprada, o seu valor será 1 e deverá ter a classe de 'ocupada' (que deixa a div vermelha)
            if (cinema[i][j] === 1) {
                poltrona.classList.add('ocupada');
            }
            
            // Envia as divs criadas para a fileira
            fileiraDiv.appendChild(poltrona);
        }
        
        // Envia a fileira para a div geral do cinema
        cinemaDiv.appendChild(fileiraDiv);
    }
}

// Função chamada pelo usuário ao interagir com o botão
function comprarPoltrona() {
    let fileira = prompt("Informe a fileira (A, B, C, D):");
    let indiceFileira = fileiras.indexOf(fileira.toUpperCase());
    
    // Se o indice não estiver entre 0 e 3, isto é, se o elemento digitado não estiver no array de fileiras válidas
    if (indiceFileira < 0 || indiceFileira > 3) {
        // Exibir a mensagem de erro e cancelar venda
        alert("Fileira inválida! Por favor, insira A, B, C ou D.");
        return;
    }

    // Fazer o mesmo com a poltrona (subtrair 1 por conta do indice inicial do array ser 0)
    let poltrona = prompt("Informe o número da poltrona (1-20):");
    let indicePoltrona = parseInt(poltrona) - 1;
    
    // Se o usuário não digitar um numero ou se ele não indicar um número válido
    if (isNaN(indicePoltrona) || indicePoltrona < 0 || indicePoltrona > 19) {
        alert("Número de poltrona inválido! Por favor, insira um número inteiro entre 1 e 20.");
        return;
    }

    // Se a poltrona estiver vaga (com valor 0)
    if (cinema[indiceFileira][indicePoltrona] === 0) {
        // Atribuir valor 1, o equivalente a comprar. E exibir mensagem de exito
        cinema[indiceFileira][indicePoltrona] = 1;
        alert("Poltrona comprada com sucesso!");
    } else {
        // Caso seja outro valor, diferente de 0, exibir que ela já está ocupada
        alert("Poltrona já está ocupada!");
    }

    // Atualizar exibição gráfica e contadores
    exibirCinema();
    atualizarStatus();
}

// Função responsável por contar quantas cadeiras estão vagas e quantas ocupadas
function atualizarStatus() {
    let qtdOcupadas = 0;
    let qtdVazias = 0;
    
    // Para cada fileira
    for (let i = 0; i < 4; i++) {
        // Para cada cadeira
        for (let j = 0; j < 20; j++) {
            // Testar se a fileira está ocupada (valor 1)
            if (cinema[i][j] === 1) {
                qtdOcupadas++;
            } else {
                qtdVazias++;
            }
        }
    }
    
    // Atualizar a exibição conforme os novos valores
    document.getElementById('status').innerHTML = "Poltronas: " + qtdOcupadas + " ocupadas, " + qtdVazias + " vazias.";
}

// Exibir a parte gráfica já que o script é carregado pelo código html
exibirLegendas();
exibirCinema();
atualizarStatus();