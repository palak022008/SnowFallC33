class Snow{
    constructor(x,y,r){
        var option = {
isStatic:false,
restitution :0.1,
density : 0.1

        }
        this.x = x;
        this.y = y;
        this.r = r;

        this.body = Bodies.circle(this.x,this.y,this.r/2,option)
       World.add(world,this.body)
    }
    update(){
        if(this.body.position.y>400){
           Matter.Body.setPosition(this.body,{x:random(0,600),y:random(0,400)})

        }

    }

    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        ellipseMode(CENTER)
        strokeWeight(0)
        fill('white')
        ellipse(0,0,this.r,this.r)
        pop();

    }
}