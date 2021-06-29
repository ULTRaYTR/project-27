class rope{
	constructor(body1,body2)
	{
		
		var options={
			bodyA:body1,
			
			pointB:body2
		//console.log(options);
		this.rope=Constraint.create(options)
		this.pointB=body2
		World.add(world,this.rope)
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.pointB
		strokeWeight(2);

             line(pointA.x,pointA.y,pointB.x,pointB.y)
	}

}
