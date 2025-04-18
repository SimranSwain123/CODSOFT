let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let h3=document.querySelector("h3");
let btns=["yellow","red","blue","green"];
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelUp(); 
    }  
});
function gameFlash(btns){
  btns.classList.add("flash");
  setTimeout(function(){
    btns.classList.remove("flash");
  },250);
}
function userFlash(btns){
  btns.classList.add("flash");
  setTimeout(function(){
    btns.classList.remove("flash");
  },250);
}
function levelUp(){
  userSeq=[];
    level++;
    h3.innerText= `Level ${level}`;
    let randIndx=Math.floor(Math.random()*4);
    let randColor=btns[randIndx];
    let randBtn=document.querySelector(`.${randColor}`);
     gameSeq.push(randColor);
    console.log(gameSeq);
   gameFlash(randBtn);
    }
    function checkAns(idx){
      if(userSeq[idx]===gameSeq[idx])
        {
        if(userSeq.length==gameSeq.length){
          h3.innerText=`Level ${level} is complete`;
          setTimeout(
            levelUp,3000);
        }
      }
      else{
         h3.innerHTML=`Game over!.<b>Score${level}</b><br>Press any button`;
         document.querySelector("body").style.backgroundColor="red";
         setTimeout(function(){
          document.querySelector("body").style.backgroundColor="white";
         },400);
         reset();
      }
    }
    
    function btnPress(btns)
    {
      btn=this;
      gameFlash(btn);
      console.log(this);
      userColor=btn.getAttribute("id");
        console.log(userColor);
        userSeq.push(userColor); 
        checkAns(userSeq.length-1); 
    } 
    let allBtns=document.querySelectorAll(".btn");
        for(btn of allBtns){
        btn.addEventListener("click",btnPress);
    }
     
    function reset(){
      started=false;
      gameSeq=[];
      userSeq=[];
      level=0;
    }