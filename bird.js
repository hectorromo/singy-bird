function Bird(two) {
    var flap = 40;
    var beakSize = 25;
    
    this.head = two.makeRectangle(0, 0, 120, 120);
    this.stomach = two.makeRectangle(30, 42, 60, 35);
    this.eye1 = two.makeCircle(45, -25, 2);
    this.eye2 = two.makeCircle(68, -25, 2);
    this.beak = two.makePath(-beakSize/2, 0, beakSize/2, 0, 0, beakSize+1),

    this.eyes = two.makeGroup(this.eye1, this.eye2);
    this.body = two.makeGroup(this.head, this.stomach, this.beak, this.eyes);

    this.init = function() {
        this.head.fill = '#FFF78E';
        this.head.noStroke();
        this.eyes.fill = '#000';
        this.eyes.noStroke();
        this.stomach.fill = '#FFF9AF';
        this.stomach.noStroke();
        this.beak.translation.set(60, 5);
        this.beak.rotation = -1.5;
        this.beak.fill = '#FAC671';
        this.beak.noStroke();
        this.initPosition();
    }

    this.initPosition = function initPosition() {
        this.body.translation.set( two.width/3, two.height/2 );
    }

    this.update = function update() {
        
    }

    this.flap = function flap() {
      
    }
    
    this.collide = function collide() {
      
    }

}