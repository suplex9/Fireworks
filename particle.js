function Particle(x,y,hu,firework) {
    this.acc = createVector(0.2, 0.2)
    this.lifespan = 247
    this.firework = firework
    this.hu = hu;
    this.pos = createVector(x,y)
    
    
    if (firework) {
      this.vel = createVector(0,random(-11,-9))
    } 
    else {
      
      this.vel = p5.Vector.random2D()
      this.vel.mult(random(1.9, 10.2))
      
    }
    this.addForce = function(force) {
      this.acc.add(force)
      
    }
    this.updateit = function() {
      if (!this.firework) {
        this.lifespan -= 3.9
        this.vel.mult(0.9)
      
  }
      
      this.vel.add(this.acc)
      this.pos.add(this.vel)
      this.acc.mult(0);
  }
  
    this.completed = function() {
      if (this.lifespan < 0.2) {
        return true;
      } else {
        return false;
  }
  }
  
    this.show = function() {
      colorMode(HSB)
      if (!this.firework) {
        stroke(hu,247,247, this.lifespan);
        strokeWeight(2.2)
      } else {
        strokeWeight(4.1)
        stroke(hu,247,247)
      }
      point(this.pos.x,this.pos.y)
  }
  }