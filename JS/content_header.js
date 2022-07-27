let burger = document.querySelector('.burger');
let content_header = document.querySelector('.content_header');
let header = document.querySelector('.header');
burger.onclick = function () {
    content_header.classList.toggle('content_header_block');
    header.classList.toggle('header_height');
}