const cards = document.querySelectorAll(".play-card-card");

function handleCardRotate(animatecard) {
  const offsetX = animatecard.offsetX - this.offsetWidth / 4;
  const offsetY = (animatecard.offsetY - this.offsetHeight / 4) * -1;
  this.style.transform = `perspective(700px) rotatey(${offsetX / 8}deg) rotatex(${offsetY / 8}deg) scale(1.100)`;
}

function handleCardDefault() {
  this.style.transform = "";
}

cards.forEach((CardInfo) => {
  CardInfo.addEventListener("mousemove", handleCardRotate);
  CardInfo.addEventListener("mouseout", handleCardDefault);
});

var CardsQuestions = document.querySelectorAll(".questions-section-card");

CardsQuestions.forEach(function(CardsQuestions) {
  CardsQuestions.addEventListener("click", function() {
        toggleCard(CardsQuestions);
    });
});

function toggleCard(CardsQuestions) {
    var expandArrow = CardsQuestions.querySelector(".expand-arrow");

    CardsQuestions.classList.toggle("expanded");
    expandArrow.classList.toggle("expanded");
}


