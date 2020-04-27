class StageCleanData {
    run(){
        new Storage().restoreDefaultPrize();
        return new StageRoundOne();
    }
}