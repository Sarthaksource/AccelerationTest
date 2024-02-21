const circle = document.getElementById('circle');
let offsetX = 0;
let offsetY = 0;
let isDeviceFlat = false;

const tiltThreshold = 15; // Adjust the threshold as needed

window.addEventListener('deviceorientation', handleOrientation);
window.addEventListener('devicemotion', handleMotion);

function handleOrientation(event) {
  const beta = event.beta; // Tilt front-to-back
  const gamma = event.gamma; // Tilt left-to-right

  // Check if the device is nearly flat
  isDeviceFlat = Math.abs(beta) < tiltThreshold && Math.abs(gamma) < tiltThreshold;

  // Reset the circle position when the device is flat
  if (isDeviceFlat) {
    offsetX = 0;
    offsetY = 0;
    circle.style.transform = 'translate(0, 0)';
  }
}

function handleMotion(event) {
  if (isDeviceFlat) {
    const accelerationX = event.accelerationIncludingGravity.x;
    const accelerationY = event.accelerationIncludingGravity.y;

    // Adjust circle position based on acceleration with higher sensitivity
    offsetX += accelerationX * 1.5;
    offsetY -= accelerationY * 1.5;

    // Limit the movement to the window bounds
    offsetX = Math.min(window.innerWidth - 50, Math.max(0, offsetX));
    offsetY = Math.min(window.innerHeight - 50, Math.max(0, offsetY));

    // Set circle position with a transform to improve performance
    circle.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  }
}
