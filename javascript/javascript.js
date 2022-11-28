const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click',() => {
    navbarLinks.classList.toggle('active')}
)

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }