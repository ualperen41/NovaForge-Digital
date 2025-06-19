const menuBtn = document.querySelector("#menu-btn i");
const navLinks = document.querySelector("#nav-links");


menuBtn.addEventListener("click", (e) => {
    // NavLinks'e open classı ekle-çıkar
    navLinks.classList.toggle("open");

    // Eğer open classı eklendiyse closeBtn'e çevir
    const isOpen = navLinks.classList.contains("open");

    // MenuBtn içerğini belirle
    menuBtn.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
})