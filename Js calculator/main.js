for(var i=0; i<20; i++){
    if(i!=0  && i!=19 ){
        document.getElementsByTagName("button")[i].addEventListener("click",calcul);
    }

}
function calcul(){
    document.querySelector(".screen").value+=this.value;
}



document.querySelector(".clean").addEventListener("click",clean);
function clean(){
    document.querySelector(".screen").value =" ";
}



document.querySelector(".calculate").addEventListener("click",calculate);
function calculate(){
    document.querySelector(".screen").value =eval(document.querySelector(".screen").value );
}





document.querySelector(".brackets").addEventListener("click",brackets);
let bracketSwitch =false;
function brackets(){
    var prac;

    if(!bracketSwitch){
        prac ="("
    }else{
        prac=")"
    };
    bracketSwitch = !bracketSwitch;
    document.querySelector(".screen").value+=prac;
}





document.querySelector(".percent").addEventListener("click",percent);
function percent(){
    document.querySelector(".percent").value="/100";
}


console.log(8/100);


















// var ekran = document.getElementsByClassName("ekran1")[0];



// function calcul(){
//       for(var i=0;i<20;i++){
       
//        document.querySelectorAll('button')[i].value;   
//         ekran.value = ekran.value + this.value;  
  
//     } 
            
// }

