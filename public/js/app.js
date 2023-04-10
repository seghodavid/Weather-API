const search = document.querySelector(".search");
const search_second = document.querySelector(".location_img");
const search_third = document.querySelector(".location");
const container = document.querySelector(".container")
const pop_up = document.querySelector(".pop-up")
const close = document.querySelector(".close")
const dtae = document.querySelector(".date_first");


search.addEventListener('click', function () {
    container.classList.add("click")
    pop_up.classList.add("help")
});

search_second.addEventListener('click', function () {
    container.classList.add("click")
    pop_up.classList.add("help")
});

search_third.addEventListener('click', function () {
    container.classList.add("click")
    pop_up.classList.add("help")
});

close.addEventListener('click', function () {
    container.classList.remove("click")
    pop_up.classList.remove("help")
});

const din = new Date();