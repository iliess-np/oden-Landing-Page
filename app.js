let slideIndex = 0;
const endorsement = document.getElementsByClassName("endorsement");

showEndorsement();

function showEndorsement() {
    let i;
    for (i = 0; i < endorsement.length; i++) {
        endorsement[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > endorsement.length - 1) {
        slideIndex = 0;
    }

    endorsement[slideIndex].style.display = "flex";
    setTimeout(showEndorsement, 3000);
}



















