class BaseClass{
    constructor(x,y,width,heigth,angle){
        var options = {
            'density':1.5,
            'friction': 1.0,
            'restitution':0.5
          };
          this.body = Bodies.rectangle(x, y, width, heigth, options);
          this.width = width;
          this.height = heigth;
          this.img=loadImage("sprites/base.png");
          World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER)
        image(this.img,0, 0, this.width, this.height);
        pop();
    }
}