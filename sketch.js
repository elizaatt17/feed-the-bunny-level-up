function preload(){

}



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  rope1=new Rope(8,{x:40,y:30});
  rope2=new Rope(4,{x:400,y:225});
  bunny=createSprite(200,200);
  button=createImg
  button.position(20,30)
}

function draw() {
  background(255,255,255);  
  if(collide(fruit,bunny,80,)==true)
  {
    remove_rope();
    bubble.visible=false;
    World.remove(engine.world,fruit);
    fruit=null;
    bunny.changeAnimation("eating")}
  drawSprites();
}