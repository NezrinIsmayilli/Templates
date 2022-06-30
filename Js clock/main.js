const sec = document.querySelector(".secs");
const min = document.querySelector(".mins");
const hours = document.querySelector(".hours");



function clock(){
    let second = new Date().getSeconds();
    let minute = new Date().getMinutes();
    let hour = new Date().getHours();

    sec.style.transform = `rotate(${ 180+(second*6) }deg)`;  //her saniyede 6 derece
    min.style.transform = `rotate(${ 180+(minute*6) }deg)`;  //her deqiqede 6 derece
    hours.style.transform = `translateX(-50%) rotate(${ 180+(hour*30) }deg)`; //her saatda 30 derece
}
setInterval(clock, 1000);