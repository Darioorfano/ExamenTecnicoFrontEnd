document
  .getElementById("boton-Reproducir")
  .addEventListener("click", function () {
    var modal = document.querySelector("#modal");
    var overlay = document.querySelector("#overlay");
    overlay.style.display = "inline-block";
    modal.style.display = "inline-block";
  });
document.querySelector("#cerrar").addEventListener("click", function () {
  var modal = document.querySelector("#modal");
  var overlay = document.querySelector("#overlay");
  overlay.style.display = "none";
  modal.style.display = "none";
});
