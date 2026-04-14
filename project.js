// GAME SETUP
// create player, target, and obstacles
var player = createSprite(200, 100);
player.setAnimation("fly_bot");
player.scale = 0.8;

// Coin/Target
var target = createSprite(330, 130);
target.setAnimation("coin");
target.scale = 0.8;

// Object 1
var ob1 = createSprite(0, 200);
ob1.setAnimation("rock");
ob1.scale = 0.8;

// Object 2
var ob2 = createSprite(200, 0);
ob2.setAnimation("rock");
ob2.scale = 1;

// Extra Variables
var health = 100;
var score = 0;

function draw() {
  background("lightblue");
  
  // FALLING
  player.velocityY = player.velocityY + 0.3;
  // LOOPING
  
  // Object 1
  ob1.x = ob1.x + 7;
  if (ob1.x > 425){
    ob1.x = -25;
    ob1.y = randomNumber(50,350);
  }
  // Object 2
  ob2.y = ob2.y + 7;
  if (ob2.y > 425){
    ob2.y = -25;
    ob2.x = randomNumber(50,350);
  }
  // PLAYER CONTROLS
  // change the y velocity when the user clicks "up"
  if (keyDown("UP_ARROW")){
    player.velocityY = player.velocityY - 0.75;
  }
  // decrease the x velocity when user clicks "left"
  if (keyDown("LEFT_ARROW")){
    player.velocityX = player.velocityX - 1;
  }
  // increase the x velocity when the user clicks "right"
  if (keyDown("RIGHT_ARROW")){
    player.velocityX = player.velocityX + 1;
  }
  // SPRITE INTERACTIONS
  // reset the coin when the player touches it
  if (target.isTouching(player)){
    score = score + 1;
    target.x = randomNumber(25, 375);
    target.y = randomNumber(25,375);
  }
  // make the obstacles push the player
  if (ob1.isTouching(player)){
    ob1.displace(player);
    health = health - 1;
  }
  if (ob2.isTouching(player)){
    ob2.displace(player);
    health = health - 1;
  }
  
  // Variables
  text("Score: " + score, 30, 15);
  text("Health: " + health, 30, 30);

  // DRAW SPRITES
  drawSprites();
  
  // GAME OVER
  if (player.x < -50 || player.x > 450 || player.y < -50 || player.y > 450 || health <= 0) {
    background("black");
    textSize(50);
    fill("blue"); 
    text("Game Over!", 50, 200);
    textSize(20);
    text("You scored " + score + " points!",50, 230);
    player.x = -67676767; // To make sure the player can't cheese the system
  }
  
}
