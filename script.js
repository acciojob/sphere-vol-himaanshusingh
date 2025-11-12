function volume_sphere() {
  event.preventDefault();
  const radiusInput = document.getElementById("radius");
  const volumeOutput = document.getElementById("volume");
  const radius = Number(radiusInput.value);
  if (isNaN(radius) || radius < 0) volumeOutput.value = "NaN";
  else volumeOutput.value = ((4 / 3) * Math.PI * radius ** 3).toFixed(4);
}
const form = document.getElementById("MyForm");
form.addEventListener("submit", () => volume_sphere());
