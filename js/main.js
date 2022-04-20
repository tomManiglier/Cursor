const cursor = document.querySelector('.cursor');
var posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0;

setInterval(function() {
    posX += (mouseX - posX) / 12;
    posY += (mouseY - posY) / 12;
    cursor.style.top = posY + 'px';
    cursor.style.left = posX + 'px';
}, 0.016);

document.addEventListener('mousemove', (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
});