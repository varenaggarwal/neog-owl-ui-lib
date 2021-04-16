// scroll offset
const shiftWindow = function () {
  scrollBy({
    top: -80,
    left: 0,
    behavior: "smooth",
  });
};
window.addEventListener("hashchange", shiftWindow);
function load() {
  if (window.location.hash) shiftWindow();
}

// close navigationModal

const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const navItems = document.querySelectorAll(".nav-item");

const closeModal = () => {
  modal.style.display = "none";
};

btn.onclick = () => {
  modal.style.display = "block";
};

navItems.forEach((navItem) => {
  navItem.onclick = closeModal;
});

window.onclick = (event) => {
  if (event.target == modal) {
    closeModal();
  }
};
