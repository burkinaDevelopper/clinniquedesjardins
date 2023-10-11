var chambres = document.getElementsByClassName("chambre");

for (var i = 0; i < chambres.length; i++) {
  chambres[i].addEventListener("click", function () {
    alert("Vous avez cliqué sur " + this.querySelector("h2").textContent);
  });
}
