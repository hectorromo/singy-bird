var scene = document.getElementById('scene'),
	two = new Two({
		fullscreen: true,
		type: Two.Types.svg,
		autostart: true
	});
	
two.appendTo(scene);

var ground = two.makeRectangle(two.width/2, two.height-10, two.width, 20 );
var birdie = new Bird(two);

ground.fill = '#ccc';
ground.noStroke();

two.bind('update', function() {

	// micLevel = mic.getLevel();
	// console.log(micLevel)

	var gravity = new Two.Vector(0, 0.2);
	birdie.applyForce(gravity);

	birdie.update();
	birdie.edges(ground);
	birdie.display();

	document.onclick = function() {
		birdie.flap();
	}
});