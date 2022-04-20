var backgroundImg;
var cupHead, cupHeadImg,cupParado;
var chao, fundo;

function preload(){
  backgroundImg = loadImage("hericc-main/bip.jpg");
  cupHeadImg = loadAnimation("hericc-main/cupHead00.png","hericc-main/cupHead01.png","hericc-main/cupHead02.png","hericc-main/cupHead03.png",
 "hericc-main/cupHead04.png","hericc-main/cupHead05.png","hericc-main/cupHead06.png","hericc-main/cupHead07.png",
 "hericc-main/cupHead08.png","hericc-main/cupHead09.png","hericc-main/cupHead10.png","hericc-main/cupHead11.png",
  "hericc-main/cupHead12.png","hericc-main/cupHead13.png","hericc-main/cupHead14.png","hericc-main/cupHead15.png");
  cupParado = loadAnimation("hericc-main/cupParado.png");
}

function setup() {
  createCanvas(1400,800);
 fundo = createSprite(600,400,1400,800);
  fundo.addImage(backgroundImg);
  fundo.scale = 1

  chao = createSprite(700,550,1400,10)
  cupHead = createSprite(100,480);
  cupHead.addAnimation("cupParado", cupParado);
  cupHead.scale = 0.2
  cupHead.addAnimation("cupCorrendo", cupHeadImg);
 }

function draw() 
{
 if(keyIsDown(RIGHT_ARROW)){
  cupHead.changeAnimation("cupCorrendo",cupHeadImg);
  cupHead.scale = 0.9
  cupHead.mirrorX(1) 
  cupHead.x += 6
 }
 if(keyIsDown(LEFT_ARROW)){
  cupHead.changeAnimation("cupCorrendo",cupHeadImg);
  cupHead.scale = 0.9
  cupHead.mirrorX(-1)
  cupHead.x -= 6
}
if (keyIsDown(UP_ARROW)) {
  cupHead.y -=12.5
}
cupHead.velocityY += 0.5
 
cupHead.collide(chao)
 
 
  background(0);
 drawSprites()
}
function keyReleased() {
if (keyCode === LEFT_ARROW) {
  cupHead.changeAnimation("cupParado", cupParado);
  cupHead.scale = 0.2
 }
 if (keyCode === RIGHT_ARROW) {
  cupHead.changeAnimation("cupParado", cupParado);
  cupHead.scale = 0.2
}
 }





