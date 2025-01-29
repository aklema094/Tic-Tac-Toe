let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGame = document.querySelector("#newGame");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");

let turn0 = true;

const winingPattern = [[0,1,2],
                       [3,4,5],
                       [6,7,8],
                       [0,3,6],
                       [1,4,7],
                       [2,5,8],
                       [0,4,8],
                       [2,4,6]];
boxes.forEach((box)=>{
 box.addEventListener("click",()=>{
  if(turn0){
    box.innerText = "O"
    turn0 = false;
  }else{
    box.innerText = "X"
    turn0 = true;
  } 
  box.disabled = true; 
  checkWinner();
 }); 
});

const checkWinner = () => {
     
    for(let pattern of winingPattern){
        
        let pos1 = boxes[pattern[0]].innerHTML;
        let pos2 = boxes[pattern[1]].innerHTML;
        let pos3 = boxes[pattern[2]].innerHTML;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("Winner is :",pos1);
                showWinner(pos1);
            }
        }
        
    }
}

const showWinner = (winner) =>{

    let text = `Congrasulation, Winner is ${winner} `;
    msg.innerText = text;

    msgContainer.classList.remove("hide");
    

}