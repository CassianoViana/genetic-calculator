"use strict";

let EquationSolver = require('./EquationSolver');

class Main {

    constructor(){
        this.test_equation_solver();
    }

    test_equation_solver() {

        let geneticCalculator = new EquationSolver();
        let result = geneticCalculator.solve("2*a + b/4 = 20");

        console.log("Equation: ", geneticCalculator.equation);
        console.log("Result: ", result);
        console.log("Generations: ", geneticCalculator.generations);
        console.log("Last Generation: ", geneticCalculator.environment.population);
    }
}

module.exports = Main;
new Main();
