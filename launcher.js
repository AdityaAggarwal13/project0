class launcher {
constructor(bodya,pointb){
var options={
bodyA:bodya,
pointB:pointb,
lenght:10,
stiffness:0.004



}

this.pointB=pointb;
    this.launcher=Constraint.create(options);
World.add(world,this.launcher);



}
attach(body){
    this.launcher.bodyA=body;
    
    
    }
fly()
{
this.launcher.bodyA=null;





}

display()
{
    if(this.launcher.bodyA){
    var pointa=this.launcher.bodyA.position;
    var pointb= this.pointB;
    strokeWeight(4);
 line (pointa.x,pointa.y,pointb.x,pointb.y);


    }

}

















}