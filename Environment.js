"use strict";

class Environment {

    constructor(population, evaluator, selector, crosser, mutator) {
        this.population = population;
        this.evaluator = evaluator;
        this.selector = selector;
        this.crosser = crosser;
        this.mutator = mutator;
    }

    life() {
        this.evaluate();
        this.select();
        this.cross();
        this.mutate();
    }

    evaluate() {
        for(let i = 0; i < this.population.length; i++){
            this.evaluator.evaluate(this.population[i]);
        }
    }

    select() {
        this.population = this.selector.select(this.population);
    }

    cross() {
        this.crosser.cross(this.population);
    }

    mutate() {
        this.mutator.mutate(this.population);
    }

}

module.exports = Environment;