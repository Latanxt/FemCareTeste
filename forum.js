const users = ['maria', 'ana', 'clara'];
let userIndex = 0;

const synonyms = {
    "oi": ["tudo bem?", "como cês tão?", "tudo certo?", "tão bem?"],
    "maria": ["maria", "maira", "miria", "mira"],
    "ana": ["an", "ane", "naa", "na", "ana"],
    "clara": ["clara", "ciara", "carla", "calra"],
    "gravidez": ["grávida", "gravidez", "gestação", "gestante"],
    "sintomas": ["sintomas", "sinais", "sinais de alerta", "primeiros sintomas"],
    "exercícios": ["exercícios", "exercicios", "atividade física"],
    "pré-natal": ["pre natal", "prenatal", "pré natal"],
    "exames": ["exames", "testes", "análises"],
    "remédios": ["remédios", "medicamentos", "remedio"],
    "enjoos": ["enjoos", "náuseas", "enjoo"],
    "dores": ["dores", "dor", "dores nas costas", "dores de cabeça"],
    "parto": ["parto", "dar à luz", "nascimento"],
    "alimentação": ["alimentação", "comida", "nutrição", "introdução alimentar"],
    "depressão": ["depressão", "tristeza", "pós-parto", "ansiedade", "solidão", "desânimo"],
    "vacinação": ["vacinação", "vacinas", "imunização"],
    "ciúmes": ["ciúmes", "ciumes", "inveja"],
    "birras": ["birras", "birra", "birrinha"],
    "socialização": ["socialização", "amigos", "interação"],
    "acidentes": ["acidentes", "acidente", "segurança"],
    "sonos": ["sono", "dormir", "dificuldades para dormir"],
    "saúde": ["saúde", "preocupações", "saúde do bebê"]
};

// Função para normalizar a entrada
function normalizeInput(input) {
    const normalized = input.toLowerCase().trim();
    for (const key in synonyms) {
        if (synonyms[key].includes(normalized)) {
            return key; // Retorna a chave se um sinônimo for encontrado
        }
    }
    return normalized; // Retorna a entrada normalizada se nada for encontrado
}

// Função para adicionar mensagem do usuário
function appendMessage(message, type, user = '') {
    const chatResponse = document.getElementById('chat-response');
    const div = document.createElement('div');
    div.className = `chat-message ${type}`;
    div.innerText = user ? `${user}: ${message}` : message; // Adiciona o nome do usuário/bot se disponível
    chatResponse.appendChild(div);
    chatResponse.scrollTop = chatResponse.scrollHeight; // Rola para a última mensagem
}

// Função para enviar mensagens do usuário
function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value;
    if (message.trim()) {
        appendMessage(message, 'user', 'Você');
        input.value = '';

        // Simulação de resposta do bot com perguntas comuns
        setTimeout(() => {
            let response;
            const user = users[userIndex % users.length]; // Escolhe a usuária a partir do índice
            const normalizedMessage = normalizeInput(message); // Normaliza a mensagem do usuário

            if (!normalizedMessage.includes('maria') && !normalizedMessage.includes('ana') && !normalizedMessage.includes('clara')) {
                response = "Assistente: Humm, parece que você não mencionou ninguém. Mencione o nome de um dos bots, para eles te atenderem!";
            }

            if (normalizedMessage.includes('maria')) {
                if (normalizedMessage.includes('oi')) {
                    response = "Maria: Oi! Tudo certinho por aqui, e você?";
                } else if (normalizedMessage.includes('gravidez')) {
                    response = "Maria: Você pode fazer um teste de gravidez ou falar com um médico!";
                } else if (normalizedMessage.includes('sintomas')) {
                    response = "Maria: Os primeiros sinais podem ser enjoos e atraso na menstruação.";
                } else if (normalizedMessage.includes('exercícios')) {
                    response = "Maria: Exercícios leves são de boa, mas sempre bom consultar o médico, né?";
                } else if (normalizedMessage.includes('pré-natal')) {
                    response = "Maria: O ideal é começar assim que souber que tá grávida.";
                } else if (normalizedMessage.includes('exames')) {
                    response = "Maria: Exames de sangue e ultrassom são super importantes!";
                } else if (normalizedMessage.includes('remédios')) {
                    response = "Maria: Alguns remédios são seguros, mas sempre pergunta pro médico.";
                } else if (normalizedMessage.includes('enjoos')) {
                    response = "Maria: Tente chá de gengibre ou comer algo leve ao acordar!";
                } else if (normalizedMessage.includes('dores')) {
                    response = "Maria: Alongamentos e boa postura ajudam bastante!";
                } else if (normalizedMessage.includes('parto')) {
                    response = "Maria: Conversar com outras mamães pode te ajudar muito!";
                } else {
                    response = "Maria: Humm, não sei bem... Vou dar uma pesquisada!";
                }
            }

            if (normalizedMessage.includes('ana')) {
                if (normalizedMessage.includes('oi')) {
                    response = "Ana: Tô ótima, obrigada! E você?";
                } else if (normalizedMessage.includes('depressão') || normalizedMessage.includes('tristeza') || normalizedMessage.includes('pós-parto')) {
                    response = "Ana: Conversar com alguém de confiança ajuda muito..";
                    response += " Sinto muito por você estar passando por isso. É importante falar sobre esses sentimentos. Você já considerou buscar ajuda profissional?";
                } else {
                    response = "Ana: Humm, não sei... Mas vou ficar de olho no chat!";
                }
            }

            if (normalizedMessage.includes('clara')) {
                if (normalizedMessage.includes('oi')) {
                    response = "Clara: Oi! Tudo tranquilo por aqui.";
                } else if (normalizedMessage.includes('socialização')) {
                    response = "Clara: Brincar com outras crianças é ótimo pra socialização.";
                } else {
                    response = "Clara: Humm, não sei... Mas vou pesquisar!";
                }
            }

            appendMessage(response, 'bot', user); // Resposta do bot
            userIndex++; // Avança para a próxima usuária
        }, 1000);
    }
}

// Função para simular usuários
function simulateUser() {
    if (userIndex < users.length) {
        // Inicia as mensagens de conversa
        displayMessages(userIndex); // Passa o índice do usuário
        
        userIndex++;
        setTimeout(simulateUser, 4000); // Espera mais 4 segundos antes de adicionar a próxima usuária
    }
}

// Função para exibir mensagens pré-definidas
function displayMessages(currentUserIndex) {
    const chatResponse = document.getElementById('chat-response');
    let delay = 0;

    // Exibe as mensagens de acordo com o índice do usuário
    const messages = [
        ["Oi! Como cês tão?", "Quais especializações vocês recomendam?", "Ainda não, mas tô pensando em fazer.", "Tava pensando em fazer exame por aqui..", "Alguém sabe como funciona o atendimento?", "Ah Brigada gente, vou fazer depois"],
        ["Oi tô bem, e você?", "Você já fez algum agendamento recentemente?", "Eu recomendo endocrinologia, super atenciosos.", "Aqui é bem fácil", "É só chegar com o cartão do SUS."],
        ["Oiee, Tudo tranquilo por aqui.", "Sim, fiz um mês passado!", "Ginecologia é ótima!", "É bem tranquilo, só levar os documentos."]
    ];

    messages[currentUserIndex].forEach((message) => {
        setTimeout(() => {
            const msgDiv = document.createElement('div');
            msgDiv.className = `chat-message bot ${users[currentUserIndex].toLowerCase()}`; // Classe do bot
            msgDiv.innerText = `${users[currentUserIndex]}: ${message}`;
            
            chatResponse.appendChild(msgDiv);
            chatResponse.scrollTop = chatResponse.scrollHeight; // Rola para o fundo
        }, delay);
        delay += 7000; // Atraso de 7 segundos entre as mensagens de cada usuária
    });
}

// Inicia a simulação de usuários ao carregar a página
window.onload = () => {
    document.getElementById('send-button').addEventListener('click', sendMessage);
    simulateUser(); // Inicia a simulação
};
