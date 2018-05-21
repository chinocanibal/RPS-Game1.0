import win from './win.html'
export default class CompareMove{

    constructor(){

    }

    coMo(move, player1,player2){
        let finish = function(){
            let ll = document.getElementById ('finish');
            ll.classList.remove('hide');
            ll.classList.add('show');
            
            },
            winPlace;

        document.getElementById('root').innerHTML = win;
        winPlace = document.getElementById('winSpan');

        if (move[0] == move[1]){
             
            winPlace.innerHTML = `It's  Draw!!!!`;
           finish();
            
        } else{
        switch (move[0]){
            case "Rock" :
                if (move[1] == 'Paper'){
                    winPlace.innerHTML = `${player2} win with a Paper`;
                } else {
                    winPlace.innerHTML = `${player1} win with a Rock`;
                }
            break;

            case "Paper" :
                if (move[1] == 'Rock'){
                    winPlace.innerHTML = `${player1} win with a Paper`;
                } else {
                    winPlace.innerHTML = `${player2} win with a Scissors`;
                }
            break;

            case "Scissors" :
                if (move[1] == 'Rock'){
                    winPlace.innerHTML = `${player2} win with a Rock`;
                } else {
                    winPlace.innerHTML = `${player1} win with a Scissors`;
                }
            break;
        }
        
        finish();
    }
        


      

        
    }
}