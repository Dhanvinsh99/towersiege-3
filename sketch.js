const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var ball, mainGround, rope;
var score = 0;
function preload(){
    getbackground()
}

function setup() {
    var canvas = createCanvas(1500, 700);
    engine = Engine.create();
    world = engine.world;


    ball = new Ball(150, 400, 75, 75);
    mainGround = new Ground(750, 698, 1500, 40);
    sGround1 = new Ground(650, 600, 350, 20);
    sGround2 = new Ground(1150, 350, 200, 20);


    block1 = new Block1(550, 558, 40, 60);
    block2 = new Block1(590, 558, 40, 60);
    block3 = new Block1(630, 558, 40, 60);
    block4 = new Block1(670, 558, 40, 60);
    block5 = new Block1(710, 558, 40, 60);
    block6 = new Block1(750, 558, 40, 60);

    block7 = new Block2(590, 498, 40, 60);
    block8 = new Block2(630, 498, 40, 60);
    block9 = new Block2(670, 498, 40, 60);
    block10 = new Block2(710, 498, 40, 60);

    block11 = new Block3(630, 438, 40, 60);
    block12 = new Block3(670, 438, 40, 60);

    block13 = new Block1(650, 378, 40, 60);

    block14 = new Block1(1110, 308, 40, 60);
    block15 = new Block1(1150, 308, 40, 60);
    block16 = new Block1(1190, 308, 40, 60);

    block17 = new Block3(1130, 248, 40, 60);
    block18 = new Block3(1170, 248, 40, 60);

    block19 = new Block2(1150, 188, 40, 60);

    rope = new launcher(ball.body, { x: 150, y: 350 });

}

function draw() {
    if(backgroundImg){
        background(backgroundImg)
    }
    noStroke()
    textSize(34)
    fill("white")
    text("score: " + score, width-300, 50)
    
    Engine.update(engine);
    ball.display();
    mainGround.display();
    sGround1.display();
    sGround2.display();
    block1.display();
    block1.score();
    block2.display();
    Block2.score();
    block3.display();
    Block3.score();
    block4.display();
    block4.score();
    block5.display();
    block5.score();
    block6.display();
    block6.score();

    block7.display();
    block7.score();
    block8.display();
    block8.score();
    block9.display();
    block9.score();

    block10.display();
    block10.score();

    block11.display();
    block11.score();
    block12.display();
    block12.score();

    block13.display();
    block13.score();

    block14.display();
    block14.score();
    block15.display();
    block15.score();
    block16.display();
    block16.score();

    block17.display();
    block17.score();
    block18.display();
    block18.score();

    block19.display();
    block19.score();

    rope.display();

}


function mouseDragged() {
    Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
    rope.fly();
}

function keyPressed() {
    if (keyCode === 32) {
        Matter.Body.setPosition(ball.body, { x: 220, y: 450 });
        rope.attach(ball.body);
        console.log(ball.body.speed);

    }
}

function getbackground(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJson = await response.json()

    var DateTime = responseJson.datetime
    var Hour = DateTime.slice(5, 7)

    if(hour >= 06 && hour <= 18){
        bg = "blue"
    }
    else{
        bg = "black"
    }

    var backgroundImg = loadImage(bg)
}