"use strict";

let Chromossome = require("./Chromossome");
let FObj = require('./FObj');

class Evaluator {

    constructor(equation){
        this.fobj = new FObj(equation);
    }

    evaluate(chromossome){
        let value = this.fobj.calculate(chromossome.genes);
        chromossome.value = Math.abs(value);
    }
}

module.exports = Evaluator;