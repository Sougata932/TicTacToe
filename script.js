let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msg = document.querySelector("#msg");
const winpatterns = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6],];
let turnO=true;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        box.style.backgroundColor="#ebeca0";
        if (turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const checkWinner = ()=>{
    for(pattern of winpatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;  

        if(pos1!="" && pos2!="" && pos3!=""){
        if(pos1 === pos2 && pos2 === pos3){
             console.log("winner", pos1);
             showWinner(pos1);
             for(let i=0; i<3; i++){
                boxes[pattern[i]].style.backgroundColor = "#a83131";
             }
            boxes.forEach(box => box.disabled = true);
            return;
        } 
    }
    }
}

const reload=()=>{
    let re=document.querySelectorAll(".box");
    re.forEach(box=>{
        box.innerText="";
        box.style.backgroundColor="#e9eb79"; 
        box.disabled=false;
        turnO=false;

    })
    turnO=true;
    msg.classList.add("hide");
};
reset.addEventListener("click", reload);

const showWinner=(winner)=>{
    msg.innerText=`Congratulations...The winner is ${winner}`;
    msg.classList.remove("hide");
}