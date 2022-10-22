const BackCards = [
    "bobrossparrot.gif",
    "explodyparrot.gif",
    "fiestaparrot.gif",
    "metalparrot.gif",
    "revertitparrot.gif",
    "tripletsparrot.gif",
    "unicornparrot.gif",
];

document.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        var btn = document.querySelector("#submit");
        btn.click();
        start();
    }
});

function start() {
    const section = document.querySelector('.section');

    const aux = document.querySelector('.begin');
    aux.classList.remove('begin');

    let input = document.querySelector("#value");
    let value = input.value;

    for (let i = 0; i < value; i++) {
        section.innerHTML += `
        <card onclick="TurnCard(this)">
            <div class="back">
                <img src="assets/back.png" class="back-card">
            </div>
            <div class="front none">
                <img src="assets/${BackCards[i]}" class="front-card" />
            </div>
        </card>`;
    }
}

function TurnCard(card) {
    let back = card.querySelector('.back');
    let none = card.querySelector('.none');

    if (back != none) {
        none.classList.remove('none');
        back.classList.add('none');
    }

}