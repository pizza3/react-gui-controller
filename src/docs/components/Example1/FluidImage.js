class FluidImage {
	constructor(
		image = {
			src: false,
			file: false
		},
		size = s,
		maxS = max
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
		const max = maxS * this.size;

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

export default FluidImage;
