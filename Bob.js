class Bob {
    constructor(x, y, radius) {
      var options = {
        
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      
      ellipseMode(RADIUS);
      fill(255,0,255);
      ellipse(0,0,this.radius,this.r)
      pop();
    }
  };