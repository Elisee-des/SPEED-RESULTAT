let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; // Pour Chrome, Firefox, IE et Opera
}

// Gestion de la modal
var modal = document.getElementById("id01");

//Fermer la modal apres le clik de l'utilisateur
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
