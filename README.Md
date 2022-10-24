This project is a mobile implementation of the Parrot Card Game, a themed memory game with randomness, effects, transition, responsiveness and dancing parrots!. This working with HTML, CSS and JavaScript. Try it out now at https://parrotscardgame-black.vercel.app/

# About
- Distribution of cards
    - When entering the game, the user is asked how many cards he wants to play
    - The user can only enter even numbers in the `prompt`, from 4 to 14. Any number that breaks the rule is not accepted.
    - After entering a number of valid cards, the game must enter the cards face down with the deal dealt.

- Click on the letter
    - When clicking on a card, it is turned over.
    - If it is the first card of the second, it remains until the user chooses the card.
    - If it is the second card turned over, there are 2 situations:
        - If it is equal to the first card, the user got it right and both will be up until the end of the game.
        - If it is a different card than the first card turned over, the user made a mistake. In this case, the game saves 1 second and then turns both cards face down again.

- End of the Game an `alert` is displayed with the message *"You won in X moves!"* where X is the number of times the user has turned a card in the game.

# OBS
This web site is a replica, using the tecnologies:

- HTML
- CSS
- JavaScript

By open this website is possible see all styles and features implemented by the long in your construction.

# How to run
Clone this repository
Finally access http://localhost:3000 on your favorite browser. (unless it is Internet Explorer. In this case, review your life decisions). 

You can also try it out now at https://parrotscardgame-black.vercel.app/

# Who
My name is Ludmila Silveira, I'm 19 years old and I'm a Computer Engineer student at Federal University of Santa Catarina (UFSC). I'm currently studying to be a full stack developer and this is a learning project.

# When 
@date OUT/2022
@copyright Copyright (c) 2022