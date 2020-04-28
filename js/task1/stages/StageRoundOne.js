
//TODO Переписати на основі батьківського класу
//TODO Перенести змінні всередину класу
class StageRoundOne extends StageRound{

    randomRange = 5;
    prizes = [
        new AttemptPrize(1, 100),
        new AttemptPrize(2, 50),
        new AttemptPrize(3, 25),
    ];


    constructor() {
        super();
        this.randomGeneratedNumber = generateRandomNumber(this.randomRange);
        this.attemptsBaseCount = this.prizes.length;
    }

    run() {
        console.log(this.randomGeneratedNumber);

        for (let attemptIndex = 1; attemptIndex <= this.attemptsBaseCount; attemptIndex++) {
            let prizeByAttemptIndex = this.prizes.find(value => value.attemptIndex === attemptIndex).prize;

            let numberFromClient = +prompt(getMessage(
                this.randomRange,
                this.attemptsBaseCount - attemptIndex + 1,
                this.storage.getTotalPrize(),
                prizeByAttemptIndex));

            if (numberFromClient === this.randomGeneratedNumber) {
                this.storage.addToTotalPrize(prizeByAttemptIndex);
                return new StageAskContinue();
            }
        }
    }
}



