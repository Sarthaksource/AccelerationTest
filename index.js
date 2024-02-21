const circle = document.getElementById('circle');
let offsetX = 0;
let offsetY = 0;

window.addEventListener('devicemotion', handleMotion);

function handleMotion(event) {
  const accelerationX = event.accelerationIncludingGravity.x;
  const accelerationY = event.accelerationIncludingGravity.y;

  // Adjust circle position based on acceleration
  offsetX += accelerationX * 0.1; // Adjust the scale factor as needed
  offsetY += accelerationY * 0.1;

  // Limit the movement to the window bounds
  offsetX = Math.min(window.innerWidth - 50, Math.max(0, offsetX));
  offsetY = Math.min(window.innerHeight - 50, Math.max(0, offsetY));

  // Set circle position with a transform to improve performance
  circle.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
}
