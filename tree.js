class Tree{
    constructor(x, y, width, height) {

        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        this.image = loadImage("tree.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 900, 250, this.width, this.height);
        pop();
      }
}