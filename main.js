let color = "black"
document.addEventListener("DOMContentLoaded", function(){
    createBoard(16);
     let popup_btn = document.querySelector("#popup");
     popup_btn.addEventListener("click", function(){
         let size = getSize();
         createBoard(size);
     })

   
});

function createBoard(size){
    let board_div = document.querySelector(".board");
    board_div.style.gridTemplateColumns =`repeat(${size}, 1fr)`;
    board_div.style.gridTemplateRows =`repeat(${size}, 1fr)`;
    let numDivs = size * size;
    for(let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv);
        board_div.insertAdjacentElement("beforeend", div);
    }

}

function getSize(){
    let input = prompt("Please Insert the size of the board");
    let message = document.querySelector("#message");
    if(input == ""){

        message.innerHTML = " Please provide a number";
    }
    else if (input < 0 || input > 100){
        message.innerHTML = "Please Provide a number between 1 to 100";
    }
    else{
        message.innerHTML = "Now you can play!"
        return input; 
    }
     
}

function colorDiv(){
    if(color== "random"){
        this.style.backgroundColor = `hsl(${Math.random()*360},100%, 50%)`;

    }
    else {
        this.style.backgroundColor = "black";
    }

}

function setColor(colorChoice){
     color = colorChoice 

}

function resetBoard(){
    let divs = document.querySelectorAll("div");
    divs.forEach((div)=> div.style.backgroundColor= "white");

}