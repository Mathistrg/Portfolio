const cursorHalo = document.querySelector('.cursor-halo');

document.addEventListener('mousemove', (e) => {
    cursorHalo.style.left = `${e.clientX}px`;
    cursorHalo.style.top = `${e.clientY}px`;
});