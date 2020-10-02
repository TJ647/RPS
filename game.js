for (i=1 ;i<6;i++){
var  playerSelection=prompt("Do you choose rock, paper or scissor?").toLocaleLowerCase();
if (! playerSelection){
    document.write("you cheated , refresh and restart again");
}else {
    document.write("player :" + ":------" + playerSelection +" ")
}
var computerSelection=Math.floor(Math.random()*3)+1;
if(computerSelection===1) {
    computerSelection="rock"
}else if(computerSelection===2){
    computerSelection="paper"
}else{
    computerSelection="scissor"
}
document.write("computer :" + ":------" + computerSelection +" ");
var game=function(choise1,choise2){
    if(choise1===choise2){
        return "<strong> It's a tie </strong>";
    }if(choise1==="rock"){
        if(choise2==="scissor"){
            return "<strong> you win! </strong> rock beats scissor"
        }else {
            return "<strong> you lose </strong> paper covers rock";
        }
    }
    if(choise1==="paper"){
        if(choise2==="rock"){
            return "<strong> you win!</strong> paper covers rock";
        }else{
            return "<strong> you lose</strong> scissor cuts paper";
        }
    }
    if (choise1==="scissor"){
        if (choise2==="rock"){
            return "<strong> you lose </strong> rock breaks scissor";
        }else {
            return "<strong> you win! </strong> scissor cuts paper";
        }
    }
};
var results=game(playerSelection,computerSelection);
document.write("<br><br><br>" + results);
document.write("<hr><hr><hr>");}
