class Plinko{
    constructor( x ,y, radius){
        var options={
            isStatic:true 
        }
        this.r=radius;
        this.body=Bodies.circle(x,y,radius,options);
        
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        fill("white")
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, 10, 10)
        
    }
}