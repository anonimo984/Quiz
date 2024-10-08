// Selecionando todos os elementos necessários
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const buttons = info_box.querySelectorAll(".buttons .restart");
const continue_btn_u01 = buttons[1];
const continue_btn_u02 = buttons[2];
const continue_btn_u03 = buttons[3];
const continue_btn_u04 = buttons[4];
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
const unidade1Questions  = questions.slice(0,60);
const unidade2Questions  = questions.slice(60,120);
const unidade3Questions  = questions.slice(120,180);
const unidade4Questions  = questions.slice(180,240);


// Função para embaralhar o array de perguntas
function shuffleQuestions(array) {
    console.log(array)
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(array)
    return array;
    
}

function removeDuplicates(questions) {
    const uniqueQuestions = new Map();
    questions.forEach(q => {
        uniqueQuestions.set(q.question, q);
    });
    return Array.from(uniqueQuestions.values());
}


// Se o botão de iniciar o quiz for clicado
start_btn.onclick = () => {
    questions = shuffleQuestions(questions); // Embaralhar as questões
    info_box.classList.add("activeInfo"); // Mostrar a caixa de informações
}

// Se o botão de sair do quiz for clicado
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); // Ocultar a caixa de informações
}

continue_btn_u01.onclick = () =>{
    questions = shuffleQuestions(unidade1Questions);
    info_box.classList.remove("activeInfo"); // Ocultar a caixa de informações
    quiz_box.classList.add("activeQuiz"); // Mostrar a caixa de quiz
    showQuetions(0); // Chamando a função showQuestions
    queCounter(1); // Passando o parâmetro 1 para queCounter
    startTimer(60); // Chamando a função startTimer com 60 segundos
    startTimerLine(0); // Chamando a função startTimerLine

}

continue_btn_u02.onclick = () =>{
    questions = shuffleQuestions(unidade2Questions);
    info_box.classList.remove("activeInfo"); // Ocultar a caixa de informações
    quiz_box.classList.add("activeQuiz"); // Mostrar a caixa de quiz
    showQuetions(0); // Chamando a função showQuestions
    queCounter(1); // Passando o parâmetro 1 para queCounter
    startTimer(60); // Chamando a função startTimer com 60 segundos
    startTimerLine(0); // Chamando a função startTimerLine
}

continue_btn_u03.onclick = () =>{
    questions = shuffleQuestions(unidade3Questions);
    info_box.classList.remove("activeInfo"); // Ocultar a caixa de informações
    quiz_box.classList.add("activeQuiz"); // Mostrar a caixa de quiz
    showQuetions(0); // Chamando a função showQuestions
    queCounter(1); // Passando o parâmetro 1 para queCounter
    startTimer(60); // Chamando a função startTimer com 60 segundos
    startTimerLine(0); // Chamando a função startTimerLine
}

continue_btn_u04.onclick = () =>{
    questions = shuffleQuestions(unidade4Questions);
    info_box.classList.remove("activeInfo"); // Ocultar a caixa de informações
    quiz_box.classList.add("activeQuiz"); // Mostrar a caixa de quiz
    showQuetions(0); // Chamando a função showQuestions
    queCounter(1); // Passando o parâmetro 1 para queCounter
    startTimer(60); // Chamando a função startTimer com 60 segundos
    startTimerLine(0); // Chamando a função startTimerLine
}

// Se o botão de continuar o quiz for clicado
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo"); // Ocultar a caixa de informações
    quiz_box.classList.add("activeQuiz"); // Mostrar a caixa de quiz
    showQuetions(0); // Chamando a função showQuestions
    queCounter(1); // Passando o parâmetro 1 para queCounter
    startTimer(60); // Chamando a função startTimer com 60 segundos
    startTimerLine(0); // Chamando a função startTimerLine
}

let timeValue = 60; // Tempo inicial definido para 60 segundos
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// Se o botão de reiniciar o quiz for clicado
restart_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz"); // Mostrar a caixa de quiz
    result_box.classList.remove("activeResult"); // Ocultar a caixa de resultados
    timeValue = 60; // Resetar o tempo para 60 segundos
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); // Chamando a função showQuestions
    queCounter(que_numb); // Passando que_numb para queCounter
    clearInterval(counter); // Limpar o contador
    clearInterval(counterLine); // Limpar o contador da linha de tempo
    startTimer(timeValue); // Chamando a função startTimer
    startTimerLine(widthValue); // Chamando a função startTimerLine
    timeText.textContent = "Tempo:"; // Alterar o texto de timeText para Tempo
    next_btn.classList.remove("show"); // Ocultar o botão de próximo
}

// Se o botão de sair do quiz for clicado
quit_quiz.onclick = () => {
    window.location.reload(); // Recarregar a página atual
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// Se o botão de próxima pergunta for clicado
next_btn.onclick = () => {
    if (que_count < questions.length - 1) { // Se o número da pergunta for menor que o comprimento total das perguntas
        que_count++; // Incrementar o número da pergunta
        que_numb++; // Incrementar o número da pergunta
        showQuetions(que_count); // Chamando a função showQuestions
        queCounter(que_numb); // Passando que_numb para queCounter
        clearInterval(counter); // Limpar o contador
        clearInterval(counterLine); // Limpar o contador da linha de tempo
        startTimer(timeValue); // Chamando a função startTimer
        startTimerLine(widthValue); // Chamando a função startTimerLine
        timeText.textContent = "Tempo"; // Alterar o texto de timeText para Tempo
        next_btn.classList.remove("show"); // Ocultar o botão de próximo
    } else {
        clearInterval(counter); // Limpar o contador
        clearInterval(counterLine); // Limpar o contador da linha de tempo
        showResult(); // Chamando a função showResult
    }
}

// Função para mostrar perguntas e opções
function showQuetions(index) {
    const que_text = document.querySelector(".que_text");
    let unidade = 1
    if(questions[index].numb >= 0 && questions[index].numb <= 60){
        unidade = 1
    }else if(questions[index].numb >= 61 && questions[index].numb <= 120){
        unidade = 2
    }else if(questions[index].numb >= 121 && questions[index].numb <= 180){
        unidade = 3
    }else if(questions[index].numb >= 181 && questions[index].numb <= 240){
        unidade = 4
    }

    // Criar uma nova tag span e div para a pergunta e opções, e passar o valor usando o índice do array
    let que_tag = '<span>'  + '(Unidade ' + unidade + ') ' +questions[index].numb + ". " + questions[index].question + '</span>';
    let option_tag = '<div class="option"><span>' + questions[index].options[0] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[1] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[2] + '</span></div>'
        + '<div class="option"><span>' + questions[index].options[3] + '</span></div>';
    que_text.innerHTML = que_tag; // Adicionar a nova tag span dentro de que_tag
    option_list.innerHTML = option_tag; // Adicionar a nova tag div dentro de option_tag

    const option = option_list.querySelectorAll(".option");

    // Definir o atributo onclick para todas as opções disponíveis
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

// Criar novas tags div para os ícones
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

// Se o usuário clicar em uma opção
function optionSelected(answer) {
    clearInterval(counter); // Limpar o contador
    clearInterval(counterLine); // Limpar o contador da linha de tempo
    let userAns = answer.textContent; // Obter a opção selecionada pelo usuário
    let correcAns = questions[que_count].answer; // Obter a resposta correta do array
    const allOptions = option_list.children.length; // Obter todos os itens de opção

    if (userAns == correcAns) { // Se a opção selecionada pelo usuário for igual à resposta correta
        userScore += 1; // Incrementar o valor da pontuação com 1
        answer.classList.add("correct"); // Adicionar a cor verde à opção selecionada corretamente
        answer.insertAdjacentHTML("beforeend", tickIconTag); // Adicionar o ícone de marcação à opção selecionada corretamente
        console.log("Resposta Correta");
        console.log("Suas respostas corretas = " + userScore);
    } else {
        answer.classList.add("incorrect"); // Adicionar a cor vermelha à opção selecionada incorretamente
        answer.insertAdjacentHTML("beforeend", crossIconTag); // Adicionar o ícone de cruz à opção selecionada incorretamente
        console.log("Resposta Errada");

        for (let i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correcAns) { // Se houver uma opção que corresponda à resposta do array
                option_list.children[i].setAttribute("class", "option correct"); // Adicionar a cor verde à opção correspondente
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); // Adicionar o ícone de marcação à opção correspondente
                console.log("Resposta correta selecionada automaticamente.");
            }
        }
    }
    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled"); // Uma vez que o usuário seleciona uma opção, desativar todas as opções
    }
    next_btn.classList.add("show"); // Mostrar o botão de próximo se o usuário selecionar qualquer opção
}

function showResult() {
    info_box.classList.remove("activeInfo"); // Ocultar a caixa de informações
    quiz_box.classList.remove("activeQuiz"); // Ocultar a caixa de quiz
    result_box.classList.add("activeResult"); // Mostrar a caixa de resultados
    const scoreText = result_box.querySelector(".score_text");
    let porcentagem = ((userScore / questions.length) * 100).toFixed(2);
    if (userScore > 3) { // Se o usuário acertou mais de 3
        // Criar uma nova tag span e passar o número da pontuação do usuário e o número total de perguntas
        let scoreTag = '<span>e meus parabéns 🎉, você acertou ' + userScore + ' de um total de ' + questions.length +  '. Um total de '+ porcentagem + '% de acerto.'+ '</span>';
        scoreText.innerHTML = scoreTag; // Adicionar a nova tag span dentro de scoreText
    } else if (userScore > 1) { // Se o usuário acertou mais de 1
        let scoreTag = '<span>e olha que legal 😎, você acertou ' + userScore + ' de um total de ' + questions.length + '. Um total de '+ porcentagem + '% de acerto.'+ '</span>';
        scoreText.innerHTML = scoreTag;
    } else { // Se o usuário acertou menos de 1
        let scoreTag = '<span>mas infelizmente 😐, você acertou apenas ' + userScore + ' de um total de ' + questions.length +  '. Um total de '+ porcentagem + '% de acerto.'+ '</span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time; // Alterar o valor de timeCount para o valor do tempo
        time--; // Decrementar o valor do tempo
        if (time < 10) { // Se o tempo for menor que 10
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; // Adicionar um 0 antes do valor do tempo
        }
        if (time < 0) { // Se o tempo for menor que 0
            clearInterval(counter); // Limpar o contador
            timeText.textContent = "Tempo esgotado"; // Alterar o texto do tempo para "Tempo esgotado"
            const allOptions = option_list.children.length; // Obter todos os itens de opção
            let correcAns = questions[que_count].answer; // Obter a resposta correta do array
            for (let i = 0; i < allOptions; i++) {
                if (option_list.children[i].textContent == correcAns) { // Se houver uma opção que corresponda à resposta do array
                    option_list.children[i].setAttribute("class", "option correct"); // Adicionar a cor verde à opção correspondente
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); // Adicionar o ícone de marcação à opção correspondente
                    console.log("Tempo: Resposta correta selecionada automaticamente.");
                }
            }
            for (let i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled"); // Uma vez que o tempo acabou, desativar todas as opções
            }
            next_btn.classList.add("show"); // Mostrar o botão de próximo
        }
    }
}

function queCounter(index) {
    // Criar uma nova tag span e passar o número da pergunta e o total de perguntas
    let totalQueCounTag = '<span>Questão: <p>' + index + '</p> de <p>' + questions.length + '</p></span>';
    bottom_ques_counter.innerHTML = totalQueCounTag; // Adicionar a nova tag span dentro de bottom_ques_counter
}
