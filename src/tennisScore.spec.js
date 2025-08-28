import showScore from "./tennisScore";

describe("Tennis Score", () => {
    it ("Deberia mostrar Love-Love al iniciar el juego", () => {
        expect(showScore()).toEqual("Love-Love");
    });

});

