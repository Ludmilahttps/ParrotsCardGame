const FrontCards = [
    "bobrossparrot.gif",
    "explodyparrot.gif",
    "fiestaparrot.gif",
    "metalparrot.gif",
    "revertitparrot.gif",
    "tripletsparrot.gif",
    "unicornparrot.gif",
];

let flipped = 0;
let back, none, value, attempts = 0;
let flippedCards = [];


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
    value = input.value;
    var cards = [];

    if (value % 2 == 0) {

        for (let j = 0; j < (value / 2); j++) {
            cards[j] = FrontCards[j];
        }

        for (let l = 0; l < (value / 2); l++) {
            cards[(value / 2) + l] = FrontCards[l];
        }

        cards = shurffle(cards);

        for (let i = 0; i < value; i++) {
            section.innerHTML += `
        <card onclick="TurnCard(this)">
            <div class="back">
                <img src="assets/back.png" class="back-card">
            </div>
            <div class="front none">
                <img src="assets/${cards[i]}" class="front-card" />
            </div>
        </card>`;
        }
    } else {
        alert("Digite um número par");
        document.location.reload(true);
    }
}

function shurffle(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
}

function TurnCard(card) {
    back = card.querySelector('.back');
    none = card.querySelector('.none');

    if (flipped == 0)//se nenhuma carta estiver virada
    {
        card.classList.toggle("turn");
        none.classList.remove('none');
        back.classList.add('none');
        flipped = 1;
        flippedCards.push(card);
    }
    else {
        card.classList.toggle("turn");
        none.classList.remove('none');
        back.classList.add('none');
        flippedCards.push(card);


        setTimeout(compair, 1500);

    }
}

function compair() {

    if (flippedCards[0].innerHTML === flippedCards[1].innerHTML) //se a imagem da primeira e a imagem da segunda forem iguais
    {
        win();
        if (attempts == value) {
            alert("You Win");
        }
    }
    else {
        lose();
    }

}

function win() {
    //alert("You win");
    flippedCards = [];
    attempts = attempts + 2;
    flipped = 0;
}

function lose() {

    //alert("You lose");

    let front = flippedCards[0].querySelector('.front');
    let none = flippedCards[0].querySelector('.none');
    flippedCards[0].classList.toggle("turn");
    none.classList.remove('none');
    front.classList.add('none');

    front = flippedCards[1].querySelector('.front');
    none = flippedCards[1].querySelector('.none');
    flippedCards[1].classList.toggle("turn");
    none.classList.remove('none');
    front.classList.add('none');

    flippedCards = [];
    flipped = 0;
}