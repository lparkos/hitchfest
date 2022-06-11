


// let canvas = document.createElement('canvas');
// let ctx = canvas.getContext('2d');
// var animationOffsets = {
// 	// scene: {
// 	// 	position: {
// 	// 		x: 0,
// 	// 		y: 0,
// 	// 		z: 0,
// 	// 	}
// 	// } 
// };
// var options = {
// 	dotSize: 7,
// 	density: 10, // расстояние между точками
// 	resolution: 250, // разрешение объекта
// 	nerve: 0, // дерганность шариков 1-5
// 	twitchDist: 5, // диапазон содрогания точек
// 	amount: 10000, // количество точек
// };

// canvas.width = options.resolution;
// canvas.height = options.resolution;
// canvas.classList.add('tempcanvas');
// document.body.appendChild(canvas);


// function loadImages(paths, whenLoaded) {
// 	var imgs = [];
// 	var loadedImgsCounter = 0;

// 	paths.forEach(function(path, i) {
// 		var img = new Image;
// 		img.setAttribute('crossOrigin', '');
// 		img.onload = function() {
// 			if (img.complete) { 
// 				imgs[i] = img;
// 				loadedImgsCounter++;
// 				if (loadedImgsCounter == paths.length) {
// 					whenLoaded(imgs)
// 				};
// 			}
			
// 		}
// 		img.src = path;
// 	});
// }

// function fillUp(array, max) {
// 	var length = array.length;
	
// 	let counter = 0;
// 	if (length > max) {
// 		for (; array.length > max;) {
// 			length = array.length;
// 			for (let i = 0; i < length - max; i++) {
// 				array.splice(Math.floor(Math.random() * length), 1);
// 			}
// 		}
		
// 	} else {
// 		for (let i = 0; i < max - length; i++) {
// 			array.push(array[Math.floor(Math.random() * length)])
// 		}
		
// 	}

	
// 	return array;
// }

// function shuffle(a) {
// 	for (let i = a.length; i; i--) {
// 		let j = Math.floor(Math.random() * i);
// 		[a[i - 1], a[j]] = [a[j], a[i - 1]];
// 	}
// 	return a;
// }

// function drawImageScaled(img, context) {
// 	context = context || ctx;
// 	let canvas = context.canvas;
// 	let hRatio = canvas.width / img.width;
// 	let vRatio = canvas.height / img.height;
// 	let ratio = Math.min(hRatio, vRatio);
// 	let centerShift_x = (canvas.width - img.width * ratio) / 2;
// 	let centerShift_y = (canvas.height - img.height * ratio) / 2;
// 	context.clearRect(0, 0, canvas.width, canvas.height);
// 	context.drawImage(img, 0, 0, img.width, img.height,
// 		centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
// }

// function clearScene(arg) {
// 	while(scene.children.length > 0) {
// 		scene.remove(scene.children[0]);
// 	}
// }

// function drawCurrentImgOnCanvas(argument) {
// 	loadImages(images, function(imgs){
// 		drawImageScaled(imgs[currentImage], ctx);
// 	});
// }


// function getArrayFromImage(img) {
// 	let imageCoords = [];
// 	// ctx.clearRect(0, 0, options.resolution, options.resolution);

// 	img.prop = img.height / img.width;

// 	drawImageScaled(img, ctx);
// 	let data = ctx.getImageData(0, 0, options.resolution, options.resolution);
// 	data = data.data;
	
// 	for (let y = 0; y < options.resolution; y++) {
// 		for (let x = 0; x < options.resolution; x++) {
// 			let red = data[((options.resolution * y) + x) * 4];
// 			let green = data[((options.resolution * y) + x) * 4 + 1];
// 			let blue = data[((options.resolution * y) + x) * 4 + 2];
// 			let alpha = data[((options.resolution * y) + x) * 4 + 3];
// 			if (alpha > 0) {
// 				imageCoords.push({
// 					x: options.density * (x - options.resolution / 2),
// 					y: options.density * (options.resolution / 2 - y),
// 					red: red,
// 					green: green,
// 					blue: blue
// 				});
// 			}
// 		}
// 	}
// 	return shuffle(fillUp(imageCoords, options.amount));
// }
// let images = [
// 	'../images/elements/headliner.svg'
// ];


// var camera, controls, scene, renderer, geometry, currentImage = 0, galleryData = [];

// function createScene(argument) {
// 	var texture = (new THREE.TextureLoader).load("https://cdn.rawgit.com/akella/dots-animation/b9abad87/img/particle.png");
// 	var material = new THREE.PointsMaterial({
// 		size: options.dotSize,
// 		vertexColors: THREE.VertexColors,
// 		map: texture,
// 		alphaTest: 0.5
// 	});

// 	geometry = new THREE.Geometry();
// 	var x, y, z;
	
// 	galleryData[currentImage].forEach((el, index) => {
		
// 		geometry.vertices.push(new THREE.Vector3(
// 			el.x - Math.random() * 3,
// 			el.y - Math.random() * 3,
// 			Math.random() * (options.resolution / 4)
// 		));
// 		geometry.colors.push(new THREE.Color(el.red / 255, el.green / 255, el.blue / 255));
// 	});

// 	var pointCloud = new THREE.Points(geometry, material);
// 	scene.add(pointCloud);
// }

// function reinit(argument) {
// 	galleryData = [];
// 	console.log("reinit");
// 	loadImages(images, function(loadedImages) {
		
// 		loadedImages.forEach(function(el, index) {
// 			galleryData.push(getArrayFromImage(loadedImages[index]));
// 		});
		

// 		clearScene();
// 		createScene();
// 		drawCurrentImgOnCanvas();
// 	});

// }

// loadImages(images, function(loadedImages) {
// 	loadedImages.forEach(function(el, index) {
// 		galleryData.push(getArrayFromImage(loadedImages[index]));
// 	});
	



// 	function init() {

// 		scene = new THREE.Scene();
// 		scene.background = new THREE.Color(0x212121);
// 		// scene.fog = new THREE.FogExp2( 0xcccccc, 0.0007 );
// 		renderer = new THREE.WebGLRenderer();
// 		renderer.setPixelRatio(window.devicePixelRatio);
// 		renderer.setSize(window.innerWidth, window.innerHeight);
// 		var container = document.getElementById('hero');
// 		container.appendChild(renderer.domElement);
// 		camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 1, 10000);

// 		camera.position.z = 1000;
// 		controls = new THREE.OrbitControls(camera, renderer.domElement);

// 		createScene();


// 		window.addEventListener('resize', onWindowResize, false);

// 		let tlHello = gsap.timeline();
// 		tlHello
// 		.to(scene.children[0].position, 2, {ease: "power2.in", z: 1000 }, { z: 0 })
// 		// .to(scene.children[0].rotation, 1/2, {ease: power2.out, y: -.2}, '-=.5')
// 		// .to(scene.children[0].rotation, 1/2, {ease: power2.out, y: .2})
// 		// .to(scene.children[0].rotation, .5/2, {ease: Power0.easeNone, y: 0})
// 		;

// 		canvas.style.display = "block";
// 		drawCurrentImgOnCanvas();



// 	} //init end
// 	function onWindowResize() {
// 		camera.aspect = window.innerWidth / window.innerHeight;
// 		camera.updateProjectionMatrix();
// 		renderer.setSize(window.innerWidth, window.innerHeight);
// 	}

// 	var i = 0;

// 	function animate() {
// 		i++;
// 		requestAnimationFrame(animate);
// 		geometry.vertices.forEach(function(particle, index) {
// 			var dX, dY, dZ;
// 			dX = Math.sin(i / 10 + index / 2 - Math.random() * options.nerve) / options.twitchDist;
// 			dY = Math.sin(i / 10 + index / 2 - Math.random() * options.nerve) / options.twitchDist;
// 			dZ = 0;
// 			particle.add(new THREE.Vector3(dX, dY, dZ));
// 		});
// 		geometry.verticesNeedUpdate = true;
// 		// scene.rotation.x = Math.sin(i/100)/1;
// 		// scene.rotation.y = Math.sin(i/200)/4;

// 		render();
// 	}


// 	function render() {
// 		renderer.render(scene, camera);
// 	}
// 	init();
// 	animate();

// 	options.nextImage = function() {
// 		currentImage++;
// 		currentImage = currentImage % galleryData.length;

// 		drawCurrentImgOnCanvas();
		
// 		// need use ModifiersPlugin
		
// 		function dotsTransform(particle, index) {
// 			// setTimeout(function(){
// 				let TLOffset = gsap.timeline();
// 				TLOffset.to(particle, 1, { x: galleryData[currentImage][index].x, y: galleryData[currentImage][index].y });
// 				let TLColor = gsap.timeline();
// 				TLColor.to(geometry.colors[index], 1, {
// 					r: galleryData[currentImage][index].red / 255,
// 					g: galleryData[currentImage][index].green / 255,
// 					b: galleryData[currentImage][index].blue / 255,
// 					onUpdate: function() {
// 						geometry.colorsNeedUpdate = true;
// 					}
// 				});
// 			// },0);
// 		}

		
// 		geometry.vertices.forEach((particle, index) => dotsTransform(particle, index))
// 	}

// });