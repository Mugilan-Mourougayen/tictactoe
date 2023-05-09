
let start = true
let val = ["0", "1", "2",
           "3", "4", "5",
           "6", "7", "8"];
const myFunction=(pos)=> {








    if(start == true) {
        if(val[pos] !== "x" || val[pos] !== "o"){
            document.getElementById(pos).style.backgroundColor = "lightblue";
            start=false;
            val[pos-1] = "x";
        }
    }
    else{
        if(val[pos] !== "x" || val[pos] !== "o"){
        document.getElementById(pos).style.backgroundColor = "red";
        start=true;
        val[pos-1] = "o";
    }
    }

    console.log(val)

    if(val[0]== val[1]&&val[1]==val[2]){
        alert( val[0] +"    won")
        console.log(val)
    }
    else if(val[3]==val[4]&&val[4]==val[5]){
        alert( val[3] +"    won")
    }
    else if(val[6]==val[7]&&val[7]==val[8]){
        alert( val[6] +"    won")
    }
    else if(val[0]==val[3]&&val[3]==val[6]){
        alert( val[0] +"    won")
    }
    else if(val[1]==val[4]&&val[4]==val[7]){
        alert( val[1] +"    won")
    }
    else if(val[2]==val[5]&&val[5]==val[8]){
        alert( val[2] +"    won")
    }
    else if(val[0]==val[4]&&val[4]==val[8]){
        alert( val[0] +"    won")
    }
    else if(val[2]==val[4]&&val[4]==val[6]){
        alert( val[2] +"    won")
    }
  }