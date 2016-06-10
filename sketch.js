var scene = document.getElementById('scene'),
	two = new Two({
		fullscreen: true,
		type: Two.Types.svg,
		autostart: true
	});
	
two.appendTo(scene);

var birdie = new Bird(two);

two.bind('update', function() {
	var gravity = new Two.Vector(0, 0.1);
	birdie.applyForce(gravity);
	


	birdie.update();
	birdie.edges();
	birdie.display();
	// birdie.body.translation.y = gravity;

	// document.onclick = function() {
	// 	birdie.translation.y = birdie.flap;
	// }
});







// ---- Make the bird rotate
// bird.rotation = bird.rotation + rotation;
// if ( bird.rotation > 2 || bird.rotation < -2) {
// 	rotation = rotation * -1;
// }	



// ---- Make triangle function
// function makeTriangle(size) {
// 	var triangle = two.makePath(-size/2, 0, size/2, 0, 0, size+2);
// 	return triangle;
// }
