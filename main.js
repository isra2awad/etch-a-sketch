document.addEventListener("DOMContentLoaded", function(){
    createBoard(16);
   
});

function createBoard(size){
    let board_div = document.querySelector(".board");
    board_div.style.gridTemplateColumns =`repeat(${size}, 1fr)`;
    board_div.style.gridTemplateRows =`repeat(${size}, 1fr)`;
    let numDivs = size * size;
    for(let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        div.style.backgroundColor = "yellow";
        board_div.insertAdjacentElement("beforeend", div);
    }


}