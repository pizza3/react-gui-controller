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

export default FluidPixel;
