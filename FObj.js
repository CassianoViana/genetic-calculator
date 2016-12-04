"use strict";

class FObj {

    constructor(equation){
        this.vars = equation.match(/[A-z]/g);
        this.nrVars = this.vars.length;

        let equal = equation.indexOf("=");
        let left = equation.substring(0, equal);
        let right = equation.substring(equal + 1);
        this.equation = "(" + left + ") - " + right;
    }

    calculate(values){
        for (let i = 0; i < values.length; i++) {
            this.equation = this.equation.replace(this.vars[i], values[i]);
        }
        return eval(this.equation);
    }

}

module.exports = FObj;