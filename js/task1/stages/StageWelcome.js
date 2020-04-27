class StageWelcome {
    run() {
        let answer = confirm(welcomeMessage);

        if (answer){
            return new StageCleanData();
        } else {
            return new StageGoodBye();
        }
    }
}

const welcomeMessage = "Do you want to play?";
