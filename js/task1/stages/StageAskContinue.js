class StageAskContinue {

    run(){
        let messageText = getMessageText(new Storage().getTotalPrize());
        let answer = confirm(messageText);

        if (answer) {
            return new StageRoundTwo();
        } else {
            return new StageAskPlayAgain();
        }
    }
}

function getMessageText(totalPrize) { return `Congratulations, you won! You prize is ${totalPrize}. Do you want to continue?`}