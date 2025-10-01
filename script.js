function volume_sphere() {
  event.preventDefault();
  const radiusInput = document.getElementById("radius");
  const volumeOutput = document.getElementById("volume");
  const radius = parseFloat(radiusInput.value);
  if (isNaN(radius) || radius < 0) volumeOutput.value = "NaN";
  else {
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volumeOutput.value = volume.toFixed(4);
  }
}
window.onload = document.getElementById("MyForm").onsubmit = volume_sphere;
