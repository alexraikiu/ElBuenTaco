const btnVerMenu = document.getElementById("btn-ver-menu");
const itemsExtra = document.querySelectorAll(".item-extra");

btnVerMenu.addEventListener("click", () => {
    itemsExtra.forEach(item => {
        item.style.display = item.style.display === "flex" ? "none" : "flex";
    });

    btnVerMenu.textContent = btnVerMenu.textContent === "VER MÁS" ? "VER MENOS" : "VER MÁS";
});