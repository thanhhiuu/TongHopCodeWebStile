// Add dropdown menu to header on small screens
const header = document.querySelector("#header");
const menuBtn = document.createElement("button");
menuBtn.innerHTML = "Menu";
header.appendChild(menuBtn);

let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    header.querySelector("nav").style.display = "block";
    menuOpen = true;
  } else {
    header.querySelector("nav").style.display = "none";
    menuOpen = false;
  }
});

// Close menu when clicking a menu item
header.querySelector("nav").addEventListener("click", () => {
  header.querySelector("nav").style.display = "none";
  menuOpen = false;
});
