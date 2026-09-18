const menuButton = document.querySelector("#menuButton");
const sidebar = document.querySelector("#sidebar");
const overlay = document.querySelector("#overlay");
const profileButton = document.querySelector("#profileButton");
const profileMenu = document.querySelector("#profileMenu");

menuButton.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("open");
  overlay.classList.remove("show");
});

profileButton.addEventListener("click", () => {
  const isOpen = profileMenu.classList.toggle("show");
  profileButton.setAttribute("aria-expanded", isOpen);
});

document.addEventListener("click", (event) => {
  if (
    !profileButton.contains(event.target) &&
    !profileMenu.contains(event.target)
  ) {
    profileMenu.classList.remove("show");
    profileButton.setAttribute("aria-expanded", "false");
  }
});
