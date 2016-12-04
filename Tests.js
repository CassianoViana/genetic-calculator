"use strict";

let FObj = require('./FObj');
let Chromossome = require('./Chromossome');
let Evaluator = require('./Evaluator');
let Selector = require('./Selector');
let Crosser = require('./Crosser');
let Mutator = require('./Mutator');
let EquationSolver = require('./EquationSolver');
let MyTest = require('./MyTest');

class Tests extends MyTest {

    constructor() {
        super();
        super.run(this.test_equation_solver);
        super.run(this.test_evaluate);
        super.run(this.test_evaluate_chromossome);
        super.run(this.test_select_population);
        super.run(this.test_cross);
        super.run(this.test_mutate);
        super.run(this.test_mutate2);
    }

    /*
    - extrair a quantidade de numeros
    - quebrar a string nas partes antes e depois do "="
    - mudar a string para "(" parte_antes do igual ")" - parte_depois do igual
    - substituir variaveis por numeros
    */

    test_evaluate() {
        let equation = "2*a + 3*b = 5";
        let nrs = [1, 1];
        let expected = 0;
        let result = new FObj(equation).calculate(nrs);
        return [expected, result];
    }

    test_evaluate_chromossome() {
        let equation = "2*a + 3*b = 5";
        let chromossome = new Chromossome([1, 1]);
        let evaluator = new Evaluator(equation);
        evaluator.evaluate(chromossome);
        let expected = 0;
        let result = chromossome.value;
        return [expected, result];
    }

    test_select_population() {

        let population = [];
        population[0] = new Chromossome([12, 5, 23, 8]);
        population[1] = new Chromossome([2, 21, 18, 3]);
        population[2] = new Chromossome([10, 4, 13, 14]);
        population[3] = new Chromossome([20, 1, 10, 6]);
        population[4] = new Chromossome([1, 4, 13, 19]);
        population[5] = new Chromossome([20, 5, 17, 1]);

        population[0].value = 93;
        population[1].value = 80;
        population[2].value = 83;
        population[3].value = 46;
        population[4].value = 94;
        population[5].value = 55;

        let R = [];
        R[0] = 0.201;
        R[1] = 0.284;
        R[2] = 0.099;
        R[3] = 0.822;
        R[4] = 0.398;
        R[5] = 0.501;

        let selector = new Selector();
        let newPopulation = selector.select(population, R);

        let expected = true;
        let result =
            super.eqArray(newPopulation[0].genes, [2, 21, 18, 3]) &&
            super.eqArray(newPopulation[1].genes, [10, 4, 13, 14]) &&
            super.eqArray(newPopulation[2].genes, [12, 5, 23, 8]) &&
            super.eqArray(newPopulation[3].genes, [20, 5, 17, 1]) &&
            super.eqArray(newPopulation[4].genes, [10, 4, 13, 14]) &&
            super.eqArray(newPopulation[5].genes, [20, 1, 10, 6]);
        return [expected, result];
    }

    test_cross() {
        let crosser = new Crosser(0.25);
        let population = [
            new Chromossome([2, 21, 18, 3]),
            new Chromossome([10, 4, 13, 14]),
            new Chromossome([12, 5, 23, 08]),
            new Chromossome([20, 5, 17, 1]),
            new Chromossome([10, 4, 13, 14]),
            new Chromossome([20, 1, 10, 6])
        ];
        let R = [];
        R[0] = 0.191;
        R[1] = 0.259
        R[2] = 0.760
        R[3] = 0.006
        R[4] = 0.159
        R[5] = 0.340
        let C = [];
        C[0] = 1;
        C[1] = 1;
        C[2] = 2;
        crosser.cross(population, R, C);

        let expected = true;
        let result =
            super.eqArray(population[0].genes, [2, 5, 17, 1]) &&
            super.eqArray(population[1].genes, [10, 4, 13, 14]) &&
            super.eqArray(population[2].genes, [12, 5, 23, 8]) &&
            super.eqArray(population[3].genes, [20, 4, 13, 14]) &&
            super.eqArray(population[4].genes, [10, 4, 18, 3]) &&
            super.eqArray(population[5].genes, [20, 1, 10, 6]);
        return [expected, result];
    }

    test_mutate2() {
        let population = [
            new Chromossome([2, 5, 17, 1]),
            new Chromossome([10, 4, 13, 14]),
            new Chromossome([12, 5, 23, 8]),
            new Chromossome([20, 4, 13, 14]),
            new Chromossome([10, 4, 18, 3]),
            new Chromossome([20, 1, 10, 6])
        ];

        let mutator = new Mutator(0.1, 30);
        mutator.mutate(population);

        return [true, true];
    }

    test_mutate() {
        let population = [
            new Chromossome([2, 5, 17, 1]),
            new Chromossome([10, 4, 13, 14]),
            new Chromossome([12, 5, 23, 8]),
            new Chromossome([20, 4, 13, 14]),
            new Chromossome([10, 4, 18, 3]),
            new Chromossome([20, 1, 10, 6])
        ];

        let randomPositions = [];
        randomPositions[0] = 12;
        randomPositions[1] = 18;
        let randomNewGenes = [];
        randomNewGenes[0] = 2;
        randomNewGenes[1] = 5;

        let mutator = new Mutator(0.1);
        mutator.mutate(population, randomPositions, randomNewGenes);

        let expected = true;
        let result =
            super.eqArray(population[0].genes, [2, 5, 17, 1]) &&
            super.eqArray(population[1].genes, [10, 4, 13, 14]) &&
            super.eqArray(population[2].genes, [12, 5, 23, 2]) &&
            super.eqArray(population[3].genes, [20, 4, 13, 14]) &&
            super.eqArray(population[4].genes, [10, 5, 18, 3]) &&
            super.eqArray(population[5].genes, [20, 1, 10, 6]);
        return [expected, result];
    }

    test_equation_solver() {
        let result = new EquationSolver().solve("a + 2*b = 20");
        return [true, true];
    }
}

module.exports = Tests;

new Tests();
