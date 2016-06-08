var gravity = 2,
	scene = document.getElementById('scene'),
	two = new Two({
		fullscreen: true,
		type: Two.Types.svg,
		autostart: true
	}),
	birdie = new Bird(two);

two.appendTo(scene);
birdie.init();


two.bind('update', function() {
	birdie.body.translation.y = gravity;

	document.onclick = function() {
		// birdie.translation.y = birdie.flap;
	}
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
