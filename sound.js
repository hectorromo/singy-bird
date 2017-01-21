var voice = new Wad({
	source: 'mic',
	reverb: {
		wet: .4
	},
	filter: {
		type: 'highpass',
		frequency: 700
	},
	panning: -.2
});
console.log(voice);
voice.play();
