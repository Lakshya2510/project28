const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backgroundImg,ground,slingShot,boyImg;
var tree,stone,boy,mango1,mango2,mango3,boySprite;
var mango4,mango5,mango6,mango7,mango8;

function preload()
{
    backgroundImg = loadImage("background.jpg")
    boyImg = loadImage("boy.png")
}

function setup() {
    var canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

    boySprite=createSprite(110, 450, 70, 100);
    boySprite.addImage(boyImg)
    boySprite.scale=5   
    
    ground = new Ground(600, height, 1200, 20);

    mango1 = new Mango(700,320,70,70);
    mango2 = new Mango(920,320,70,70);
    mango3 = new Mango(810,350,70,70);
    mango4 = new Mango(810,260,70,70);
    mango5 = new Mango(700,240,70,70);
    mango6 = new Mango(920,240,70,70);
    mango7 = new Mango(810,220,70,70);
    mango8 = new Mango(810,180,70,70);
    tree = new Tree(800,250,250,200);
    stone = new Stone(200,200,50,50);
    slingShot = new SlingShot(stone.body, { x: 100, y: 300 })
    
    boy = Bodies.rectangle(110, 450, 70, 700);
}

function draw() {
    background(backgroundImg);
    Engine.update(engine);
    
    mango1.display();
    mango2.display();
    ground.display();
    mango3.display();
    mango4.display();
    mango5.display();
    mango6.display();
    mango7.display();
    mango8.display();
    
    tree.display();
    stone.display();
    slingShot.display();

    boySprite.x= boy.position.x 
    boySprite.y= boy.position.y 

    rectMode(CENTER);
    rect(boy.position.x,boy.position.y,110,300);
    
    function mouseDragged() {
        Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY })
    }
    
    function mouseReleased() {
        slingShot.fly()
    }

}
    function keyPressed() {

        if (keyCode == 32) {
            Matter.Body.setPosition(stone.body, { x: 200, y: 200 })
            slingShot.attach(stone.body);
            stone.trajectory = []

        }

    }


