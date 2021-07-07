window.onload = function() {
    const canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    context.globalCompositeOperation = 'destination-over';
    context.translate(width/2,height/2);
    context.scale(1, -1);

    render();

    function Square(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    function drawLine(from, to) {
        context.beginPath();
        context.moveTo(from[0], from[1]);
        context.lineTo(to[0], to[1]);
        context.stroke();
    }

    function render() {
        let squares = [new Square([0.0, 0.0], [100.0, 0.0], 1.0)];
        drawLine([0.0, 0.0], [100.0, 0.0]);
        for(let i = 1; i <= 17; i++) {
            let tmp = [];
            for (const j of squares) {
                let a = j.x, b = j.y, s = j.z;
                let w = [b[0] - a[0], b[1] - a[1]];
                let v = [-w[1], w[0]];
                let c = [a[0] + v[0], a[1] + v[1]];
                let d = [b[0] + v[0], b[1] + v[1]];
                let tw = [0.8 * w[0] - 0.6 * w[1], 0.6 * w[0] + 0.8 * w[1]];
                let e = [c[0] + 0.8 * tw[0], c[1] + 0.8 * tw[1]];

                drawLine(c, e);
                drawLine(e, d);
                
                tmp.push(new Square(c, e, s * 0.8));
                tmp.push(new Square(e, d, s * 0.6));
            }
            squares = tmp;
        }
    }

};
