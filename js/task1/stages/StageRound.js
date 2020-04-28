class StageRound {
    storage;
    randomGeneratedNumber;
    attemptsBaseCount;
    randomRange;

    constructor() {
        this.storage = new Storage();
    }
    run(){
        return new StageTotalResult();
    }
}
function getMessage(randomRange, attemptLeft, totalPrize, actualPrize) {
    return `Choose a roulette pocket number from 0 to ${randomRange}
        Attempt left: ${attemptLeft}
        Total prize: ${totalPrize}$
        Possible prize on current attempt: ${actualPrize}`;
}

function generateRandomNumber(range) {
    return Math.round(Math.random() * range)
}