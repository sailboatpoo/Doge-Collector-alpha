class fruit {
	constructor(fruitImg) {
		this.randomX = random(0, windowWidth)
		this.randomY = random(0, windowHeight)
		this.fruit = fruitImg

	}
}
function preload() {
	gameBackground = loadImage("Background.png");
	basket = loadImage("Basket.png");
}
function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(gameBackground);
	line(163, 700, 597, 700)
	strokeWeight(3)
	stroke('darkgrey');
	image(basket, basketX, basketY);
	if (keyIsDown(65)) {
		basketX -= 5;
	}
	if (keyIsDown(68)) {
		basketX += 5;
	}
	let basketX = 0;
	let basketY = 310;
	//basket controls
}