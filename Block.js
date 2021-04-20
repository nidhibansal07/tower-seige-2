class Block{
  constructor(x, y, width, height) {
      var options = {
                  restitution:0.5,
                  friction:0.03
                  
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
this.image=loadImage("block.png")
      World.add(world, this.body);
      this.Visiblity=255;
    }
    display(){
      if(this.body.speed<3){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        
        pop();
      
      

       
        image(this.image,this.body.position.x,this.body.position.y)
  pop()
      
      
}
else{
  World.remove(world,this.body)
  push()
  this.Visiblity=this.Visiblity-5
  tint(255,this.Visiblity)
  image(this.image,this.body.position.x,this.body.position.y)
  pop()
}
}
}