window.onload = function() {
    const canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    context.globalCompositeOperation = 'destination-over';
    context.translate(width/2,height/2);
    context.scale(1, -1);
    
    render();
    
    function Square(a, b, s) {
    	this.a = a;
    	this.b = b;
    	this.s = s;
    }
    
    function render() {
    	let squares = [new Square([0.0, 0.0], [1.0, 0.0], 1.0)];
    	
    	for (const element of squares) {
    	console.log(element);
	}
    }

};
