canva = document.getElementById('canvas')
ctx = canva.getContext('2d');

canva.width = window.innerWidth - 30
canva.height = window.innerHeight - 130


create = function() {
    function random_rgba() {
        var o = Math.round, r = Math.random, s = 255;
        return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    }
    var color = random_rgba();
    
    ctx.fillStyle = color;
    
    ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height,Math.random() * canvas.width, Math.random() * canvas.height)
}