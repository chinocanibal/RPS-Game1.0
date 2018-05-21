import play from './playGame.html';
import play2 from './player2.html'
import CompareMove from './compare.js';
import User from '../user/user.js';
import cpMoves from './cpMove.js';


export default class PlayersMove extends User {

    constructor(name){
        super(name);

    }

    pmove(moves){
        let playerGame = new CompareMove(),
                        player1 = this.name[0],
                        player2 = this.name[1];
        document.getElementById('root').innerHTML = play;
        document.getElementById('player_move').innerHTML = `Choose you move ${player1} `
        let move = [],
            next = 0;
            
            let pario = function(player){               
                document.getElementById('rock').addEventListener('click',()=>{
                    move.push('Rock');
                    next = next + 1;
                    cc(next)
                })
                document.getElementById('paper').addEventListener('click',()=>{
                    move.push('Paper');
                    next = next + 1;
                    cc(next)
                })
                document.getElementById('scissors').addEventListener('click',()=>{
                    move.push('Scissors');
                    next = next + 1;
                    cc(next)
                })
            
            }
            
            let cc = function (n){
              
                if (n == 1 && moves == 1){
                    let cpm = new cpMoves ();
                    cpm.cpmove(1, move, player1);
                    
                } else {
                    document.getElementById('root').innerHTML = play2;
                   let re = document.getElementById('continue')
                   re.innerHTML = `Click when you are ready ${player2}`;
                    re.addEventListener('click', ()=>{
                        document.getElementById('root').innerHTML = play;
                        document.getElementById('player_move').innerHTML = `Choose you move ${player2} `
                        pario()
                    });
                }
                
                if(n == 2){

                    playerGame.coMo(move , player1, player2);
                }
            }
       pario()
    
    }
}