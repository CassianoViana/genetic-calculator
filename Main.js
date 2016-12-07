"use strict";

let EquationSolver = require('./EquationSolver');

class Main {

    constructor(){
        this.test_equation_solver();
    }

    test_equation_solver() {

        let geneticCalculator = new EquationSolver();
        let result = geneticCalculator.solve("2*a + b + c = 100");

        console.log("Best genes by generation: \n", geneticCalculator.environment.bestChromossomes);
        console.log("----------------------------------------------------")
        console.log("Equation: ", geneticCalculator.equation);
        console.log("----------------------------------------------------")
        console.log("Result: ", result);
        console.log("----------------------------------------------------")
        console.log("Generations: ", geneticCalculator.generations);
        console.log("----------------------------------------------------")
        console.log("Last Generation: \n", geneticCalculator.environment.population);
        console.log("----------------------------------------------------")
    }
}

module.exports = Main;
new Main();
