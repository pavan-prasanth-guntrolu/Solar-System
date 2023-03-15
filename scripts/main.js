document.querySelector(".description").classList.add("display");
document.querySelector(".error-parent").classList.add("display");
function noentry() {
  document.querySelector(".flex-container").classList.add("display");
}
document.querySelector(".calbtn").addEventListener("click", function () {
  document.querySelector(".description").classList.remove("display");
  const weight = document.querySelector("#mass").value;
  const planet = document.querySelector(".planet").value;
  console.log(planet);
  document.querySelector(
    ".planet-image"
  ).src = `./images/${planet.toLowerCase()}.png`;
  if (weight === "" && planet === "none") {
    noentry();
    document.querySelector(".error-child").textContent = "Mass is required";
    document.querySelector(".error-parent").classList.remove("display");
  } else if (weight && planet === "none") {
    document.querySelector(".error-child").textContent =
      "You did not choose planet yet";
    noentry();
    document.querySelector(".error-parent").classList.remove("display");
  } else {
    document.querySelector(".error-parent").classList.add("display");
    document.querySelector(".flex-container").classList.remove("display");
  }
  const weightOnMERCURY = Math.round(weight * 0.378 * 9.8);
  const weightOnVENUS = Math.round(weight * 0.907 * 9.8);
  const weightOnEARTH = Math.round(weight * 1 * 9.8);
  const weightOnMOON = Math.round(weight * 0.166 * 9.8);
  const weightOnMARS = Math.round(weight * 0.377 * 9.8);
  const weightOnJUPITER = Math.round(weight * 2.36 * 9.8);
  const weightOnSATURN = Math.round(weight * 0.916 * 9.8);
  const weightOnURANUS = Math.round(weight * 0.889 * 9.8);
  const weightOnNEPTUNE = Math.round(weight * 1.12 * 9.8);
  const weightOnPLUTO = Math.round(weight * 0.071 * 9.8);
  document.querySelector(".displayPlanet").textContent = planet;
  document.querySelector(".weight").textContent =
    eval(`weightOn${planet}`) + ".00 N";
});
