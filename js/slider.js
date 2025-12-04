const container = document.querySelector('.slider-container');
const afterImg = document.querySelector('.after');
const handle = document.querySelector('.slider-handle');


let isDragging = false;


function slide(x) {
const rect = container.getBoundingClientRect();
const position = Math.max(0, Math.min(x - rect.left, rect.width));
const percent = (position / rect.width) * 100;


afterImg.style.width = percent + '%';
handle.style.left = percent + '%';
}


handle.addEventListener('mousedown', () => (isDragging = true));
document.addEventListener('mouseup', () => (isDragging = false));
document.addEventListener('mousemove', (e) => {
if (isDragging) slide(e.clientX);
});


// Touch support
document.addEventListener('touchmove', (e) => {
slide(e.touches[0].clientX);
});


// Keyboard accessibility
handle.addEventListener('keydown', (e) => {
const rect = container.getBoundingClientRect();
let current = parseFloat(afterImg.style.width);


if (e.key === 'ArrowLeft') current -= 2;
if (e.key === 'ArrowRight') current += 2;


current = Math.max(0, Math.min(current, 100));


afterImg.style.width = current + '%';
handle.style.left = current + '%';
});