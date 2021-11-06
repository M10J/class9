var m;
function setup() {
  createCanvas(400,400);

m = createSprite(100,100,50,50)

}

function draw() 
{
  background(30);

if(keyDown("right")){
m.x +=5;

}

if(keyDown("left")){
  m.x -=5;
  
  }
  if(keyDown("down")){
    m.y +=5;
    
    }

    if(keyDown("up")){
      m.y +=5;
      
      }
  drawSprites()
}




