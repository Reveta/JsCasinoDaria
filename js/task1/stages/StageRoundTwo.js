const randomRangeZ = 10;
const prizesZ = [
    new AttemptPrize(1, 200),
    new AttemptPrize(2, 100),
    new AttemptPrize(3, 50),
];

class StageRoundTwo {
    storage;

    randomGeneratedNumber;
    attemptsBaseCount;

    constructor() {
        this.randomGeneratedNumber = generateRandomNumber(randomRangeZ);
        this.attemptsBaseCount = prizesZ.length;

        this.storage = new Storage();
        console.log(this.randomGeneratedNumber)
    }

    run() {
        for (let attemptIndex = 1; attemptIndex <= this.attemptsBaseCount; attemptIndex++) {
            let prizeByAttemptIndex = prizesZ.find(value => value.attemptIndex === attemptIndex).prize;

            let numberFromClient = +prompt(getMessage(
                randomRangeZ,
                this.attemptsBaseCount - attemptIndex + 1,
                this.storage.getTotalPrize(),
                prizeByAttemptIndex));

            if (numberFromClient === this.randomGeneratedNumber) {
                this.storage.addToTotalPrize(prizeByAttemptIndex);
                break;
            }
        }

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