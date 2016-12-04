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
        let eq = this.equation;
        for (let i = 0; i < values.length; i++) {
            let variable = this.vars[i];
            let value = values[i];
            eq = eq.replace(variable, value);
        }
        return eval(eq);
    }

}

module.exports = FObj;