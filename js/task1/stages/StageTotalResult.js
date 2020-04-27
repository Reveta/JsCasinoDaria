class StageTotalResult {

    run(){
        let messageText = getMessageTextZ(new Storage().getTotalPrize());
        alert(messageText)
        return new StageAskPlayAgain();
    }
}

function getMessageTextZ(totalPrize) {return `Thank you for your participation. Your prize is: ${totalPrize}`}