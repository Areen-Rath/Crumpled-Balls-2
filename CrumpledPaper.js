class CrumpledPaper {

        constructor(x, y, radius){
            var options = {
                restitution : 0.5, friction : 1, density : 1.2
            }

            this.body = Bodies.circle(x, y, radius, options);
            this.radius = radius;
            this.image = loadImage("paper.png")
            World.add(myWorld, this.body);
            
        }

        display(){
            var pos = this.body.position;
            
            imageMode(CENTER);
            image(this.image, pos.x, pos.y, 50, 50);
        }

}