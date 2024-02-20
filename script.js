const questionContainer = document.getElementById('question');
const answerInput = document.getElementById('answer');
const resultContainer = document.getElementById('result');
const checkboxes = document.querySelectorAll('.tabuada');
const customKeys = document.querySelectorAll('.key');
const zeroButton = document.querySelector('.zero');
const clearButton = document.getElementById('clear');
let score = 0;
let currentAnswer = null; // Armazena a resposta atual para comparação
let selectedTabuadas = []; // Array para armazenar as tabuadas selecionadas
let dataframe = []; // Array para armazenar os dados

customKeys.forEach(key => {
  key.addEventListener('click', () => {
    answerInput.value += key.textContent;})
});

zeroButton.addEventListener('click', () => {
  answerInput.value += '0';});

  clearButton.addEventListener('click', () => {
    answerInput.value = null;
});

function generateQuestion() {
    const randomTabuada = selectedTabuadas[Math.floor(Math.random() * selectedTabuadas.length)];
    const num2 = Math.floor(Math.random() * 10) + 1; // Número aleatório de 1 a 10
    currentAnswer = randomTabuada * num2; // Armazena a resposta atual
    questionContainer.innerHTML = `Tabuada selecionada: ${randomTabuada}<br><br>Pergunta:<br>${randomTabuada} x ${num2} = ?`;
}

function startChallenge() {
    selectedTabuadas = []; // Limpa as tabuadas selecionadas
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedTabuadas.push(parseInt(checkbox.value));
        }
    });
    if (selectedTabuadas.length > 0) {
        generateQuestion(); // Gera a primeira pergunta ao iniciar o desafio
    } else {
        alert('Thawane❤️, você deve selecionar pelo menos uma tabuada para estudar.');
    }
}

function checkAnswer() {
    const userAnswer = parseInt(answerInput.value);
    const status = userAnswer === currentAnswer ? 'Acerto' : 'Erro';
    const currentDate = new Date().toLocaleString(); // Obtém a data e hora atuais

    dataframe.push({
        data: currentDate,
        pergunta: questionContainer.textContent,
        resposta: userAnswer,
        status: status
    });

    if (userAnswer === currentAnswer) {
        score++;
        resultContainer.innerHTML  = '<span class="result-green">Correto!❤️</span>';
    } else {
        resultContainer.innerHTML  = `<span class="result-red">Incorreto!😠 A resposta correta é ${currentAnswer}.</span>`;
    }
    answerInput.value = ''; // Limpa o campo de resposta
    setTimeout(() => {
        resultContainer.textContent = ''; // Limpa a mensagem após alguns segundos
        generateQuestion(); // Gera uma nova pergunta após verificar a resposta
    }, 3000); // 3000 milissegundos = 3 segundos
}

