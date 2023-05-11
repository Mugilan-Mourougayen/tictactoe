
let start = true
let xscore = 0;
let oscore = 0;
let state = true

let val = ["0", "1", "2",
           "3", "4", "5",
           "6", "7", "8"];
const updatesc=()=>{
    document.getElementById("valx").innerHTML=xscore;
    document.getElementById("valo").innerHTML=oscore;           
}

const score = localStorage.getItem("score");
if(score){
     xscore = parseInt(score[0]);
     oscore = parseInt(score[1]);  
     updatesc()
}
const resetall=()=>{
    localStorage.clear();
    location.reload()
}
const reset=()=>{
    val = ["0", "1", "2",
    "3", "4", "5",
    "6", "7", "8"];
    state= true
    updatesc()

    valuess = [1, 2,
    3, 4, 5,
    6, 7, 8,9];


    for ( value in valuess) {
        console.log(valuess[value]);

        document.getElementById(valuess[value]).style.backgroundColor = "white";
        document.getElementById(valuess[value]).innerHTML = "";
      }
      


}





const myFunction=(pos)=> {

    if (state){
    
    if(start == true) {
        if(val[pos] !== "x" || val[pos] !== "o"){
            document.getElementById(pos).style.backgroundColor = "lightblue";
            document.getElementById(pos).innerHTML = "x";
            start=false;
            val[pos-1] = "x";
        }
    }
    else{
        if(val[pos] !== "x" || val[pos] !== "o"){
        document.getElementById(pos).style.backgroundColor = "red";
        document.getElementById(pos).innerHTML = "o";
        start=true;
        val[pos-1] = "o";
    }
    }

    console.log(val)

    if(val[0]== val[1]&&val[1]==val[2]){
        if(val[0]=="x"){
            xscore =xscore +1
        }
        else{
            oscore =oscore +1
        }
        setTimeout(function() {
            alert( val[0] +"    won")
            state = false;
          }, 100);
          updatesc()
    }
    else if(val[3]==val[4]&&val[4]==val[5]){
        if(val[3]=="x"){
            xscore =xscore +1
        }
        else{
            oscore =oscore +1
        }
        setTimeout(function() {
            alert( val[3] +"    won")
            state = false;
          }, 100);
          updatesc()
    }
    else if(val[6]==val[7]&&val[7]==val[8]){
        if(val[6]=="x"){
            xscore =xscore +1
        }
        else{
            oscore =oscore +1
        }
        setTimeout(function() {
            alert( val[6] +"    won")
            state = false;
          }, 100);
          updatesc()
    }
    else if(val[0]==val[3]&&val[3]==val[6]){
        if(val[0]=="x"){
            xscore =xscore +1
        }
        else{
            oscore =oscore +1
        }
        setTimeout(function() {
            alert( val[0] +"    won")
            state = false;
          }, 100);
          updatesc()
    }
    else if(val[1]==val[4]&&val[4]==val[7]){
        if(val[1]=="x"){
            xscore =xscore +1
        }
        else{
            oscore =oscore +1
        }
        setTimeout(function() {
            alert( val[1] +"    won")
            state = false;
          }, 100);
          updatesc()
    }
    else if(val[2]==val[5]&&val[5]==val[8]){
        if(val[2]=="x"){
            xscore =xscore +1
        }
        else{
            oscore =oscore +1
        }
        setTimeout(function() {
            alert( val[2] +"    won")
            state = false;
          }, 100);
          updatesc()
    }
    else if(val[0]==val[4]&&val[4]==val[8]){
        if(val[0]=="x"){
            xscore =xscore +1
        }
        else{
            oscore =oscore +1
        }
        setTimeout(function() {
            alert( val[0] +"    won")
            state = false;
          }, 100);
          updatesc()
    }
    else if(val[2]==val[4]&&val[4]==val[6]){
        if(val[2]=="x"){
            xscore =xscore +1
        }
        else{
            oscore =oscore +1
        }
        setTimeout(function() {
            alert( val[2] +"    won")
            state = false;
          }, 100);
          updatesc()
    }
    else if(!val.some((element) => element !== "x" && element !== "o")){
        setTimeout(function() {
            alert("Draw")
            state = false;
          }, 100);
          updatesc()
    }
    
  }

  localStorage.setItem("score", [xscore, oscore]);
}