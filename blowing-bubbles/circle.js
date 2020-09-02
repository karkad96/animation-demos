class Circle {

    constructor(context, radius, offX= 0, offY= 0, color = 'black') {
        this.offX = offX;
        this.offY = offY;
        this.radius = radius;
        this.ctx = context;
        this.color = color;
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.offX, this.offY, this.radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.strokeStyle = this.color;
        this.ctx.stroke();
    }
}
