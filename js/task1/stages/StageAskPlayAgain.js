class StageAskPlayAgain {
    run(){
        let answer = confirm(messageText);

        if (answer){
            return new StageCleanData();
        } else {
            return new StageFinishProgram();
        }
    }
}

const messageText = "Do you want play again?"