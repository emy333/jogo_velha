let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelector(".box");
let buttons = document.querySelector("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;
let btn = document.querySelector("#2-players");

//contador de jogadas

let player1 = 0;
let player2 = 0;

//adicionando o evento de click aos boxes
for(let i = 0; i < boxes.length; i++){
    //quando alguem clica na caixa
    boxes[i].addEventListener("click", function() {
        
        let el;
        console.log(el)
        if(player1 == player2){
            //x
            el = x;
        } else {
            //o
            el = o;
        }

        let cloneEl = el.cloneNode(true);

        this.appendChild(cloneEl);
    });
};