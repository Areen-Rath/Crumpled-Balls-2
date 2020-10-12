//Declaring constants for engine, world and bodies.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//Declaring variables for engine and world to access it easily.
var myEngine, myWorld;

//Declaring bodies.
var crumpledPaper, bin;
var ground;

function setup(){

    createCanvas(800, 600);

    myEngine = Engine.create();
    myWorld = myEngine.world;

    crumpledPaper = new CrumpledPaper(25, 555, 15);

    bin = new Bin(620, 555, 200, 20);

    ground = new Ground(400, 580, 800, 10);

}

function draw(){

    background(211, 211, 211);

    Engine.update(myEngine);

    crumpledPaper.display();

    bin.display();

    ground.display();

    textSize(20);
    fill("green")
    text("Clean Earth to Save Earth.", 250, 30);
    text("Save Earth to Save Lives.", 255, 60);

}

function keyPressed(){

    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(crumpledPaper.body, crumpledPaper.body.position, {x : 40, y : -40});
    }

}