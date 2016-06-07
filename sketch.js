var scene = document.getElementById('scene'),
	two = new Two({
		fullscreen: true,
		type: Two.Types.svg,
		autostart: true
	});
two.appendTo(scene);

var gravity = 6,
	birdPosX = two.width/3,
	birdPosY = two.height/2;

var body = two.makeRectangle(0, 0, 120, 120);
var stomach = two.makeRectangle(30, 42, 60, 35);
var eye1 = two.makeCircle(45, -25, 2);
var eye2 = two.makeCircle(68, -25, 2);

var eyes = two.makeGroup(eye1, eye2);
eyes.fill = '#000';
eyes.noStroke();

// Bird
var beakSize = 25,
	// body = two.makeCircle(0, 0, 60),
	beak = two.makePath(-beakSize/2, 0, beakSize/2, 0, 0, beakSize+1),
	// stomach = two.makeEllipse(0, 38, 40, 18),
	bird = two.makeGroup(body, stomach, beak, eyes);
// var eye = two.makeCurve(300, 190, 285, 190, 200, 200, open);

body.fill = '#FFF78E';
body.noStroke();

stomach.fill = '#FFF9AF';
stomach.noStroke();

beak.translation.set(60, 5);
// beak.translation.set(67, 10);
beak.rotation = -1.5;
beak.fill = '#FAC671';
beak.noStroke();

// var tail = two.makeGroup(feather);
bird.translation.set(birdPosX, birdPosY);
// bird.rotation = 0;

bird.goUp = function() {
	this.translation.y -= gravity;
	console.log(this.translation);
}
bird.goDown = function() {
	this.translation.y += gravity;
}

bird.goDown();
bird.goUp();
var rotation = 0.1;

// two.update();

document.addEventListener("keydown", dealWithKeyboard, false);
 
function dealWithKeyboard(e) {
	if (e.which == 40) {
		bird.goDown();
	} else if (e.which == 38) {
		bird.goUp();
	}
    // gets called when any of the keyboard events are overheard
}

two.bind('update', function() {
	// bird.rotation = bird.rotation + rotation;
	// if ( bird.rotation > 2 || bird.rotation < -2) {
	// 	rotation = rotation * -1;
	// }	
});


// function makeTriangle(size) {
// 	var triangle = two.makePath(-size/2, 0, size/2, 0, 0, size+2);
// 	return triangle;
// }
