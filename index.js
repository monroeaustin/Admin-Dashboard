// Cards UI 

const cardsSelection = document.querySelectorAll('.card');
cardsSelection.forEach(card => {
    card.addEventListener("mouseover", function () {
        // 
        card.style.borderLeft="0.40rem solid rgba(60, 60, 60, 0.40)";
    })
});

cardsSelection.forEach(card => {
    card.addEventListener("mouseout", function () {
        // 
        card.style.borderLeft="0.40rem solid rgba(47, 128, 237, 0.40)";
    })
});