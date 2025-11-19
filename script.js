function clickAbout() {
    window.open("https://volweb2.utk.edu/~evo3/emilyvo/aboutme", "_blank");
}

function clickResume() {
    window.open("https://volweb2.utk.edu/~evo3/emilyvo/resume", "_blank");
}

function clickPort() {
    window.open("https://volweb2.utk.edu/~evo3/emilyvo/portfolio", "_blank");
}

function clickEmail() {
    window.open("https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKhbwdzGQLrxWtnRZqKDFQQRjflrvJfwcRRvwDFWLRlMbsJjNsgBrbwVhGvbZnpRMBXXZsw", "_blank");
}

function clickLinked() {
    window.open("https://www.linkedin.com/in/emily-vo-52b7a2249/", "_blank");
}

function clickGithub() {
    window.open("https://github.com/emilyvo3", "_blank");
}

function clickInsta() {
    window.open("https://www.instagram.com/emilyhuhh/", "_blank");
}

const backgroundVideo = document.getElementById('backgroundVideo');
const soundButton = document.getElementById('sound-button');

soundButton.addEventListener('click', function() {
    if (backgroundVideo.muted) {
        backgroundVideo.muted = false; // Unmute
        soundButton.src = 'assets/img/unmute.png'; // Change to unmute image
    } else {
        backgroundVideo.muted = true; // Mute
        soundButton.src = 'assets/img/mute.png'; // Change to mute image
    }
});
