This project is a mobile implementation of the Parrot Card Game, a themed memory game with randomness, effects, transition, responsiveness and dancing parrots!. This working with HTML, CSS and JavaScript. Try it out now at (link)

# About
- Layout
    - Only mobile layout no desktop layout;
    - Top and close order button must be fixed positioning and not scroll with scrollbar;
    - Varied price on items of the same category;
    - Font (typeface): Righteous and Roboto;
    - shadows on some elements;
    - Products must scroll horizontally, without a scroll being displayed.

- Interaction
    - When clicking on an item it must be marked as selected;
    - When clicking on an item, if there is already an item selected in the same category, the previous one will be deselected and the new item clicked will be selected;
    - When clicking on an item already marked, it is unmark.

- Return
    - The end order button must be disabled. When clicking the button in this state, nothing should happen.
    - When user selects items from 3 different categories, the button changes to enabled state

- Geral
    - [ ]  Não utilize nenhuma biblioteca para implementar este projeto (jquery, lodash, react, etc), nem outras linguagens que compilem para JS (TypeScript, ELM, etc), somente JavaScript puro
    - [ ]  Seu projeto deverá ser desenvolvido utilizando Git e GitHub, em um repositório público
    - [ ]  **A cada requisito implementado** faça um commit com uma mensagem descritiva do que você evoluiu
-
- Distribuição de cartas
    - [ ]  Ao entrar no jogo, o usuário deverá ser perguntado com quantas cartas quer jogar (utilize `prompt`)
    - [ ]  O usuário só poderá inserir números pares no `prompt`, de 4 a 14. Qualquer número que fuja a essa regra não deve ser aceito. No caso de números inválidos, o `prompt` deverá ficar sendo repetido, até que o usuário coloque um número válido.
    - [ ]  Após inserir um número de cartas válido, o jogo deverá inserir as cartas viradas pra baixo na página de forma que a distribuição seja aleatória
        
     **Dica**: para embaralhar uma array, utilize o código abaixo:
    minhaArray.sort(comparador); // Após esta linha, a minhaArray estará embaralhada


// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}

- Clique na carta
    - [ ]  Ao clicar em uma carta, a mesma deve ser virada
    - [ ]  Caso seja a primeira carta do par, ela deve permanecer virada até o usuário escolher a segunda carta
    - [ ]  Caso seja a segunda carta virada, existem 2 situações:
        - [ ]  Caso seja igual à primeira carta, o usuário acertou e ambas agora devem ficar viradas pra cima até o final do jogo
        - [ ]  Caso seja uma carta diferente da primeira carta virada, o usuário errou. Nesse caso, o jogo deve **aguardar 1 segundo** e então virar as duas cartas para baixo novamente
    - [ ]  **Dica**: se quiser fazer o efeito 3D da carta virando, você pode ver o CSS necesśario em: [https://repl.it/@BootcampRespond/FlippedCards#index.html](https://repl.it/@BootcampRespond/FlippedCards#index.html) . Só se atente que nesse exemplo a carta vira ao passar o mouse. No caso do jogo, seria ao clicar.

    - Fim do Jogo
    - [ ]  Quando o usuário terminar de virar todas as cartas corretamente, **deverá** ser exibido um `alert` com a mensagem **"Você ganhou em X jogadas!"** sendo X **a quantidade de vezes que o usuário virou uma carta no jogo**.
        
        Ou seja: **cada clique é uma jogada**. Não é virar duas cartas que é uma jogada.

# OBS
This web site is a replica, using the tecnologies:

- HTML
- CSS
- JavaScript

By open this website is possible see all styles and features implemented by the long in your construction.

# How to run
Clone this repository
Finally access http://localhost:3000 on your favorite browser. (unless it is Internet Explorer. In this case, review your life decisions). 

You can also try it out now at (link)

# Who
My name is Ludmila Silveira, I'm 19 years old and I'm a Computer Engineer student at Federal University of Santa Catarina (UFSC). I'm currently studying to be a full stack developer and this is a learning project.

# When 
@date OUT/2022
@copyright Copyright (c) 2022