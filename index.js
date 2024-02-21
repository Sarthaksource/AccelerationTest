const cursor = document.getElementById('cursor');
let isDeviceFlat = false;

window.addEventListener('deviceorientation', handleOrientation);
window.addEventListener('devicemotion', handleMotion);

function handleOrientation(event) {
  const beta = event.beta; // Tilt front-to-back
  const gamma = event.gamma; // Tilt left-to-right

  // Check if the device is nearly flat
  isDeviceFlat = Math.abs(beta) < 15 && Math.abs(gamma) < 15;
}

function handleMotion(event) {
  if (isDeviceFlat) {
    const accelerationX = event.accelerationIncludingGravity.x;
    const accelerationY = event.accelerationIncludingGravity.y;

    // Simulate mouse movement based on acceleration
    const sensitivity = 1.5; // Adjust sensitivity as needed
    const offsetX = accelerationX * sensitivity;
    const offsetY = accelerationY * sensitivity;

    // Update the cursor position
    cursor.style.left = `${cursor.offsetLeft + offsetX}px`;
    cursor.style.top = `${cursor.offsetTop - offsetY}px`;
  }
}
