"use strict";

let Chromossome = require("./Chromossome");
let FObj = require('./FObj');

class Evaluator {

    constructor(equation){
        this.fobj = new FObj(equation);
    }

    evaluate(chromossome){
        chromossome.value = this.fobj.calculate(chromossome.genes);
    }
    
}

module.exports = Evaluator;