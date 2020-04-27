const randomRange = 5;
const prizes = [
    new AttemptPrize(1, 100),
    new AttemptPrize(2, 50),
    new AttemptPrize(3, 25),
];

class StageRoundOne {
    storage;

    randomGeneratedNumber;
    attemptsBaseCount;

    constructor() {
        this.randomGeneratedNumber = generateRandomNumber(randomRange);
        this.attemptsBaseCount = prizes.length;

        this.storage = new Storage();
    }

    run() {
        console.log("randomNumber is =>" + this.randomGeneratedNumber)

        for (let attemptIndex = 1; attemptIndex <= this.attemptsBaseCount; attemptIndex++) {
            let prizeByAttemptIndex = prizes.find(value => value.attemptIndex === attemptIndex).prize;

            let numberFromClient = +prompt(getMessage(
                randomRange,
                this.attemptsBaseCount - attemptIndex + 1,
                this.storage.getTotalPrize(),
                prizeByAttemptIndex));

            if (numberFromClient === this.randomGeneratedNumber) {
                this.storage.addToTotalPrize(prizeByAttemptIndex);
                return new StageAskContinue();
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