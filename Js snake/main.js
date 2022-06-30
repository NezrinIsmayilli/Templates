var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
canvas.width=400;
canvas.height=400;
document.body.appendChild(canvas);
document.addEventListener("keydown", key);
setInterval(loop,1000/10);
var posX =0;
var posY =0;
var vx=0;
var vy=0;
var snakes=[];
var score =4;
var appleX =10;
var appleY =10;

function loop(){
    draw();
    update();
}
function draw(){
    context.fillStyle ="black";
    context.fillRect(0,0,400,400);
    context.fillStyle="red";
    context.fillRect(appleX*20, appleY*20,20,20);
    context.fillStyle="green";
    snakes.forEach(t=>{
        context.fillRect(t.posX *20, t.posY*20, 20, 20);
    });
    context.fillStyle="white";
    context.font="30px Arial";
    context.fillText(score-4, 20, 40);
}
function update(){
posX+=vx;
posY+=vy;
snakes.push({posX: this.posX, posY: this.posY});
snakes.forEach(t=>{
    if(snakes.length > score){
        snakes.shift()
    }
});
if(posX===appleX && posY===appleY){
    score++;
    appleX=Math.floor(Math.random()*20);
    appleY=Math.floor(Math.random()*20);
}
}
function key(key){
if(key.keyCode ===38 && vy!=1){
    vx=0;
    vy=-1;
}
if(key.keyCode ===40 && vy!=-1){
    vx=0;
    vy=1;
}
if(key.keyCode ===39 && vx!=-1){
    vx=1;
    vy=0;
}
if(key.keyCode ===37 && vx!=1){
    vx=-1;
    vy=0;
}
}