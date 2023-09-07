console.log(`Rock-Paper-Scissors.js is loaded...`);

const choices = ["Rock", "Paper", "Scissors"];

        function computerChoice() {
            const randomIndex = Math.floor(Math.random() * choices.length);
            return choices[randomIndex];
        }

        function determineWinner(userChoice, compChoice) {
            if (userChoice === compChoice) {
                return "It's a draw! You both chose " + userChoice + `.`;
            } else if (
                (userChoice === "Rock" && compChoice === "Scissors") ||
                (userChoice === "Paper" && compChoice === "Rock") ||
                (userChoice === "Scissors" && compChoice === "Paper")
            ) {
                return "Congratulations, you won! " + userChoice + " beats "  + compChoice + "!";
            } else {
                return "Sorry, the computer won! " + compChoice + " beats " + userChoice + "!";
            }
        }

        document.getElementById("rock").addEventListener("click", function () {
            playGame("Rock");
        });

        document.getElementById("paper").addEventListener("click", function () {
            playGame("Paper");
        });

        document.getElementById("scissors").addEventListener("click", function () {
            playGame("Scissors");
        });

        function playGame(userChoice) {
            const compChoice = computerChoice();
            document.getElementById("computer-choice").textContent = compChoice;

            const result = determineWinner(userChoice, compChoice);
            document.getElementById("winner").textContent = result;
        }