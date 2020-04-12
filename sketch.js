var fixedRect,movRect;

function setup() {
  createCanvas(800,400);

  fixedRect= createSprite(200,200,100,20);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movRect = createSprite(50,50,20,100);
  movRect.shapeColor = "green";
  movRect.debug = true;

}

function draw() {
  background("black");  
 
  movRect.x = World.mouseX;
  movRect.y = World.mouseY;

  if(fixedRect.x-movRect.x <= fixedRect.width/2 + movRect.width/2 &&
     movRect.x - fixedRect.x <= fixedRect.width/2 + movRect.width/2 &&
      fixedRect.y-movRect.y <= fixedRect.height/2 + movRect.height/2 &&
       movRect.y - fixedRect.y <= fixedRect.height/2 + movRect.height/2 ){

      movRect.shapeColor = "red";

      fixedRect.shapeColor = "red";

       } else{
      
        movRect.shapeColor = "green";

        fixedRect.shapeColor = "green";

       }

  drawSprites();
}