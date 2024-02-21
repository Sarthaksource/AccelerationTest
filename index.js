const circle = document.getElementById('circle');
window.addEventListener('devicemotion', handleMotion);

function handleMotion(event) {
    const accelerationX = event.accelerationIncludingGravity.x;
    const accelerationY = event.accelerationIncludingGravity.y;

    const x = accelerationX * 100; // Scale factor for movement
    const y = accelerationY * 5;
    circle.style.left = `${window.innerWidth / 2 + x}px`;
    circle.style.top = `${window.innerHeight / 2 + y}px`;
}
