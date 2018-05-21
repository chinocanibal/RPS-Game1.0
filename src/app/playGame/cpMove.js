import CompareMove from './compare.js'
export default class cpMoves {

    constructor(score){
        this.score = score;
    }

    cpmove(ncp, move, player1){ //ncp number of computer
        
        
           
        for (let i = 0; i < ncp ; i++){
            let number = Math.random();
            if (number <= 0.3 ){
                
                move.push('Rock'); 
                
            } else if (number <= 0.6 ){
                
                move.push( 'Paper');
            } else {
                
                move.push('Scissors');
            }
        }
        if (ncp == 2){
            var player1 = ' CpU 1';
        }
        let cpgame = new CompareMove(),
            
            player2 = ' CpU 2';
        cpgame.coMo(move, player1, player2);
        
        
    }

    
}