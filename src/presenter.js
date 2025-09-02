import TennisScorer from "./tennisScore.js";

export default class TennisPresenter {
    constructor(view) {
        this.view = view;
        this.scorer = new TennisScorer();
        this.updateView();
    }

    player1Scores() {
        this.scorer.player1Scores();
        this.updateView();
    }

    player2Scores() {
        this.scorer.player2Scores();
        this.updateView();
    }

    reset() {
        this.scorer.score1 = 0;
        this.scorer.score2 = 0;
        this.updateView();
    }

    updateView() {
        this.view.showScore(this.scorer.showScore());
    }
}