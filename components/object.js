class circleThings {
    constructor(x, y, r, color) {
        this.color = color;
        this.x = x; this.y = y;
        this.r = r
    }

    spawn(ctx) {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fill()
        ctx.closePath()
    }
}