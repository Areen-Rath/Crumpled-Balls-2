class BaseClass {
   
    constructor(x, y, width, height){
        var options = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(myWorld, this.body);
    }

}