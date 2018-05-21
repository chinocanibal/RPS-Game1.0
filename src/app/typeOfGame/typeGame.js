
import PlayersMove from '../playGame/playerMove.js';


export default class typeGameJs {
    constructor(){

    }
    game(User,cpMoves){
        
        return new Promise(function(resolve,reject){ 
           
           document.getElementById('pvp').addEventListener('click',()=>{
                let np = new User();
                np.addName(2);
                let name = np.check();
                
                np = new PlayersMove(name);
               resolve( np.pmove(2));
                
                
                
            });
            document.getElementById('pvc').addEventListener('click',()=>{
               

                let np = new User();
                np.addName(1);
                let name = np.check();
                np = new PlayersMove(name);
                np.pmove(1);
                


               
            });
            document.getElementById('cvc').addEventListener('click',()=>{
                let gamep = new cpMoves(),
                    move = [];

                resolve (gamep.cpmove(2, move));
                
            });
            

        })
        
    }

    
}

