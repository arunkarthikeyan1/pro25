class Paper {
        constructor(x, y,imgwidth, imglength) {
          var options = {
              'isStatic':false,
              'restitution':0.3,
              'friction':0.5,
              'density':1.2
          }
          this.body = Bodies.circle(x, y, 30, options);
          this.radius =30;
          this.imagewidth=imgwidth;
          this.imagelength=imglength;
          this.image=loadImage("paper.png");
          World.add(world, this.body);
        }
        display(){
          var pos =this.body.position;
          var angle = this.body.angle;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          circle()
          imageMode(CENTER);
          image(this.image,0,0,this.imagewidth,this.imagelength);
          this.body.scale=0.6;
          pop();
        }
      };
      
