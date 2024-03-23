document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btns = document.querySelectorAll(".cocard");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var videoSrc = btn.querySelector('video').src;
            var videoPlayer = document.createElement('video');
            videoPlayer.src = videoSrc;
            videoPlayer.controls = true;
            videoPlayer.autoplay = true;
            videoPlayer.loop = true;
            videoPlayer.playsinline = true;

            // Clear the modal content
            modal.querySelector('.modal-content').innerHTML = '';

            // Append the video player to the modal content
            modal.querySelector('.modal-content').appendChild(videoPlayer);

            modal.style.display = "block";
        });
    });

    // When the user clicks on <span> (x) or press "Escape", close the modal
    function closeModal() {
        modal.style.display = "none";
    }

    span.onclick = closeModal;
    window.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            closeModal();
        }
    });

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    };
});

function cutVideo(){
    var videoCut = document.getElementById('Dactylearn');
    videoCut.currentTime = 50; 
}

function startVideo(card) {
    var video = card.querySelector('video');
    cutVideo();
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
