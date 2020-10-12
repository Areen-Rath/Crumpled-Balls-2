class Bin extends BaseClass{

        constructor(x, y, width, height){
            var options = {
                isStatic: true
            }
            super(x, y, width, height);
            World.add(myWorld, this.body);
            this.leftEdge = Bodies.rectangle(625, 475, 20, 170, options);
            World.add(myWorld, this.leftEdge);
            this.rightEdge = Bodies.rectangle(800, 475, 20, 170, options);
            World.add(myWorld, this.rightEdge);
            this.image = loadImage("dustbingreen.png");
        }

        display(){
            imageMode(CENTER);
            image(this.image, 715, 485, 180, 180);
        }

}