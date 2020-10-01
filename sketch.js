const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var division=[];
var plinkos = [];
var particles=[];
var divisionHeight=300;

var division, particles, plinkos,particle;

var engine, world;
var score=0;
var count=0;
var gameState="Play";
function setup() {

  engine = Engine.create();
  world = engine.world;

  var canvas = createCanvas(490,800);
  base = new Ground(240, 700, 600,20);
  
  for(var d=0; d<=width ; d = d + 80){
    division.push(new Division(d,550, 10, divisionHeight)); 
  }
  
  
  for(var j = 40; j<=width; j=j+50)
  {
    plinkos.push(new Plinko(j,75,10)); 
  }

  for (var j = 15; j<=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,175,10))
  }

  for(var j = 40; j<=width; j=j+50)
  {
    plinkos.push(new Plinko(j,275,10))
  }

  for (var j = 15; j<=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j, 375,10))
  } 

  
  
}

function draw() {
  background("black");
  text(mouseX+","+mouseY,10,10);
  textSize(25);
  fill("green");    
  text("Score: "+score,50,20)
  text(" 500 ", 5, 450);
  text(" 500 ", 80, 450);
  text(" 100 ", 160, 450);
  text(" 100 ", 240, 450);
  text(" 200 ", 320, 450);
  text(" 200 ", 400, 450);
  Engine.update(engine);
  
  for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }
  for (var d = 0; d<division.length; d++){
    division[d].display();
  }

  for (var p = 0; p<particles.length; p++){
    particles[p].display();
  }
  /*if(frameCount%90===0){
    particles.push(new Particle(random(width/2-10, width/2+10),10 ,10))
  }
  */
base.display();
  if (particle!= null)
  {
    particle.display();

      if(particle.body.position.y>400)
      {

        if(particle.body.position.x<155)
        {
            score=score+500;
            particle= null;
            if(count>=5)gameState="end";
        }

        else if (particle.body.position.x<315  && particle.body.position.x>160)  
      {
        score = score +100;
        particle=null;
        if(count>=5) gameState="end";
      }

      else if (particle.body.position.x<490 && particle.body.position>325)
      {
        score = score+200;
        particle = null;
        if (count>=5)gameState="end";
      }
      }

     }

  
  
}

 function mousePressed(){
    if(gameState!=="end")
    {
      count++;
      particle = new Particle(mouseX, 10,10,10);
    }
  }
