var back;
var backimg;

var santa;
var santaimg;

var house;
var houseimg;

var chimney;
var chimneyimg;

var gift,giftimg,cookies,cookiesimg,gameover,gameoverimg,reset,resetimg,snow,snowimg,start,startimg

 var gift,giftimg2
 var gift,giftimg3
 var gift,giftimg4
 var gift,giftimg5
var houseGroup,giftGroup

var invisibleGround;

var cookies=0

var gameState="start"
var fBack1,fbackImg;
var fSanta,fSantaImg;





function setup() {
  createCanvas(displayWidth,displayHeight);
 back=createSprite(displayWidth/2,displayHeight/2,displayWidth+300,displayHeight)
 back.addImage(backimg)
back.scale=5.5; 
back.velocityX=-5

santa=createSprite(displayWidth/2-100,displayHeight/2-250)
santa.addAnimation("santa",santaimg)
santa.scale=2;

//invisibleGround=createSprite(displayWidth/2,displayHeight/2+420,displayWidth,20)
//invisibleGround.visible=true

cookies=createSprite(displayWidth/2+550,displayHeight/2-300)
cookies.addImage(cookiesimg)
cookies.scale=0.5
houseGroup=new Group();
giftGroup=new Group();

fBack1=createSprite(displayWidth,displayHeight)


fSanta=createSprite(displayWidth/2+400,displayHeight/2-100)

start=createSprite(displayWidth/2+200,displayHeight/2+300)
start.addImage(startimg)

fBack1.addImage(fbackImg)
fSanta.addImage(fSantaImg)

}


function preload (){
backimg=loadImage("background.jpg")
santaimg=loadAnimation("1.png","2.png","3.png","4.png")
house1=loadImage("house1.png")
house2=loadImage("house2.png")
house3=loadImage("house3.png")
house4=loadImage("house4.png")

giftimg=loadImage("gift1.png")
giftimg2=loadImage("gift2.png")
giftimg3=loadImage("gift3.png")
giftimg4=loadImage("gift4.png")
giftimg5=loadImage("gift5.png")

cookiesimg=loadImage("cookies.png")

gameoverimg=loadImage("Game over.png")

resetimg=loadImage("reset.png")

snowimg=loadImage("snow.jpeg")

startimg=loadImage("Start.png")

fbackImg=loadImage("FrontImage.jpeg")
fSantaImg=loadImage("FrontSanta.jpeg")
}

 
function draw() {
  drawSprites();

 if (gameState==="start"){
  cookies.visible=true
  santa.visible=true
  back.visible=true
  giftGroup.setVisibleEach(true)
houseGroup.setVisibleEach(true)

if (mousePressedOver(start)){
gameState="play"


}

 }
if (gameState==="play"){
  cookies.visible=false
  santa.visible=false
  back.visible=false
fSanta.visible=true
fBack1.visible=true
houseGroup.setVisibleEach(true)


  if (back.x<0){
back.x=back.width/2
  }
if (keyDown(DOWN_ARROW)){
giftGroup.setVisibleEach(true)
giftGroup.setVelocityYEach(5)
}
if (giftGroup.isTouching(houseGroup)){
giftGroup.destroyEach()
cookies=cookies+1


}
 
//if (giftGroup.isTouching(invisibleGround)){
//giftGroup.setVelocityYEach(0)
//}


spawnHouse()
gifts();

textSize(30)
text("x"+cookies,displayWidth/2+650,displayHeight/2-300)
}
}

function spawnHouse(){
if (frameCount%200===0) {
house=createSprite(displayWidth,displayHeight/2+200,10,10)
house.scale=1
var ran=Math.round(random(1,4))
switch(ran){
case 1 :house.addImage(house1) 
break

case  2 :house.addImage(house2)
break

case 3 :house.addImage(house3)
break

case 4 :house.addImage(house4)
break
default:break
}
house.velocityX=-6
houseGroup.add(house)

}


}

function gifts(){
  if (frameCount%200===0) {
  gift=createSprite(displayWidth/2-100,displayHeight/2-150)
  var ran=Math.round(random(1,5))
gift.visible=false
  switch(ran){
    case 1 :gift.addImage(giftimg) 
    break
    
    case  2 :gift.addImage(giftimg2)
    break
    
    case 3 :gift.addImage(giftimg3)
    break
    
    case 4 :gift.addImage(giftimg4)
    break

    case 5 :gift.addImage(giftimg5)
    break
    default:break
    }
 
 gift.x=santa.x
 gift.scale=0.5;
giftGroup.add(gift)
  }}

