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
        }
        return "Love-Love";

    }
    player1Scores() {
        this.score1++;
    }
}
export default TennisScorer;