let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#resetButton");
let newButton = document.querySelector("#newButton");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = false;
let count = 0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6], 
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
]

const resetGame = () => {
    turn0 = false;
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
        box.style.backgroundColor = "#d3edee";
    })
}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        }
        else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        box.style.backgroundColor = "#a8e5e7";
        let isWinner = checkWinner();
        count++;

        if (count === 9 && !isWinner) {
            gameDraw();
        }
    })
})

const gameDraw = () => {
    msg.innerText = `Game is a draw`
    msgContainer.classList.remove("hide");
    disableBoxes();

}


resetButton.addEventListener("click", () => {
    resetGame();
})

newButton.addEventListener("click", () => {
    resetGame();
    msgContainer.classList.add("hide");
})

const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    })
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`
    msgContainer.classList.remove("hide");
    disableBoxes();
}


const checkWinner = () => {
   for (let pattern of winPatterns) {
    position0Value = boxes[pattern[0]].innerText;
    position1Value = boxes[pattern[1]].innerText;
    position2Value = boxes[pattern[2]].innerText;

    if(position0Value != "" && position1Value != "" && position2Value != "") {
        if (position0Value == position1Value && position1Value == position2Value) {

            boxes[pattern[0]].style.backgroundColor = "pink";
            boxes[pattern[1]].style.backgroundColor = "pink";
            boxes[pattern[2]].style.backgroundColor = "pink";

            showWinner(position0Value);
            
        }
    }
}
}

