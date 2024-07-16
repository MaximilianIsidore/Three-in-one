
const unit_con = document.getElementById("unit-converter");
const calculator = document.getElementById("calculator");
const game = document.getElementById("Game");

const gm = document.getElementById("game");
const uc = document.getElementById("uc");
const cal = document.getElementById("cal");

//basic
gm.addEventListener('click', function(){
    game.style.display = "block";
    unit_con.style.display = "none";
    calculator.style.display = "none";
})

uc.addEventListener('click', function(){
    unit_con.style.display = "flex";
    game.style.display = "none";
    calculator.style.display = "none";
})

cal.addEventListener('click', function(){
    calculator.style.display = "block";
    unit_con.style.display = "none";
    game.style.display = "none";
})

//unit conversion
const unit_con_btn = document.getElementById("unit_conv");
const conversionRates = {
    meters: {
        meters: 1,
        kilometers: 0.001,
        miles: 0.000621371,
        feet: 3.28084
    },
    kilometers: {
        meters: 1000,
        kilometers: 1,
        miles: 0.621371,
        feet: 3280.84
    },
    miles: {
        meters: 1609.34,
        kilometers: 1.60934,
        miles: 1,
        feet: 5280
    },
    feet: {
        meters: 0.3048,
        kilometers: 0.0003048,
        miles: 0.000189394,
        feet: 1
    }
};

unit_con_btn.addEventListener('click', function(){
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;

    if (isNaN(inputValue)) {
        document.getElementById('outputValue').value = 'Invalid input';
        return;
    }

    const conversionRate = conversionRates[inputUnit][outputUnit];
    const outputValue = inputValue * conversionRate;

    document.getElementById('outputValue').value = outputValue;
});

//calculator
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}


//game
document.getElementById('rollButton').addEventListener('click', rollDice);

function rollDice() {
    const dice = document.getElementById('dice');
    const guess_val = document.getElementById('guessnum').value;
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    if(guess_val == randomNumber){
        document.getElementById("result").innerHTML = "You guessed it right!";
        document.getElementById("result").style.color = "green";
    }else{
        document.getElementById("result").innerHTML = "Wrong guess try again!";
        document.getElementById("result").style.color = "red";
    }
    dice.textContent = getDiceFace(randomNumber);
}

function getDiceFace(number) {
    const diceFaces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
    return diceFaces[number - 1];
}