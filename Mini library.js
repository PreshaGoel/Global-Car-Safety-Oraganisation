
// To make the rectangles bounceOff each other
function bounceOff(a,b){
    if (a.x - b.x <= a.width/2 + b.width/2 && 
      b.x - a.x  <= a.width/2 + b.width/2) {
        a.velocityX = b.velocityX * (-1)
        a.velocityX = b.velocityX * (-1)
      }
    
      if (a.y - b.y <= a.height/2 + b.height/2 && 
        b.y - a.y  <= a.height/2 + b.height/2){
          a.velocityY = a.velocityY * (-1)
          b.velocityY = b.velocityY * (-1) 
        }
    
    }
    // To detect collision
    function isTouching(a,b){
        if (a.x - b.x <= a.width/2 + b.width/2 && 
          b.x - a.x  <= a.width/2 + b.width/2 &&
           a.y - b.y <= a.height/2 + b.height/2 && 
          b.y - a.y  <= a.height/2 + b.height/2 ) {
            return true
          }
      
          else{
            return false
          }
      }