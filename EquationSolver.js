"use strict";

let Environment = require('./Environment');
let Chromossome = require('./Chromossome');
let Evaluator = require('./Evaluator');
let Selector = require('./Selector');
let Crosser = require('./Crosser');
let Mutator = require('./Mutator');

class EquationSolver {

    constructor(){
        this.CROSS_RATE = 0.80;
        this.MUTATION_RATE = 0.1;
        this.MAX_GENE_VAL = 100;
        this.POPULATION_SIZE = 15;
        this.MAX_GENERATIONS = 1000;
        this.ACCEPTED_ERROR = 0.05;
    }

    solve(equation) {
        this.prepareEnvironment(equation);
        while (!this.mustStop()) {
            this.environment.life();
        }
        return this.selectBestChromossome();
    }

    prepareEnvironment(equation) {
        this.generations = 0;
        this.equation = equation;
        this.population = this.generatePopulation();
        this.environment = new Environment(
            this.population,
            new Evaluator(equation),
            new Selector(),
            new Crosser(this.CROSS_RATE),
            new Mutator(this.MUTATION_RATE, this.MAX_GENE_VAL)
        );
    }

    generatePopulation() {
        let chromossomeLength = this.calculateChromossomeLength(this.equation);
        let populationSize = this.calculatePopulationSize(chromossomeLength);
        let population = [];
        for(let i = 0; i < populationSize; i++){
            let genes = [];
            for(let j = 0; j < chromossomeLength; j++){
                let value = Math.ceil(Math.random() * this.MAX_GENE_VAL);
                let multiply = Math.ceil(Math.random() * 10) % 2 == 0 ? 1 : -1; 
                genes[j] = value * multiply;
            }
            population[i] = new Chromossome(genes);
        }
        return population;
    }

    calculateChromossomeLength(equation) {
        return equation.match(/[A-z]/g).length;
    }

    calculatePopulationSize(chromLength) {
        return this.POPULATION_SIZE;
    }

    mustStop() {
        return (this.generations++ > this.MAX_GENERATIONS)
            || (this.foundSolution(this.ACCEPTED_ERROR));
    }

    foundSolution(acceptedError){
        let population = this.environment.population;
        for(let i = 0; i < population.length; i++){
            let chromossome = population[i];
            this.environment.evaluator.evaluate(chromossome);
            if(chromossome.value == 0){
                this.result = chromossome;
                return true;
            }
            if(chromossome.value < 0 + acceptedError){
                return true;
            }
        }
        return false;
    }

    selectBestChromossome(){
        if(this.result) return this.result;
        let population = this.environment.population;
        
        return population.reduce((a,b)=>{ 
           return this.environment.evaluator.evaluate(a) < this.environment.evaluator.evaluate(b) ? a : b 
        });
    }
}

module.exports = EquationSolver;
