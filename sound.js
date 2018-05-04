// const canvas = document.querySelector('#stream');
// const canvasCtx = canvas.getContext('2d');
// const WIDTH = window.innerWidth;
// const HEIGHT = window.innerHeight;
// canvas.width = WIDTH;
// canvas.height = HEIGHT;

// Globals
var aCtx;
var analyser;
var microphone;
if (navigator.getUserMedia) {
    navigator.getUserMedia({audio: true}, function(stream) {
        aCtx = new webkitAudioContext();
        analyser = aCtx.createAnalyser();
        microphone = aCtx.createMediaStreamSource(stream);
        microphone.connect(analyser);
        analyser.connect(aCtx.destination);
        process();
    });
};
function process(){
    setInterval(function(){
        FFTData = new Float32Array(analyser.frequencyBinCount);
        analyser.getFloatFrequencyData(FFTData);
        console.log(FFTData[0]);
    },10);
}

// var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
// var analyser = audioCtx.createAnalyser();


// function gotStream(stream) {
//     // Create an AudioNode from the stream
//     var mediaStreamSource = audioCtx.createMediaStreamSource(stream);

//     // Connect it to destination to hear yourself
//     // or any other node for processing!
//     mediaStreamSource.connect(audioCtx.destination);

//     draw();
// }

// navigator.mediaDevices.getUserMedia({audio:true})
// 	.then(gotStream)
// 	.catch(function(err) { console.log(err); });





// analyser.fftSize = 256;
// var bufferLength = analyser.frequencyBinCount;
// console.log(bufferLength);
// var dataArray = new Float32Array(bufferLength);

// canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

// function draw() {
//   drawVisual = requestAnimationFrame(draw);
//   analyser.getFloatFrequencyData(dataArray);
//   canvasCtx.fillStyle = 'rgb(0, 0, 0)';
//   canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
  
//   var barWidth = (WIDTH / bufferLength) * 2.5;
//   var barHeight;
//   var x = 0;

//   for(var i = 0; i < bufferLength; i++) {
//     barHeight = (dataArray[i] + 140)*2;
//     canvasCtx.fillStyle = 'rgb(' + Math.floor(barHeight+100) + ',50,50)';
//     canvasCtx.fillRect(x,HEIGHT-barHeight/2,barWidth,barHeight/2);
//     x += barWidth + 1;
//   }
// };






// window.AudioContext = window.AudioContext || window.webkitAudioContext;
// var audioContext = new AudioContext();
// var analyser = audioContext.createAnalyser();


// function gotStream(stream) {
//     // Create an AudioNode from the stream
//     var mediaStreamSource = audioContext.createMediaStreamSource(stream);

//     // Connect it to destination to hear yourself
//     // or any other node for processing!
//     mediaStreamSource.connect(audioContext.destination);

//     visualize();
// }

// navigator.mediaDevices.getUserMedia({audio:true})
// 	.then(gotStream)
// 	.catch(function(err) { console.log(err); });





// function visualize() {
// 	analyser.fftSize = 256;
// 	var bufferLength = analyser.frequencyBinCount;
// 	var dataArray = new Float32Array(bufferLength);
// 	// var dataArray = new Uint8Array(bufferLength);
// 	var barWidth = (WIDTH / bufferLength) * 2.5;
// 	var barHeight;
// 	var x = 0;


// 	canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
		

// 	function draw() {
// 		// console.log('drawing');
// 		drawVisual = requestAnimationFrame(draw);
// 		// analyser.getByteFrequencyData(dataArray);
// 		// analyser.getByteFrequencyData(dataArray);
// 		analyser.getFloatFrequencyData(dataArray);


// 		// Make background black
// 		canvasCtx.fillStyle = 'rgb(0,0,0)';
// 		canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);


// 	    for(var i = 0; i < bufferLength; i++) {
// 	        barHeight = dataArray[i]/2;


// 	        canvasCtx.fillStyle = 'rgb(' + (barHeight+100) + ',50,50)';
// 	        canvasCtx.fillRect(x,HEIGHT-barHeight/2,barWidth,barHeight);

// 	        x += barWidth + 1;
// 	    }

// 	}


// 	draw();


// }