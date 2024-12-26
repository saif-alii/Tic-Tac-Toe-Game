let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let turnO = true; // playerX, playerO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame =() =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}



boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");
    if(turnO) {
        // PlayerO
        box.innerText = "O";
        box.classList.add("player-o")
        turnO = false;
    } else {
        //PlayerX
        box.innerText = "X";
        box.classList.add("player-x")
        turnO = true;
    }
    box.disabled = true;

    checkWinner();
    })
})
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("player-x", "player-o"); // Remove classes
    }
}

// Show draw message
const showDraw = () => {
    msg.innerText = "It's a Draw!";
    msgContainer.classList.remove("hide");
};


const showWinner =(Winner) =>{
    msg.innerText = `Congratulations, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for( let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            console.log("Winner Winner chicken dinner", pos1Val);
            showWinner(pos1Val);
        } else {
            console.log("Match Draw")
        }
    }
// Check for a draw
if ([...boxes].every(box => box.innerText !== "")) {
    console.log("Match Draw");
    showDraw();
}

    }
};



newGameBtn.addEventListener("click", resetGame)
resetBtn.addEventListener("click", resetGame)







