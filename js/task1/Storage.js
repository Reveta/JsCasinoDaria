class Storage {

    restoreDefaultPrize(){
        localStorage.setItem("totalPrize", totalDefaultPrize.toString());
    }

    addToTotalPrize(newPartPrize){
        localStorage.setItem("totalPrize", +this.getTotalPrize() + newPartPrize)
    }

    getTotalPrize(){
        return localStorage.getItem("totalPrize")
    }
}

const totalDefaultPrize = 0;