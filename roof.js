class roof
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			
			rectMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			rect(groundpos.x,groundpos.y,this.w, this.h);
			pop()
			
	}

}