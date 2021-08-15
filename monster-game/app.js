function getRandomValue(min, max){
    return Math.floor(Math.random() * (max-min)) + min;
}



var app = new Vue({
    el: '#game',
    data() {
        return{
            playerHealth:100,
            monsterHealth:100,
            currentRound:0,
            winner: null,
            logMessages:[],
        };
    },
    computed:{
        monsterBarStyles(){
            if(this.monsterHealth < 0){
                return{ width: '0%' };  
            }
            return{ width: this.monsterHealth + '%' };
        },
        playerBarStyles(){
            if(this.playerHealth < 0){
                return{ width: '0%' };  
            }
            return{ width: this.playerHealth + '%' };
        },
        mayUseSpecialAttack(){
            return this.currentRound % 3 !== 0;
        },
    },
    watch:{
        playerHealth(value){
            if(value <= 0 && this.monsterHealth <= 0){
                //remiza
                this.winner= 'draw';
            }
            else if(value <= 0 ){
                //player lost
                this.winner= 'monster';
            }
        },
        monsterHealth(value){
            if(value <= 0 && this.playerHealth <= 0){
                //remiza
                this.winner= 'draw';
            }
            else if(value <= 0 ){
                //monster lost
                this.winner= 'player';
            }
        }
    },
    methods: {
        attackMonster(){
         //takto dostaneme nejake nahodne číslo medzi 12-5
         this.currentRound++;
          const attackValue =  getRandomValue(5, 12);
          this.monsterHealth -= attackValue;
          this.addLogMessages('player', 'attack', attackValue);
          this.attackPlayer();
        },
        attackPlayer(){
            //takto dostaneme nejake nahodne číslo medzi 12-5
             const attackValue = getRandomValue(8, 15);
             this.playerHealth -= attackValue;
             this.addLogMessages('monster', 'attack', attackValue);
           },
        specialAttackMonster(){
            this.currentRound++;
            const attackValue =  getRandomValue(10, 25);
            this.monsterHealth -= attackValue;
            this.addLogMessages('player', 'special-attack', attackValue);
            this.attackPlayer();
        },
        healPlayer(){
            this.currentRound++;
            const healthValue =  getRandomValue(8, 20);
            if(this.playerHealth + healthValue > 100){
               this.playerHealth = 100;
            }
            else{
                this.playerHealth += healthValue;
            }
            this.addLogMessages('player', 'heal', healthValue);
            this.attackPlayer();
        },
        startGame(){
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.winner = null;
            this.logMessages = [];

        },
        addLogMessages(who, what, value){
            //unshift je podobne ako push ale toto pridava veci na začiato pola
            this.logMessages.unshift({
                actionBy: who,
                actionType:what,
                actionValue: value,
            });
        }
    }
  
  })
