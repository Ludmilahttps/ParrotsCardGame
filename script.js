document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
        var btn = document.querySelector("#submit");
        btn.click();
        start();
    } 
  });

function start()
{
    const aux = document.querySelector('.begin');
    aux.classList.remove('begin');

    let input = document.querySelector("#value");
    let value = input.value;

    for(let i=0; i<=value; i++)
    {
        Selection.inerHTML = Selection.inerHTML + `
        <card>
            <img src="assets/back.png" onclick="TurnCard()" class="back">
        </card>`;
    }
}

function TurnCard()
{
    const aux = document.querySelector('.back');
    aux.classList.remove('begin');
}