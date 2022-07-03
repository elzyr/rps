var player_score=0;
var ai_score=0;

function result(result){
    var tag = document.createElement("div");
    tag.appendChild(document.createTextNode(result));
    var element = document.getElementById("result");
    element.appendChild(tag);
    tag.className='animation';
    tag.classList.add();
    setTimeout(function(){
        document.getElementById('result').removeChild(document.getElementById('result').firstChild);
   },1500);
    document.getElementById('score').innerHTML=player_score+" : "+ai_score;
}

function game(player_choice){
    var ai_choice= Math.floor(Math.random() *3);
    console.log(ai_choice);
    // 0=rock 1=paper 2=scissors
    if(player_choice=='rock' && ai_choice==2 || player_choice=="paper" && ai_choice==0 || player_choice=="scissors" && ai_choice==1){
        player_score+=1;
        result("You won!");
    }
    else if(player_choice=='rock' && ai_choice==0 || player_choice=="paper" && ai_choice==1 || player_choice=="scissors" && ai_choice==2){
        result("Draw!");
    }
    else{
        ai_score+=1;
        result("You lost!");    
    }
}