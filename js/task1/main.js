run();
// test();

function run() {

    let next = true;

    let stage = new StageWelcome();
    while (next) {
        stage = stage.run();

        if (stage === null) {
            next = false;
        }
    }

}

function test() {

    let storage = new Storage();
    storage.restoreDefaultPrize();
    storage.addToTotalPrize(50);
    storage.addToTotalPrize(75);

    alert(storage.getTotalPrize())

}