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
const parallax = document.getElementById('#parallax');

// Événement de défilement de la fenêtre
window.addEventListener('scroll', function() {
    // Déplace l'image d'arrière-plan en fonction du défilement
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.7 + 'px'; // Ajustez le coefficient pour la vitesse du défilement
});

//text anim vers le haut 

document.addEventListener("DOMContentLoaded", function() {
    const element = document.querySelector('.scroll-up-animation');
    //element.classList.add('animate-scroll-up');
});

// anim en fade in

document.addEventListener("DOMContentLoaded", function() {
    const element = document.querySelector('#fade-in');
    if (element) {
        element.classList.add('animate-fade-in'); // Ajoute la classe pour déclencher l'animation
    }
});


//chargement vid
  window.addEventListener('load', function() {
    setTimeout(function() {
      document.getElementById('overlay').style.display = 'none';
      //document.getElementById('content').style.display = 'block';
    }, 600); // Affiche l'overlay pendant 2 secondes (2000 millisecondes)
  });


// element qui bouge 1

const element = document.querySelector('#moving-text');
let initialLeft = 50; // Position horizontale initiale
let movementSpeedText = 6; // Vitesse de déplacement du texte
let movementSpeedLine = 3; // Vitesse de déplacement de la ligne
let lastScrollTop = 0; // Variable pour stocker la dernière position de défilement

window.addEventListener('scroll', function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  // Changer les valeurs ici pour ajuster l'ampleur du déplacement
  let scrollFactor = 0.3; // Facteur de déplacement, plus la valeur est élevée, plus le déplacement est important
  let newPosition = initialLeft + (currentScroll * scrollFactor);

  element.style.left = newPosition + 'px'; // Applique la nouvelle position horizontale
  let hr = document.querySelector('hr');
  hr.style.width = `${120 + currentScroll}px`; // Largeur de la ligne + distance du scroll

  // Mouvement du texte en fonction de la différence de défilement
  let scrollDifference = currentScroll - lastScrollTop;
  let newLeft = initialLeft + scrollDifference * movementSpeed;
  element.style.left = newLeft + 'px';

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Mise à jour de la valeur de défilement
});




// Obtenez la date actuelle
const currentDate = new Date();

// Mois de référence pour le changement d'année (septembre est le 9e mois)
const referenceMonth = 8; // (les mois commencent à partir de 0, donc septembre est le mois 8)

// Date d'anniversaire (remplacez par votre date d'anniversaire)
let birthday = new Date('2004-06-24'); // Modifiez cette date pour correspondre à votre date de naissance

// Vérification pour déterminer si l'anniversaire est déjà passé cette année
if (
    (currentDate.getMonth() >= referenceMonth && currentDate.getDate() >= birthday.getDate()) ||
    (currentDate.getMonth() > referenceMonth)
) {
    birthday.setFullYear(birthday.getFullYear() + 1); // Anniversaire pour l'année suivante
}

function determineYear() {
    // Vérifiez si nous sommes avant ou après le mois de référence (septembre)
    if (currentDate.getMonth() < referenceMonth) {
        // Avant septembre, c'est toujours la première année scolaire
        document.getElementById('yearNumber').textContent = '1ère';
    } else {
        // Après septembre, nous entrons dans la deuxième année scolaire
        const referenceYear = 2023; // Remplacez 2023 par votre année de référence
        const yearNumber = currentDate.getFullYear() - referenceYear + 2;
        document.getElementById('yearNumber').textContent = `${yearNumber}e`;
    }
}

function calculateAge(birth, current) {
  const birthYear = birth.getFullYear();
  const currentYear = current.getFullYear();

  let age = currentYear - birthYear;

  const birthMonth = birth.getMonth();
  const currentMonth = current.getMonth();

  // Vérification si l'anniversaire n'est pas encore passé cette année
  if (currentMonth < birthMonth || (currentMonth === birthMonth && current.getDate() < birth.getDate())) {
      age--;
  }

  return age;
}

function countdown() {
    const now = new Date().getTime();
    const difference = birthday.getTime() - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    document.getElementById('countdown').innerHTML = `
    🎂${days} jours 🎂
    `;

    if (difference < 0) {
        document.getElementById('countdown').innerHTML = '<div class="overlay" id="overlay"><div class="loader"></div></div>';
        birthday.setFullYear(birthday.getFullYear() + 1); // Anniversaire pour l'année suivante

        // Vérifier si la date d'anniversaire de l'année prochaine est après aujourd'hui
        if (birthday <= currentDate) {
            birthday.setFullYear(birthday.getFullYear() + 1);
        }
        // Réévaluer l'année scolaire après l'anniversaire
        determineYear();
    }
       // Calculer l'âge et l'afficher
       const age = calculateAge(birthday, currentDate);
       document.getElementById('age').textContent = `Âge : ${age} ans`;
    
}

// Déterminer l'année scolaire initiale au chargement de la page
determineYear();

// Mettre à jour le compteur chaque seconde
setInterval(countdown, 1000);

// Appeler la fonction une fois pour éviter un délai initial
countdown();