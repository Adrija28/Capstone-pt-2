class Ball{
    constructor(x, y, radius) {
        var options = {
            'isStatic': false,
            'restitution':0.5,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
    
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        stroke(Orange)
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        pop();
      }
}