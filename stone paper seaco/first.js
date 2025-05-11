

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const mess = document.querySelector("#mess");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const gencompchoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return option[randidx];
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        mess.innerText = `You win! Your ${userChoice} beats ${compChoice}.`;
        mess.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        mess.innerText = `You lost! ${compChoice} beats your ${userChoice}.`;
        mess.style.backgroundColor = "red";
    }
};

const drawGame = () => {
    mess.innerText = "Game Draw!";
    mess.style.backgroundColor = "gray";
};

const playGame = (userChoice) => {
    console.log("User choice:", userChoice);

    const compChoice = gencompchoice();
    console.log("Computer choice:", compChoice);

    if (compChoice === userChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
