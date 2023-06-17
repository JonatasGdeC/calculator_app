function appendToResult(value) {
    document.querySelector(".result").value += value;
}

function calculateResult() {
    let result = eval(document.querySelector(".result").value);
    document.querySelector(".result").value = result;
}

function clearResult() {
    document.querySelector(".result").value = "";
}

function deleteCharacter() {
    let currentResult = document.querySelector(".result").value;
    document.querySelector(".result").value = currentResult.slice(0, -1);
}

var count = 0;
const buttonSelect = document.querySelector('.theme__button')
const ball = document.querySelector('.theme__button__ball')

buttonSelect.addEventListener('click', function(e){
    count++

    if(count == 1){
        ball.style.left='calc(100% - 43px)';
        addStyle2()
    }

    if(count == 2){
        ball.style.left='calc(100% - 22px)';
        addStyle3()
    }

    if(count == 3){
        ball.style.left='calc(100% - 65px)';
        addMainStyle()
        count = 0;
    }
})



function addMainStyle(){
    document.querySelector('body').classList.remove('body--style3')
    document.querySelector('.header').classList.remove('header--style3')
    document.querySelector('.theme__button').classList.remove('theme__button--style3')
    document.querySelector('.theme__button__ball').classList.remove('theme__button__ball--style3')
    document.querySelector('.result').classList.remove('result--style3')
    document.querySelector('.calc').classList.remove('calc--style3')
    buttonsStyleMain()
}

function addStyle2(){
    document.querySelector('body').classList.add('body--style2')
    document.querySelector('.header').classList.add('header--style2')
    document.querySelector('.theme__button').classList.add('theme__button--style2')
    document.querySelector('.theme__button__ball').classList.add('theme__button__ball--style2')
    document.querySelector('.result').classList.add('result--style2')
    document.querySelector('.calc').classList.add('calc--style2')
    buttonsStyle2()
}

function addStyle3(){
    document.querySelector('body').classList.remove('body--style2')
    document.querySelector('body').classList.add('body--style3')

    document.querySelector('.header').classList.remove('header--style2')
    document.querySelector('.header').classList.add('header--style3')

    document.querySelector('.theme__button').classList.remove('theme__button--style2')
    document.querySelector('.theme__button').classList.add('theme__button--style3')

    document.querySelector('.theme__button__ball').classList.remove('theme__button__ball--style2')
    document.querySelector('.theme__button__ball').classList.add('theme__button__ball--style3')

    document.querySelector('.result').classList.remove('result--style2')
    document.querySelector('.result').classList.add('result--style3')

    document.querySelector('.calc').classList.remove('calc--style2')
    document.querySelector('.calc').classList.add('calc--style3')

    buttonsStyle3()
}

function buttonsStyleMain(){
    var buttons = document.querySelectorAll('.calc__buttons__button')
    var buttonsDel = document.querySelectorAll('.calc__buttons__button--del')
    const buttonResult = document.querySelector('.calc__buttons__button--result')

    buttons[0].classList.remove('calc__buttons__button--style3')
    buttons[1].classList.remove('calc__buttons__button--style3')
    buttons[2].classList.remove('calc__buttons__button--style3')
    buttons[3].classList.remove('calc__buttons__button--style3')
    buttons[4].classList.remove('calc__buttons__button--style3')
    buttons[5].classList.remove('calc__buttons__button--style3')
    buttons[6].classList.remove('calc__buttons__button--style3')
    buttons[7].classList.remove('calc__buttons__button--style3')
    buttons[8].classList.remove('calc__buttons__button--style3')
    buttons[9].classList.remove('calc__buttons__button--style3')
    buttons[10].classList.remove('calc__buttons__button--style3')
    buttons[11].classList.remove('calc__buttons__button--style3')
    buttons[12].classList.remove('calc__buttons__button--style3')
    buttons[13].classList.remove('calc__buttons__button--style3')
    buttons[14].classList.remove('calc__buttons__button--style3')
    buttons[15].classList.remove('calc__buttons__button--style3')
    buttons[16].classList.remove('calc__buttons__button--style3')

    buttonsDel[0].classList.remove('calc__buttons__button--del--style3')
    buttonsDel[1].classList.remove('calc__buttons__button--del--style3')

    buttonResult.classList.remove('calc__buttons__button--result--style3')
}

function buttonsStyle2(){
    var buttons = document.querySelectorAll('.calc__buttons__button')
    var buttonsDel = document.querySelectorAll('.calc__buttons__button--del')
    const buttonResult = document.querySelector('.calc__buttons__button--result')

    buttons[0].classList.add('calc__buttons__button--style2')
    buttons[1].classList.add('calc__buttons__button--style2')
    buttons[2].classList.add('calc__buttons__button--style2')
    buttons[3].classList.add('calc__buttons__button--style2')
    buttons[4].classList.add('calc__buttons__button--style2')
    buttons[5].classList.add('calc__buttons__button--style2')
    buttons[6].classList.add('calc__buttons__button--style2')
    buttons[7].classList.add('calc__buttons__button--style2')
    buttons[8].classList.add('calc__buttons__button--style2')
    buttons[9].classList.add('calc__buttons__button--style2')
    buttons[10].classList.add('calc__buttons__button--style2')
    buttons[11].classList.add('calc__buttons__button--style2')
    buttons[12].classList.add('calc__buttons__button--style2')
    buttons[13].classList.add('calc__buttons__button--style2')
    buttons[14].classList.add('calc__buttons__button--style2')
    buttons[15].classList.add('calc__buttons__button--style2')
    buttons[16].classList.add('calc__buttons__button--style2')

    buttonsDel[0].classList.add('calc__buttons__button--del--style2')
    buttonsDel[1].classList.add('calc__buttons__button--del--style2')

    buttonResult.classList.add('calc__buttons__button--result--style2')
}

function buttonsStyle3(){
    var buttons = document.querySelectorAll('.calc__buttons__button')
    var buttonsDel = document.querySelectorAll('.calc__buttons__button--del')
    const buttonResult = document.querySelector('.calc__buttons__button--result')

    buttons[0].classList.remove('calc__buttons__button--style2')
    buttons[1].classList.remove('calc__buttons__button--style2')
    buttons[2].classList.remove('calc__buttons__button--style2')
    buttons[3].classList.remove('calc__buttons__button--style2')
    buttons[4].classList.remove('calc__buttons__button--style2')
    buttons[5].classList.remove('calc__buttons__button--style2')
    buttons[6].classList.remove('calc__buttons__button--style2')
    buttons[7].classList.remove('calc__buttons__button--style2')
    buttons[8].classList.remove('calc__buttons__button--style2')
    buttons[9].classList.remove('calc__buttons__button--style2')
    buttons[10].classList.remove('calc__buttons__button--style2')
    buttons[11].classList.remove('calc__buttons__button--style2')
    buttons[12].classList.remove('calc__buttons__button--style2')
    buttons[13].classList.remove('calc__buttons__button--style2')
    buttons[14].classList.remove('calc__buttons__button--style2')
    buttons[15].classList.remove('calc__buttons__button--style2')
    buttons[16].classList.remove('calc__buttons__button--style2')

    buttonsDel[0].classList.remove('calc__buttons__button--del--style2')
    buttonsDel[1].classList.remove('calc__buttons__button--del--style2')

    buttonResult.classList.remove('calc__buttons__button--result--style2')

    buttons[0].classList.add('calc__buttons__button--style3')
    buttons[1].classList.add('calc__buttons__button--style3')
    buttons[2].classList.add('calc__buttons__button--style3')
    buttons[3].classList.add('calc__buttons__button--style3')
    buttons[4].classList.add('calc__buttons__button--style3')
    buttons[5].classList.add('calc__buttons__button--style3')
    buttons[6].classList.add('calc__buttons__button--style3')
    buttons[7].classList.add('calc__buttons__button--style3')
    buttons[8].classList.add('calc__buttons__button--style3')
    buttons[9].classList.add('calc__buttons__button--style3')
    buttons[10].classList.add('calc__buttons__button--style3')
    buttons[11].classList.add('calc__buttons__button--style3')
    buttons[12].classList.add('calc__buttons__button--style3')
    buttons[13].classList.add('calc__buttons__button--style3')
    buttons[14].classList.add('calc__buttons__button--style3')
    buttons[15].classList.add('calc__buttons__button--style3')
    buttons[16].classList.add('calc__buttons__button--style3')

    buttonsDel[0].classList.add('calc__buttons__button--del--style3')
    buttonsDel[1].classList.add('calc__buttons__button--del--style3')

    buttonResult.classList.add('calc__buttons__button--result--style3')
}