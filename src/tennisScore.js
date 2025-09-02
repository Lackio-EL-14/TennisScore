class TennisScorer {
    constructor() {
        this.score1 = 0;
        this.score2 = 0;
    }
    showScore() {

        if (this.score1 === 1){
        return "15-Love";
        }   else if (this.score1 === 2){
            return "30-Love";
        }   else if (this.score1 === 3){
            return "40-Love";
        }   else if (this.score1 === 4){
            return "Game for Player 1";
        }   else if (this.score2 === 1){
            return "Love-15";
        }   else if (this.score2 === 2){
            return "Love-30";
        }   else if (this.score2 === 3){
            return "Love-40";
        }   else if (this.score2 === 4){
            return "Game for Player 2";
        }
        return "Love-Love";
    

      

    }
    player1Scores() {
        this.score1++;
    }
    player2Scores() {
        this.score2++;
    }
}
export default TennisScorer;