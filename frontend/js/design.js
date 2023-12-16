//chargement vid
  window.addEventListener('load', function() {
    setTimeout(function() {
      document.getElementById('overlay').style.display = 'none';
      //document.getElementById('content').style.display = 'block';
    }, 600); // Affiche l'overlay pendant 2 secondes (2000 millisecondes)
  });


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

// Récupérer l'élément #monTitre
var monTitre = document.getElementById('monTitre');

// Écouter l'événement scroll de la fenêtre
window.addEventListener('scroll', function() {
    // Calculer la nouvelle taille de police en fonction du défilement
    var scrolled = window.scrollY;
    var newX = 0 - scrolled / 40;
    var newSize = 100 - scrolled / 10; // Vous pouvez ajuster le facteur de déplacement ici

    // Limiter la taille minimale du texte pour éviter qu'il ne devienne trop petit
    newSize = Math.max(newSize, 20); // Taille minimale de 20px (ajustez selon vos besoins)

    // Appliquer la nouvelle taille de police au titre
    monTitre.style.left = newX + 'vw'; // Déplacement horizontal en pourcentage de la largeur de la vue
    monTitre.style.fontSize = newSize + 'px';
});

// Événement de défilement de la fenêtre
// Déplace l'image d'arrière-plan en fonction du défilement
//window.addEventListener('scroll', function() {
//    let offset = window.pageYOffset;
//    parallax.style.backgroundPositionY = offset * 0.7 + 'px'; // Ajustez le coefficient pour la vitesse du défilement
//});

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


// element qui bouge 1
let initialLeft = 0; // Position de départ du texte
let lastScrollTop = 0; // Dernière position de défilement

const maxRightLimit = 250; // Limite droite maximale pour le déplacement du texte

window.addEventListener('scroll', function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  let element = document.getElementById('moving-text');

  // Facteur de déplacement basé sur la quantité de défilement
  let scrollFactor = 0.20 + (currentScroll * 0.0005);

  // Nouvelle position horizontale progressive
  let newPosition = initialLeft + (currentScroll * scrollFactor);

  // Vérifie si la nouvelle position dépasse la limite droite
  if (newPosition <= maxRightLimit) {
    element.style.left = newPosition + 'px';
  } else {
    element.style.left = maxRightLimit + 'px'; // Fixe la position maximale
  }

  let hr = document.querySelector('hr');
  hr.style.width = `${120 + currentScroll}px`;

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Fonction pour vérifier si l'élément est visible à l'écran
function elementVisible(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Fonction pour afficher le logo MT avec une transition
function afficherLogoMT() {
    var titre = document.getElementById('monTitre');
    var logoMT = document.getElementById('logoMT');
  
    // Vérifie si le titre n'est pas visible
    if (!elementVisible(titre)) {
      // Affiche le logo MT avec une transition
      logoMT.style.opacity = '1';
      logoMT.style.height = 'auto';
      logoMT.style.pointerEvents = 'auto'; // Active les événements souris lorsque l'élément est visible
    } else {
      // Si le titre est visible, masque le logo MT avec une transition
      logoMT.style.opacity = '0';
      logoMT.style.height = '0';
      logoMT.style.pointerEvents = 'none'; // Désactive les événements souris lorsque l'élément est invisible
    }
  }

// Vérifie si le scroll de la page change et appelle la fonction pour afficher le logo MT
window.addEventListener('scroll', function() {
    afficherLogoMT();
});

// Vérifie dès le chargement de la page
//window.addEventListener('load', function() {
//    afficherLogoMT();
//});



// Fonction pour animer l'apparition des éléments lors du scroll
function apparitionElements() {
    var elements = document.querySelectorAll('#maListe li');
  
    elements.forEach(function(element, index) {
      var bounding = element.getBoundingClientRect();
      var offset = window.innerHeight / 1.5; // Ajustez la position de déclenchement
  
      // Vérifie si l'élément est dans la fenêtre visible
      if (bounding.top < offset) {
        element.style.opacity = '1';
        element.style.transform = 'translateX(0)';
      }
    });
  }
  
  // Écouteur d'événement pour détecter le scroll
  window.addEventListener('scroll', apparitionElements);
  
  // Appeler la fonction une fois au chargement initial pour gérer les éléments visibles au chargement de la page
  apparitionElements();

// Obtenez la date actuelle
const currentDate = new Date();

// Mois de référence pour le changement d'année (septembre est le 9e mois)
const referenceMonth = 8; // (les mois commencent à partir de 0, donc septembre est le mois 8)

// Date d'anniversaire (remplacez par votre date d'anniversaire)
let birthday = new Date('2004-06-24'); // Modifiez cette date pour correspondre à votre date de naissance

// Vérification pour déterminer si l'anniversaire est déjà passé cette année

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
    const birthDate = new Date(birth);
    const currentDate = new Date(current);
  
    let age = currentDate.getFullYear() - birthDate.getFullYear();
  
    const currentMonth = currentDate.getMonth();
    const birthMonth = birthDate.getMonth();
    if (
        (currentDate.getMonth() >= referenceMonth && currentDate.getDate() >= birthday.getDate()) ||
        (currentDate.getMonth() > referenceMonth)
    ) {
        birthday.setFullYear(birthday.getFullYear() + 1); // Anniversaire pour l'année suivante
    }
    // Si le mois actuel est inférieur au mois de naissance
    // ou si les mois sont les mêmes mais le jour actuel est antérieur au jour de naissance
    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate.getDate() < birthDate.getDate())) {
      age--;
    }
  
    // Vérification si l'âge est négatif ou égal à 0
    if (age <= 0) {
      age = 0;
    }
  
    return age;
  }
    // Calculer l'âge et l'afficher
    const age = calculateAge(birthday, currentDate);
    document.getElementById('age').textContent = `J'ai ${age} ans`;

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

    
}

// Déterminer l'année scolaire initiale au chargement de la page
determineYear();

// Mettre à jour le compteur chaque seconde
setInterval(countdown, 10);

// Appeler la fonction une fois pour éviter un délai initial
countdown();


//nav var smooth 
// Sélectionnez votre liste de navigation
const maNavBar = document.getElementById('sticky-nav');

// Sélectionnez les éléments de votre barre de navigation
const elementsNav = document.querySelectorAll('.sticky-nav'); // Remplacez 'votreClasse' par la classe de vos éléments de navigation

// Fonction pour changer l'ordre des éléments
function changerOrdreElements() {
  // Changer l'ordre des éléments comme vous le souhaitez
  maNavBar.insertBefore(elementsNav[2], elementsNav[0]); // Exemple : échange le troisième élément avec le premier
}



// description anim
// Fonction pour vérifier si un élément est visible à l'écran
let prevY = window.pageYOffset || document.documentElement.scrollTop;

// Fonction pour animer l'apparition des éléments
function fadeInOnScroll() {
  const elements = document.querySelectorAll('.scroll-fade');
  const currentY = window.pageYOffset || document.documentElement.scrollTop;

  elements.forEach((element, index) => {
    const isVisible = element.getBoundingClientRect().top < window.innerHeight * 0.65; // Ajustement pour la disparition plus tôt

    if (isVisible) {
      const scrollDiff = currentY - prevY;
      const delay = index * 100; // Délai progressif pour chaque élément

      setTimeout(() => {
        element.classList.add('visible');
      }, Math.max(0, scrollDiff * 50)); // Ajustement de la vitesse de disparition

      prevY = currentY;
    } else {
      element.classList.remove('visible');
    }
  });
}

// Écouteur d'événement pour détecter le scroll et déclencher l'apparition des éléments
window.addEventListener('scroll', fadeInOnScroll);

// Appel initial pour vérifier les éléments déjà visibles au chargement de la page
window.addEventListener('load', fadeInOnScroll);


//texte caché 
function displayText() {
  const button = document.querySelector('.competences .glowing-btn');
  const hiddenText = document.getElementById('hiddenText');
  const container = document.querySelector('.competences');

  button.classList.add('clicked'); // Ajouter la classe pour déclencher le zoom
  setTimeout(function() {
    button.style.display = 'none';
    hiddenText.style.display = 'block';
    container.classList.add('clicked'); // Ajouter la classe pour changer la couleur de fond
  }, 500); // Attendre la fin de l'animation avant de masquer le bouton et afficher le texte
  container.addEventListener('mouseleave', function() {
    button.style.display = 'block';
    hiddenText.style.display = 'none';
    container.classList.remove('clicked'); // Retirer la classe lorsque la souris quitte le conteneur
    button.classList.remove('clicked'); // Retirer la classe pour réinitialiser le bouton
  });
}

//projet title
const textElement = document.querySelector('.title-projet');
const texts = ['Texte 1', 'Texte 2', 'Texte 3']; // Liste de textes à afficher

let index = 0;

function changeText() {
  textElement.setAttribute('data-text', texts[index]);
  index = (index + 1) % texts.length;
}

setInterval(changeText, 2500); // Change le texte toutes les 3 secondes




// 



