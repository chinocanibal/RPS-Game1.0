


export default class User {
   constructor (name, score){
        this.name = name,
        this.score = score
          
   }

   addName(np) {
        let nam = [],
            _this = this; 
        return new Promise(function(resolve,reject){
            for (let i = 1; i < np +1; i++){
                nam.push( prompt ( `Name of player ${i}`));
                
            }
            if (nam){
                resolve(_this.name =nam)
            } else{
                reject(()=>{ alert('Something is worng')})
            }
            
        })
        
   }
   
   addScore() {
       this.score = this.score + roundScore;
   }

  check(){
      
      var players;
      return players = this.name;
  }
}