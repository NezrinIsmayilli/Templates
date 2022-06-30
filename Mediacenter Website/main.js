document.querySelector("#li1").addEventListener("click",nav1);
function nav1(){
    document.querySelector("#ul1").style.display ="block";
    document.querySelector("#ul2").style.display ="none";
    document.querySelector("#ul3").style.display ="none";
    document.querySelector("#ul4").style.display ="none";
    document.querySelector("#ul5").style.display ="none";
}

document.querySelector("#li1").addEventListener("dblclick",nav11);
function nav11(){
    document.querySelector("#ul1").style.display ="none";
 
}




document.querySelector("#li2").addEventListener("click",nav2);
function nav2(){
    document.querySelector("#ul2").style.display ="block";
    document.querySelector("#ul1").style.display ="none";
    document.querySelector("#ul3").style.display ="none";
    document.querySelector("#ul4").style.display ="none";
    document.querySelector("#ul5").style.display ="none";
}

document.querySelector("#li2").addEventListener("dblclick",nav21);
function nav21(){
    document.querySelector("#ul2").style.display ="none";
 
}


document.querySelector("#li3").addEventListener("click",nav3);
function nav3(){
    document.querySelector("#ul3").style.display ="block";
    document.querySelector("#ul1").style.display ="none";
    document.querySelector("#ul2").style.display ="none";
    document.querySelector("#ul4").style.display ="none";
    document.querySelector("#ul5").style.display ="none";
}

document.querySelector("#li3").addEventListener("dblclick",nav31);
function nav31(){
    document.querySelector("#ul3").style.display ="none";
 
}


document.querySelector("#li4").addEventListener("click",nav4);
function nav4(){
    document.querySelector("#ul4").style.display = "block";
    document.querySelector("#ul1").style.display ="none";
    document.querySelector("#ul2").style.display ="none";
    document.querySelector("#ul3").style.display ="none";
    document.querySelector("#ul5").style.display ="none";
}

document.querySelector("#li4").addEventListener("dblclick",nav41);
function nav41(){
    document.querySelector("#ul4").style.display ="none";
 
}


document.querySelector("#li5").addEventListener("click",nav5);
function nav5(){
    document.querySelector("#ul5").style.display ="block";
    document.querySelector("#ul2").style.display ="none";
    document.querySelector("#ul3").style.display ="none";
    document.querySelector("#ul4").style.display ="none";
    document.querySelector("#ul1").style.display ="none";

}

document.querySelector("#li5").addEventListener("dblclick",nav51);
function nav51(){
    document.querySelector("#ul5").style.display ="none";
 
}



document.getElementById("button1").addEventListener("click",buttons1);
function buttons1(){
    document.getElementById("button1").style.background="#59B210";
    document.getElementById("button1").style.color="white";
    document.getElementById("button1").style.fontWeight="bold";
    document.getElementById("button1").style.height="70px"

    document.getElementById("button2").style.background="rgb(233, 231, 231)";
    document.getElementById("button2").style.color="black";
    document.getElementById("button2").style.fontWeight="normal";
     document.getElementById("button2").style.height="55px"

     document.getElementById("button3").style.background="rgb(233, 231, 231)";
     document.getElementById("button3").style.color="black";
     document.getElementById("button3").style.fontWeight="normal";
      document.getElementById("button3").style.height="55px";




      document.getElementById("row1").style.display="flex";
      document.getElementById("row2").style.display="none";
      document.getElementById("row3").style.display="none";
}


document.getElementById("button2").addEventListener("click",buttons2);
function buttons2(){
    document.getElementById("button2").style.background="#59B210";
    document.getElementById("button2").style.color="white";
    document.getElementById("button2").style.fontWeight="bold";
        document.getElementById("button2").style.height="70px";

        document.getElementById("button1").style.background="rgb(233, 231, 231)";
        document.getElementById("button1").style.color="black";
        document.getElementById("button1").style.fontWeight="normal";
         document.getElementById("button1").style.height="55px";

         document.getElementById("button3").style.background="rgb(233, 231, 231)";
         document.getElementById("button3").style.color="black";
         document.getElementById("button3").style.fontWeight="normal";
          document.getElementById("button3").style.height="55px"

          document.getElementById("row1").style.display="none";
          document.getElementById("row3").style.display="none";
          document.getElementById("row2").style.display="flex";


}



document.getElementById("button3").addEventListener("click",buttons3);
function buttons3(){
    document.getElementById("button3").style.background="#59B210";
    document.getElementById("button3").style.color="white";
    document.getElementById("button3").style.fontWeight="bold";
        document.getElementById("button3").style.height="70px";

        document.getElementById("button1").style.background="rgb(233, 231, 231)";
        document.getElementById("button1").style.color="black";
        document.getElementById("button1").style.fontWeight="normal";
         document.getElementById("button1").style.height="55px";

         document.getElementById("button2").style.background="rgb(233, 231, 231)";
         document.getElementById("button2").style.color="black";
         document.getElementById("button2").style.fontWeight="normal";
          document.getElementById("button2").style.height="55px";


          document.getElementById("row1").style.display="none";
          document.getElementById("row2").style.display="none";

          document.getElementById("row3").style.display="flex";
}

document.querySelector(".littleimg2").addEventListener("click",slide1);
function slide1(){
    document.querySelector(".bigimg1").style.display="none";
    document.querySelector(".bigimg3").style.display="none";
    document.querySelector(".bigimg2").style.display="block";
    document.querySelector(".littleimg1").style.borderBottom="none";
    document.querySelector(".littleimg3").style.borderBottom="none";
    document.querySelector(".littleimg2").style.borderBottom="1px solid green";
}

document.querySelector(".littleimg1").addEventListener("click",slide2);
function slide2(){
    document.querySelector(".bigimg2").style.display="none";
    document.querySelector(".bigimg3").style.display="none";
    document.querySelector(".bigimg1").style.display="block";
    document.querySelector(".littleimg2").style.borderBottom="none";
    document.querySelector(".littleimg3").style.borderBottom="none";
    document.querySelector(".littleimg1").style.borderBottom="1px solid green";
}
document.querySelector(".littleimg3").addEventListener("click",slide3);
function slide3(){
    document.querySelector(".bigimg1").style.display="none";
    document.querySelector(".bigimg2").style.display="none";
    document.querySelector(".bigimg3").style.display="block";
    document.querySelector(".littleimg1").style.borderBottom="none";
    document.querySelector(".littleimg2").style.borderBottom="none";
    document.querySelector(".littleimg3").style.borderBottom="1px solid green";
}

$(document).ready(function(){
    $(".owl-carousel").owlCarousel(

        {
        
          
            nav:true,
            responsive:{
                50:{
                    items:2
                },
                1000:{
                    items:6
                }
            }
        }
    );
  });


