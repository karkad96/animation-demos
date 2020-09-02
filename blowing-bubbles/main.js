window.onload = function() {
    const canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    context.globalCompositeOperation = 'destination-over';
    context.translate(width/2,height/2);
    context.scale(1, -1);

    let circles = [];

    render();

    canvas.addEventListener('click', function() {
        for(let it=0;it<100;it++)
            circles.push(new Circle(context, 0, randomInt(-width / 2, width / 2), randomInt(-height / 2, height / 2),
                '#' + Math.floor(Math.random() * 16777215).toString(16)));
    }, false);

    function render(){
        for(let it=0;it<circles.length;it++) {
            circles[it].radius+=1;
            circles[it].draw();
        }

        requestAnimationFrame(render);
    }

    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
};
