const carousel = document.querySelector(".carousel");
let isDragging = false;
const dragStart = () => {
    let isDragging = true;
}
const dragging = (e) => {
    if(!isDragging) return;
    carousel.scrollLeft = e.pageX;
}
carousel.addEventListener("mousemove", dragging)