const indiv = document.body.querySelectorAll(".inner-div");
const playText = document.body.querySelector("#player-span");
const compText = document.body.querySelector("#computer-span")
const commText = document.body.querySelector("#comment-p")
console.log(typeof(compText));
const contain = document.body.querySelector(".container")
const objDesc = document.body.querySelector(".obj-desc");
let i = 0;
let val;
indiv.forEach((e)=>{
    e.addEventListener("click" , (ele) =>{  
        i++;
        console.log(ele.currentTarget);
         val = ele.currentTarget.id;
        console.log(val);
        gameTimesCont(val,randoutput());
         
        
    })
})

function randoutput(){
   const arr = ["rocks","paper","scissors"];
   const rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}
 
let PlayerCont = 0;
let CompCont = 0;

function decider(userinput,computerinput){
    if(userinput === computerinput){
      commText.innerHTML = "This was draw"
      PlayerCont++;
      CompCont++;
      compText.innerHTML = CompCont;
      playText.innerHTML = PlayerCont;
      objDesc.innerHTML = `Both the player and computer has chosen ${userinput}`;

       
    }
    else if((userinput == "rocks" && computerinput == "paper") || (userinput == "scissors" && computerinput == "rocks") || (userinput == "paper" && computerinput == "scissors") ){
        commText.innerHTML = "Computer wins"
        CompCont++
         compText.innerHTML = CompCont;
      playText.innerHTML = PlayerCont;
      objDesc.innerHTML = `Player has chosen ${userinput} and computer has chosen ${computerinput}` 
        
          
    }
    else{
        commText.innerHTML = "Player wins"
        PlayerCont++;
             compText.innerHTML = CompCont;
      playText.innerHTML = PlayerCont;
        objDesc.innerHTML = `Player has chosen ${userinput} and computer has chosen ${computerinput}`
    }
    ;
}

function rstgame(){
    PlayerCont = 0;
    CompCont = 0;
    i = 0;
      compText.innerHTML = CompCont;
      playText.innerHTML = PlayerCont;
       commText.innerHTML = "Lets play the game again"
       objDesc.innerHTML = "What player and computer chooses will be shown here"
        for(let j = 0; j < indiv.length;j++){
            indiv[j].classList.remove("disabled-button");
        }
       
}

function gameTimesCont(userinput,computerinput){
    
    
        decider(userinput,computerinput);
          
          
    
    

     if( i >= 6){
        for(let j = 0; j < indiv.length;j++){
            indiv[j].classList.add("disabled-button");
        }

         if(CompCont > PlayerCont){
        commText.innerHTML = `The computer has won. Scores - Computer : ${CompCont} , Player : ${PlayerCont}`
    }
    else if(CompCont == PlayerCont){
        commText.innerHTML = `This match has tied. Scores - Computer : ${CompCont} , Player : ${PlayerCont}`
    }
    else{
        commText.innerHTML = `The Player has won . Scores - Computer : ${CompCont} , Player : ${PlayerCont}`
    }
         let btn =  document.createElement("button")
   btn.innerHTML = "Reset Game"
   contain.appendChild(btn);
   btn.addEventListener("click",()=>{
       rstgame();
       btn.remove();
   })
    }
     
   
   

    }