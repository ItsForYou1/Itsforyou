



const Chosices = ["Steen", "Papier", "Schaar"];
const PlayerDisplay = document.getElementById("PlayerDisplay");
const ComputerDisplay = document.getElementById("ComputerDisplay");
const ResultDisplay = document.getElementById("ResultDisplay");

function PlayGame(PlayerChoices){

    const ComputerChoices = Chosices[Math.floor(Math.random() * 3)];
    let Result = "";

    if (PlayerChoices === ComputerChoices) {
        Result = "Gelijkspel!";
    } 
    else {
        switch (PlayerChoices) {
            case "Steen":
                Result = (ComputerChoices === "Schaar") ? "Je hebt GEWONNEN!!!!" : "Je hebt verloren";
                break;
            case "Papier":
                Result = (ComputerChoices === "Steen") ? "Je hebt GEWONNEN!!!!" : "Je hebt verloren";
                break;
            case "Schaar":
                Result = (ComputerChoices === "Papier") ? "Je hebt GEWONNEN!!!!" : "Je hebt verloren";
                break;
        }
    }

    PlayerDisplay.textContent = `Speler: ${PlayerChoices}`;
    ComputerDisplay.textContent = `Bot: ${ComputerChoices}`;
    ResultDisplay.textContent = Result;


    }
    
