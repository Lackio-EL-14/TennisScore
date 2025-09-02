import TennisScorer from "./tennisScore";

describe("Tennis Score", () => {
    it ("Deberia mostrar Love-Love al iniciar el juego", () => {
        const scorer = new TennisScorer();
        expect(scorer.showScore()).toEqual("Love-Love");
    });
    it ("Deberia mostrar 15-Love cuando el jugador 1 anota el primer punto", () => {
        const scorer = new TennisScorer();
        scorer.player1Scores();
        expect(scorer.showScore()).toEqual("15-Love");
    });
    it ("Deberia mostrar 30-Love cuando el jugador 1 anota el segundo punto", () => {
        const scorer = new TennisScorer();
        scorer.player1Scores();
        scorer.player1Scores();
        expect(scorer.showScore()).toEqual("30-Love");
    });
    it ("Deberia mostrar 40-Love cuando el jugador 1 anota el tercer punto", () => {
        const scorer = new TennisScorer();
        scorer.player1Scores();
        scorer.player1Scores();
        scorer.player1Scores();
        expect(scorer.showScore()).toEqual("40-Love");
    });
    it ("Deberia mostrar Game for Player 1 cuando el jugador 1 anota el cuarto punto", () => {
        const scorer = new TennisScorer();
        scorer.player1Scores();
        scorer.player1Scores();
        scorer.player1Scores();
        scorer.player1Scores();
        expect(scorer.showScore()).toEqual("Game for Player 1");
    });
    it ("Deberia mostrar Love-15 cuando el jugador 2 anota un punto", () => {
        const scorer = new TennisScorer();
        scorer.player2Scores();
        expect(scorer.showScore()).toEqual("Love-15");
    });
    it ("Deberia mostrar Love-30 cuando el jugador 2 anota dos puntos", () => {
        const scorer = new TennisScorer();
        scorer.player2Scores();
        scorer.player2Scores();
        expect(scorer.showScore()).toEqual("Love-30");
    });
    it ("Deberia mostrar Love-40 cuando el jugador 2 anota tres puntos", () => {
        const scorer = new TennisScorer();
        scorer.player2Scores();
        scorer.player2Scores();
        scorer.player2Scores();
        expect(scorer.showScore()).toEqual("Love-40");
    });
    it ("Deberia mostrar Game for Player 2 cuando el jugador 2 anota cuatro puntos", () => {
        const scorer = new TennisScorer();
        scorer.player2Scores();
        scorer.player2Scores();
        scorer.player2Scores();
        scorer.player2Scores();
        expect(scorer.showScore()).toEqual("Game for Player 2");
    });
    it ("Deberia mostrar 15-15 cuando ambos jugadores anotan un punto", () => {
        const scorer = new TennisScorer();
        scorer.player1Scores();
        scorer.player2Scores();
        expect(scorer.showScore()).toEqual("15-15");
    });
    it ("Deberia mostrar 30-30 cuando ambos jugadores anotan dos puntos", () => {
        const scorer = new TennisScorer();
        scorer.player1Scores();
        scorer.player1Scores();
        scorer.player2Scores();
        scorer.player2Scores();
        expect(scorer.showScore()).toEqual("30-30");
    });
});

