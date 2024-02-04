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
function startVideo(luffy) {
    var video = document.getElementById('luffy');
    video.play();
}

  // Fonction pour arrêter la vidéo lorsqu'on quitte le survol
function stopVideo(luffy) {
    var video = document.getElementById('luffy');
    video.pause();
    video.currentTime = 0;
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('myProjectsBtn').addEventListener('click', function() {
      document.getElementById('Java').classList.remove('hidden');
      document.getElementById('JavaFX').classList.remove('hidden');
      document.getElementById('Web').classList.remove('hidden');
    });
  });



function toggleSection(){
    var Java = document.getElementById('Java');
    var JavaFX = document.getElementById('JavaFX');
    var Web = document.getElementById('Web');
    Java.classList.toggle('hidden');
    JavaFX.classList.toggle('hidden');
    Web.classList.toggle('hidden');
}

