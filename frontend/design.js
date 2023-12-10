//Halo sur souris

const cursorHalo = document.querySelector('.cursor-halo');

document.addEventListener('mousemove', function(e) {
    cursorHalo.style.opacity = '1'; // Rend le halo visible quand le curseur bouge

    const scrollY = window.scrollY || window.pageYOffset; // Défilement vertical de la page
    cursorHalo.style.transform = `translate(${e.clientX - 25}px, ${e.clientY - 25 + scrollY}px)`; // Positionne le halo en tenant compte du défilement
});

document.addEventListener('mouseout', function() {
    cursorHalo.style.opacity = '0'; // Rend le halo invisible quand le curseur sort de la fenêtre
});


//Scroll smooth
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scroll({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// image qui descend en meme temps que le scroll
const parallax = document.getElementById('parallax');

// Événement de défilement de la fenêtre
window.addEventListener('scroll', function() {
    // Déplace l'image d'arrière-plan en fonction du défilement
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + 'px'; // Ajustez le coefficient pour la vitesse du défilement
});

//text anim vers le haut 

document.addEventListener("DOMContentLoaded", function() {
    const element = document.querySelector('.scroll-up-animation');
    element.classList.add('animate-scroll-up');
});

// anim en fade in

document.addEventListener("DOMContentLoaded", function() {
    const element = document.querySelector('#fade-in');
    if (element) {
        element.classList.add('animate-fade-in'); // Ajoute la classe pour déclencher l'animation
    }
});
