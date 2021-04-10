class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
  
    play(){
      
      if(gameState !== PLAY){
        //var display_position = 100;
        background(150)
       
       
  
        
         
          y = displayHeight - trex[plr].distance;
          
  
          if (index === trex.index){
            trex.shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = cars[index-1].y
          }
         
    
        }
      
  
      if(keyIsDown(UP_ARROW) && trex.index !== null){
        trex.distance +=10
        trex.update();
      }
      if(frameCount % 20 === 0) {
        var obstacle = createSprite(600,165,10,40);
        //obstacle.debug = true;
        obstacle.velocityX = -(6 + 3*score/100);
  
      drawSprites();
     } }
  }