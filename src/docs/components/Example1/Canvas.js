import React, { Component } from 'react';

const RADIANS = Math.PI / 180;
const STRENGTH = 2;
const ELASTICITY = 0.01;
const DAMPING = 0.696;
const MASS = 0.1;
const MAX_SIZE = 40;
const SIZE = 14;
const CIRCLE = 'circle';
const SQUARE = 'square';
const TYPE = SQUARE; // Render type
const DPR = 1; // window.devicePixelRatio || 1;
const DEMO_IMAGE =
	'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/beavis_a_l.jpg';

class Canvas extends Component {
	state = {
		isDragging: false,
		hasLoaded: false,
		tick: 0
	};

	componentDidMount() {
		this.canvas = document.getElementById('canvas');
		this.canvas.width = this.width = window.innerWidth;
		this.canvas.height = this.height = window.innerHeight;
		this.dpr = 1;
		this.ctx = this.canvas.getContext('2d');
		this.ctx.scale(this.dpr, this.dpr);
		// state
		this.isDragging = false;
		this.hasLoaded = false;
		this.tick = 0;
		this.mouse = {
			x: (window.innerWidth * this.dpr) / 2,
			y: (window.innerHeight * this.dpr) / 2,
			mousedown: false
		};

		// setup
		this.setupListeners();
		this.addInitialImage();
		this.setCanvasSize();
		this.renderAnimation();
	}

	setupListeners() {
		window.addEventListener('resize', this.handleResize);
		// this.canvas.addEventListener('drop', this.handleDrop, false);
		// this.canvas.addEventListener('dragover', this.handleDragOver, false);
		// this.canvas.addEventListener('dragleave', this.handleDragLeave, false);
		// window.addEventListener('mousemove', this.handleMouse);
		// window.addEventListener('mousedown', this.handleMousedown);
		// window.addEventListener('mouseup', this.handleMouseup);
	}

	handleResize = () => {
		this.setCanvasSize();
	};

	handleMousedown = event => {
		this.mouse.mousedown = true;
	};

	handleMouseup = event => {
		this.mouse.mousedown = false;
	};

	handleDrop = event => {
		event.preventDefault();

		const image = event.dataTransfer.getData('text/plain');
		this.isDragging = false;
		this.hasLoaded = false;

		const file = event.dataTransfer.files[0];

		this.handleImageFile(file);
	};

	handleImageFile = file => {
		// check for image, if not return
		const imageType = /image.*/;
		if (!file.type.match(imageType)) return;

		// create image from file
		this.image = new FluidImage(
			{
				file
			},
			SIZE
		);

		this.image
			.hasLoaded()
			.then(() => {
				console.log('successfully loaded!');
				this.handleLoad();
			})
			.catch(e => {
				console.log('>:-| failed:', e);
			});
	};

	handleLoad = () => {
		this.hasLoaded = true;
		this.centerImageToWindow();

		if (!this.demo) {
			this.demoForce();
		}
	};

	handleDragOver = event => {
		event.preventDefault();
		this.isDragging = true;
	};

	handleDragLeave = event => {
		event.preventDefault();
		this.isDragging = false;
	};

	handleMouse = event => {
		const x = event.clientX * 1;
		const y = event.clientY * 1;
		this.mouse.x = x;
		this.mouse.y = y;

		this.applyForce();
	};

	addInitialImage = () => {
		// create image from file
		this.image = new FluidImage(
			{
				src: DEMO_IMAGE
			},
			SIZE
		);

		this.image
			.hasLoaded()
			.then(() => {
				this.handleLoad();
			})
			.catch(e => {
				console.log('>:-| failed:', e);
			});
	};

	centerImageToWindow = () => {
		const { width: w, height: h } = this.image.canvas;
		const { width: cw, height: ch } = this.canvas;
		const tx = cw / 2 - w / 2;
		const ty = ch / 2 - h / 2;

		// centers points on this main canvas
		this.image.points.map(p => {
			const x = p.x + tx;
			const y = p.y + ty;
			p.setOrigin(x, y);
			return p;
		});
	};

	applyForce = () => {
		if (!this.hasLoaded) return; // wait for an image loaded

		const { mousedown, x, y } = this.mouse;
		const points = this.image.points;
		const length = points.length;

		for (let i = 0; i < length; i++) {
			const fd = points[i];
			const dx = fd.cx - x;
			const dy = fd.cy - y;
			const angle = Math.atan2(dy, dx);
			let dist = STRENGTH / Math.sqrt(dx * dx + dy * dy);

			if (mousedown) {
				dist *= -1;
			}

			const fx = Math.cos(angle) * dist;
			const fy = Math.sin(angle) * dist;
			fd.applyForce(fx, fy);
		}
	};

	setCanvasSize = () => {
		this.canvas.width = window.innerWidth * this.dpr;
		this.canvas.height = window.innerHeight * this.dpr;
		this.canvas.style.width = window.innerWidth + 'px';
		this.canvas.style.height = window.innerHeight + 'px';
	};

	drawBg = color => {
		this.ctx.fillStyle = color || '#111111';
		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
	};

	drawText = () => {
		const size = 60 * this.dpr;
		this.ctx.font = `${size}px  futura-pt, futura, sans-serif`;
		this.ctx.textAlign = 'center';
		this.ctx.fillStyle = 'white';

		const copy = this.isDragging ? 'Drop Image Now' : 'Drag Image Here';
		this.ctx.fillText(
			copy,
			this.canvas.width / 2,
			this.canvas.height / 2 + size / 2
		);
	};

	drawMouse = () => {
		const { mousedown, x, y } = this.mouse;
		this.ctx.lineWidth = 2 * this.dpr;
		this.ctx.strokeStyle = mousedown ? '#FFFFFF' : '#333333';
		this.ctx.beginPath();
		this.ctx.arc(x, y, 16 * this.dpr, 0, Math.PI * 2, true);
		this.ctx.closePath();
		this.ctx.stroke();
	};

	renderAnimation = () => {
		if (this.hasLoaded) {
			const bg = this.image.points[0].color;

			this.drawBg(bg);
			this.image.points.forEach(p => {
				p.draw(this.ctx);
				p.update();
			});
			this.ctx.restore();
		} else {
			this.drawBg();
		}

		this.drawMouse();

		if (this.tick < 300) {
			this.applyForce();
		}

		this.drawText();
		this.tick++;
		window.requestAnimationFrame(this.renderAnimation);
	};

	render() {
		return (
			<canvas
				id="canvas"
				onDrop={this.handleDrop}
				onDragOver={this.handleDragOver}
				onDragLeave={this.handleDragLeave}
				onMouseMove={this.handleMouse}
				onMouseDown={this.handleMousedown}
				onMouseUp={this.handleMouseup}
			/>
		);
	}
}

class FluidImage {
	constructor(
		image = {
			src: false,
			file: false
		},
		size = SIZE
	) {
		this.src = image.src;
		this.file = image.file;
		this.size = size;

		this.pw = 0; // numb of points width
		this.ph = 0; // numb of points height
		this.points = [];

		// binds
		this.onLoad = this.onLoad.bind(this);

		// create canvas and image el
		this.canvas = document.createElement('canvas');
		this.img = document.createElement('img');
		this.img.crossOrigin = 'Anonymous'; // prevent cors error
		this.img.onload = this.onLoad;

		this.ctx = this.canvas.getContext('2d');

		if (this.src) {
			this.img.src = this.src;
		} else if (this.file) {
			this.readFile();
		} else {
			throw new Error('Must provide an image as a url or file');
		}
	}

	readFile() {
		const reader = new FileReader();

		// reader load event handler
		const loadHandler = aImg => {
			return e => {
				// e.target.result is a dataURL for the image
				aImg.src = e.target.result;

				this.drawToCanvas();
			};
		};
		reader.onload = loadHandler(this.img);

		// read file
		reader.readAsDataURL(this.file);
	}

	hasLoaded() {
		return new Promise((resolve, reject) => {
			this.resolveLoaded = resolve;
		});
	}

	onLoad(event) {
		// resolve promise if one has been requested
		if (this.resolveLoaded) {
			this.resolveLoaded();
		}
		this.setupCanvas();
		this.drawToCanvas();
		this.getPixels();
	}

	getPixels() {
		const img = this.canvas;
		const size = this.size;
		const pixelData = this.ctx.getImageData(0, 0, img.width, img.height);
		const colors = pixelData.data;

		// gets color of each pixel based on size,
		// then creates a fluid pixel and adds to points

		for (let i = size; i <= img.height; i += size) {
			for (let j = size; j <= img.width; j += size) {
				const pixelPosition = (j + i * pixelData.width) * 4;
				const x = j;
				const y = i;
				const w = size;
				const h = size;
				const r = colors[pixelPosition];
				const g = colors[pixelPosition + 1];
				const b = colors[pixelPosition + 2];
				const rgba = `rgba(${r}, ${g}, ${b}, 1)`;

				const fluidPx = new FluidPixel(x, y, w, h, rgba);

				this.points.push(fluidPx);
			}
		}
	}

	setupCanvas() {
		const { width: w, height: h } = this.img;
		const maxSide = Math.max(w, h);

		this.width = w;
		this.height = h;
		const max = MAX_SIZE * this.size;

		if (maxSide >= max) {
			const r = h / w;

			if (w >= max) {
				this.width = max;
				this.height = max * r;
			} else {
				this.height = max;
				this.width = max * r;
			}
		}

		this.canvas.width = this.width;
		this.canvas.height = this.height;
	}

	drawToCanvas() {
		const { width, height } = this;
		this.ctx.drawImage(this.img, 0, 0, width, height);
	}
}

class FluidPixel {
	constructor(x = 0, y = 0, w = 4, h = 4, color = 'red') {
		this.ox = x; // origin x
		this.oy = y; // origin y
		this.x = x;
		this.y = y;
		this.w = w; // width
		this.h = h; // height
		this.hw = w / 2; // half width
		this.hh = h / 2; // half height
		this.cx = x + this.hw; // center x
		this.cy = y + this.hh; // center y
		this.vx = 0; // velocity x
		this.vy = 0; // velocity y
		this.fx = 0; // force x
		this.fy = 0; // force y
		this.color = color;
		this.mass = MASS;
		this.elasticity = ELASTICITY;
		this.damping = DAMPING;
	}

	setOrigin(x, y) {
		// updates a points position without affects
		this.ox = x; // origin x
		this.oy = y; // origin y
		this.x = x;
		this.y = y;
		this.cx = x + this.hw; // center x
		this.cy = y + this.hh; // center y
	}

	update() {
		// force to origin, difference multiplied by elasticity constant
		const ofx = (this.ox - this.x) * this.elasticity;
		const ofy = (this.oy - this.y) * this.elasticity;

		// sum forces
		const fx = this.fx + ofx;
		const fy = this.fy + ofy;

		// acceleration = force / mass;
		const ax = fx / this.mass;
		const ay = fy / this.mass;

		// velocity
		this.vx = this.damping * this.vx + ax;
		this.vy = this.damping * this.vy + ay;

		// add velocity to center and top/left
		this.x += this.vx;
		this.y += this.vy;
		this.cx += this.vx;
		this.cy += this.vy;

		// reset any applied forces
		this.fx = 0;
		this.fy = 0;
	}

	applyForce(fx, fy) {
		this.fx = fx;
		this.fy = fy;
	}

	draw(ctx) {
		const { x, y, w, h, color } = this;
		ctx.fillStyle = color;

		if (TYPE === CIRCLE) {
			const _x = x - w / 2;
			const _y = y - h / 2;
			ctx.beginPath();
			ctx.arc(_x, _y, w / 2, 0, Math.PI * 2, true);
			ctx.closePath();
			ctx.fill();
		} else if (TYPE === SQUARE) {
			ctx.fillRect(x, y, w, h);
		}
	}
}

export default Canvas;
