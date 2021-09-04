var box;
function setup() {
  createCanvas(400,400);
box =createSprite(200,200,30,30)

}

function draw()
{
  background(30);
  if (keyisDown(RIGHT_ARROW))
  {
  box.postion.x = box.positin.x + 5;
  }


  if (keyisDown(LEFT_ARROW))
  {
  box.postion.x = box.positin.x - 5;
  }

drawSprites();


}




