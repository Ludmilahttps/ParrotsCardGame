const FrontCards = [
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

    if (value % 2 == 0) {

        for (let i = 0; i < value; i++) {
            section.innerHTML += `
        <card onclick="TurnCard(this)">
            <div class="back">
                <img src="assets/back.png" class="back-card">
            </div>
            <div class="front none">
                <img src="assets/${FrontCards[i]}" class="front-card" />
            </div>
        </card>`;
        }
    } else {
        alert("Digite um número par");
        document.location.reload(true);
    }
}

function shurffle() {
    cards.forEach(card => {
        let ramdomPos = Math.floor(Math.random() * 12);
        card.style.order = ramdomPos;
    });
}

function TurnCard(card) {
    let back = card.querySelector('.back');
    let none = card.querySelector('.none');

    if (back != none) {
        none.classList.remove('none');
        back.classList.add('none');
    }

}