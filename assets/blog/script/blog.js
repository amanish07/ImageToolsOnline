/* ===== NAV TOGGLE ===== */
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navMenu.style.display =
    navMenu.style.display === "flex" ? "none" : "flex";
});

/* ===== SHARE FLOAT MENU ===== */
const fab = document.getElementById("shareFab");
const menu = document.getElementById("shareMenu");

fab.addEventListener("click", () => {
  menu.classList.toggle("show");
});

/* auto close on scroll */
window.addEventListener("scroll", () => {
  menu.classList.remove("show");
});

const url = encodeURIComponent(location.href);
const title = encodeURIComponent(document.title);

document.getElementById("sh-whatsapp").onclick = () => {
  window.open(`https://wa.me/?text=${title}%20${url}`);
};

document.getElementById("sh-telegram").onclick = () => {
  window.open(`https://t.me/share/url?url=${url}&text=${title}`);
};

document.getElementById("sh-facebook").onclick = () => {
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
};

document.getElementById("sh-x").onclick = () => {
  window.open(`https://twitter.com/intent/tweet?text=${title}&url=${url}`);
};

document.getElementById("sh-email").onclick = () => {
  window.open(`mailto:?subject=${title}&body=${url}`);
};

document.getElementById("sh-copy").onclick = () => {
  navigator.clipboard.writeText(location.href);
  alert("Link copied");
};
