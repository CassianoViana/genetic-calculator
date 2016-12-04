"use strict"

let FObj = require('./FObj');
let Chromossome = require('./Chromossome');
let Evaluator = require('./Evaluator');
let MyTest = require('./MyTest');

class Tests extends MyTest {

    constructor() {
        super();
        super.run(this.test_evaluate);
        super.run(this.test_evaluate_chromossome);
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
    };

    test_evaluate_chromossome() {
        let equation = "2*a + 3*b = 5";
        let chromossome = new Chromossome([1, 1]);
        let evaluator = new Evaluator(equation);
        evaluator.evaluate(chromossome);
        let expected = 0;
        let result = chromossome.value;
        return [expected, result];
    };
}

module.exports = Tests;

new Tests();

