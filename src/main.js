import ComparaMove from './app/playGame/compare.js'
import User from './app/user/user.js';
import typegame from './app/typeOfGame/typeGame.html';
import typegamejs from './app/typeOfGame/typeGame.js';
import play from './app/playGame/playGame.html';
import cpMoves from './app/playGame/cpMove.js';
import PlayersMove from './app/playGame/playerMove.js'

document.getElementById('start').addEventListener('click', starGame)

document.getElementById('finish').addEventListener('click', starGame)
 
 function starGame (){
                document.getElementById('finish').classList.add('hide');
                document.getElementById('root').innerHTML = typegame;
                let kk = new typegamejs ();
                kk.game(User, cpMoves)
              
            
}
