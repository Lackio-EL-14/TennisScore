class TennisScorer {
    constructor() {
        this.score1 = 0;
        this.score2 = 0;
    }
    showScore() {

        if (this.score1 === this.score2){
            return this.draw(this.score1, this.score2);
        } else if (this.score1 >= 3 && this.score2 >= 3) { 
            if (this.score1 === this.score2 + 1) {
                return "Adventage Player 1";
            } else if (this.score2 === this.score1 + 1) {
                return "Adventage Player 2";
            }
        } else if (this.score1 === 1){
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
        }   else {
            return "Error";
        }

    }
    player1Scores() {
        this.score1++;
    }
    player2Scores() {
        this.score2++;
    }
    draw(n1, n2) {
        if (n1 === 0 && n2 === 0){
            return "Love-Love";
        } else if (n1 === 1 && n2 === 1){
            return "15-15";
        } else if (n1 === 2 && n2 === 2){
            return "30-30";
        } else if (n1 === 3 && n2 === 3){
            return "Deuce";
        }
        
    }
}
export default TennisScorer;