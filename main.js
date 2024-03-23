document.addEventListener('DOMContentLoaded', function () {
    var scrollbar = document.querySelector('.scrollbar');
    var body = document.body;
    var html = document.documentElement;
    var navbarHeight = document.querySelector('.navbar').offsetHeight;

    window.addEventListener('scroll', function () {
        var scrollTop = window.scrollY;
        var documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        var windowHeight = window.innerHeight;

        // Calculate the scroll progress as a percentage
        var scrollProgress = ((scrollTop - navbarHeight) / (documentHeight - windowHeight - navbarHeight)) * 100;

        // Ensure scrollProgress is within the 0 to 100 range
        scrollProgress = Math.max(0, Math.min(scrollProgress, 100));

        // Set the width of the scrollbar based on the scroll progress
        scrollbar.style.width = scrollProgress + '%';
    });
});

function startVideo(card) {
  var video = card.querySelector('video');
  video.play();
}

function stopVideo(card) {
  var video = card.querySelector('video');
  video.pause();
  video.currentTime = 0;
}

document.querySelectorAll('.cocard').forEach(function(card) {
  card.addEventListener('mouseover', function() {
      startVideo(card);
  });

  card.addEventListener('mouseout', function() {
      stopVideo(card);
  });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('download').addEventListener('click', function() {
        var cheminCV = 'doc/MonCv.pdf';

        fetch(cheminCV)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Le fichier n\'a pas pu être téléchargé.');
                }
                return response.blob();
            })
            .then(blobCV => {
                var url = window.URL.createObjectURL(blobCV);

                var a = document.createElement('a');
                a.href = url;
                a.download = 'MonCv.pdf';

                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);

                window.URL.revokeObjectURL(url);
            })
            .catch(error => console.error('Une erreur s\'est produite lors du téléchargement du fichier.', error));
    });
});

function bringToFront(idToFront) {
    const otherElements = [
        document.getElementById('Java'),
        document.getElementById('JavaFX'),
        document.getElementById('Web')
    ];

    const elementToFront = document.getElementById(idToFront);
    if (!elementToFront) {
        console.error('L\'élément à mettre en avant n\'a pas été trouvé.');
        return;
    }

    const element = otherElements.find(e => e.style.display !== 'none');

    if (element && element.id === idToFront) {
        return;
    }

    otherElements.forEach(element => {
        element.classList.remove('animationStartedBack');
        element.classList.remove('animationStartedFront');
    });

    const elementCaches = otherElements.filter(e => e.id !== idToFront && e.id !== element.id);

    elementToFront.style.display = 'flex';
    document.getElementById(element.id).style.display = 'flex';

    elementToFront.classList.add('animationStartedFront');
    element.classList.add('animationStartedBack');

    elementCaches.forEach(e => {
        document.getElementById(e.id).style.display = 'none';
    });

    element.addEventListener('animationend', function () {
        putHidden(element.id);
    }, { once: true });
}


function putHidden(idHidden) {
    document.getElementById(idHidden).style.display = 'none';
}