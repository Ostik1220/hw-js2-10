//1
let time = 0;
const firstTimer = setInterval(() => {
    time++
    document.querySelector("#first-message").innerHTML = `Повідомлення номер ${time}`
    if(time == 5){
        clearInterval(firstTimer)
    }

}, 1000)

//2
let rotate = 0;
const secondTimer = setInterval(() => {
    document.querySelectorAll("#animation").forEach(item => {
        rotate += 5;
        item.style.transform = `rotate(${rotate}deg)`
    });
}, 1000)

//3
const startButton = document.querySelector(".start-button");
const redButton = document.querySelector(".red-button");
const timerThreeHTML = document.querySelector("#second-timer");
const scoreHTML = document.querySelector(".score");

let isActive = false;
let score = 0;
let secondTime = 10;
let colorBrighter = 100;
let thirdTimer;


redButton.addEventListener("click", () => {
    if (!isActive) return; 
    colorBrighter += 2;
    score++;
    scoreHTML.innerHTML = `Рахунок : ${score}`;
    redButton.style.backgroundColor = `rgb(${colorBrighter}, 0 ,0)`;
});

startButton.addEventListener("click", () => {
    if (isActive) return; 
    isActive = true;

    score = 0;
    secondTime = 10;
    colorBrighter = 100;
    timerThreeHTML.innerHTML = secondTime;
    scoreHTML.innerHTML = `Рахунок : ${score}`;
    redButton.style.backgroundColor = "rgb(100, 0 ,0)";

    thirdTimer = setInterval(() => {
        secondTime -= 1;
        timerThreeHTML.innerHTML = secondTime;
        
        if (secondTime === 0) {
            clearInterval(thirdTimer);
            isActive = false;
            scoreHTML.innerHTML = `Остаточний рахунок : ${score}`;
        }
    }, 1000);
});
// 4
const secondMessage = document.querySelector("#second-message");
const inputTimer = document.querySelector("#timer");

document.querySelector(".timer__form").addEventListener("submit", (e) => {
    e.preventDefault();
    const timerTime = Number(inputTimer.value); 
    if (isNaN(timerTime) || timerTime <= 0) {
        secondMessage.innerHTML = "Введіть коректне число секунд.";
        return;
    }
    secondMessage.innerHTML = "Очікування...";
    setTimeout(() => {
        secondMessage.innerHTML = `Ось ваше повідомлення за ${timerTime} секунд!`;
    }, timerTime * 1000); 
});
