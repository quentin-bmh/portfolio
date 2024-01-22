document.addEventListener('scroll', function () {
    // Calculer le pourcentage de défilement par rapport à la hauteur totale de la page
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    // Mettre à jour la largeur de la barre de défilement en fonction du pourcentage de défilement
    document.querySelector('.scrollbar').style.width = scrollPercentage + '%';
});