let url = "http://www.google.com/search?q=";

const searchInput = document.querySelector(".searchInput");
const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", () => {
    if (searchInput.value != "") {
        url += searchInput.value;
        window.open(url, "_blank");
        searchInput.value = "";
        url = "http://www.google.com/search?q="
    }
})