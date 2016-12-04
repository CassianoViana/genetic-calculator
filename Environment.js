"use strict";

class Environment {

    constructor(population, evaluator) {
        this.population = population;
        this.evaluator = evaluator;
    }

    life() {
        evaluate();
        select();
        cross();
        mute();
    }

    evaluate() {
        for(let chromossome in this.population){
            this.evaluator.evaluate(chromossome);
        }
    }

    select() {
        this.population = this.selector.select(this.population);
    }

    cross() {

    }

    mute() {

    }

}

module.exports = Environment;