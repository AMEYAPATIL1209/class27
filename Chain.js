class Chain{
    constructor(bodyA,bodyB){
        var options= {
            bodyA:bird.body,
            bodyB:ConstrainedLog.body,
            stiffness:0.04,
            lenght:10
        }
        var chain= Constraint.create(options);
        World.add(world,chain);
    }
    display(){
        strokeWeight(3);
    line(bird.body.position.x,bird.body.position.y,ConstrainedLog.body.position.x,ConstrainedLog.body.position.y);
    }
}