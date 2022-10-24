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
let first, second;

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
        <card onclick="TurnCard(this)" id="${cards[i]}">
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
    let back = card.querySelector('.back');
    let none = card.querySelector('.none');
    let First = '', Second = '' ;

    if (flipped === 0)//se nenhuma carta estiver virada
    {
        card.classList.toggle("turn");
        none.classList.remove('none');
        back.classList.add('none');
        flipped = 1;
        card.classList.add('first');
        First = card;
    }
    else {
        card.classList.toggle("turn");
        none.classList.remove('none');
        back.classList.add('none');
        card.classList.add('second');
        Second = card;

        if (First.innerHTML == Second.innerHTML) //se a imagem da primeira e a imagem da segunda forem iguais
        {
            win(First, Second);
        }
        else {
            lose(First, Second);
        }
    }
}

function win(first, second) {
    alert("You win");
    let front = first.querySelector('.front');
    let none = second.querySelector('.none');
}

function lose(first, second) {

    alert("You lose");

    let front = first.querySelector('.front');
    let none = first.querySelector('.none');
    first.classList.toggle("turn");
    none.classList.remove('none');
    front.classList.add('none');
    first.classList.remove('first');

    front = second.querySelector('.front');
    none = second.querySelector('.none');
    second.classList.toggle("turn");
    none.classList.remove('none');
    front.classList.add('none');
    second.classList.remove('second');

    flipped == 0;
}