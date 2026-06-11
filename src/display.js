//Created by Judds Wells 6/10/26

export class Display {
    constructor(ctx) {
        this.ctx = ctx;
    }

    renderPixel(x, y, iterations) {
        const color = this.colorize(iterations);
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, 1, 1);
    }

    colorize(index) {
    switch (index % 6) {
        case 0:
            return "#ff4d4d"; // red
        case 1:
            return "#ffcc00"; // yellow
        case 2:
            return "#66ff66"; // green
        case 3:
            return "#66ccff"; // blue
        case 4:
            return "#cc66ff"; // purple
        case 5:
            return "#ff66cc"; // pink
    }
}
}