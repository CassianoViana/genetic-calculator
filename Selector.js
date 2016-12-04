"use strict";

let Chromossome = require('./Chromossome');

class Selector {

    select(population, testRolete) {
        let fitness = [];
        let totalFitness = 0;        
        for (let i = 0; i < population.length; i++) {
            fitness[i] = 1 / (1 + Math.abs(population[i].value));
            totalFitness += fitness[i];
        }

        let probability = [];
        for (let i = 0; i < population.length; i++) {
            probability[i] = fitness[i] / totalFitness;
        }

        let cummulativeProbability = [];
        let sumProbability = 0;
        for (let i = 0; i < population.length; i++) {
            sumProbability += probability[i];
            cummulativeProbability[i] = sumProbability;
        }

        let rolete = testRolete || {};
        if(!testRolete)
            for (let i = 0; i < population.length; i++) {
                rolete[i] = Math.random();
            }

        let newGeneration = [];
        for (let i = 0; i < population.length; i++) {            
            let roletePosition = 0;
            let previous = 0;
            for(let j = 0; j < population.length; j++){
                if(rolete[i] > previous && rolete[i] < cummulativeProbability[j]){
                    roletePosition = j;
                    break;
                }
                previous = cummulativeProbability[j];
            }

            let newChromossome = new Chromossome(population[roletePosition].genes);
            newGeneration.push(newChromossome);
        }

        return newGeneration;
    }

}

module.exports = Selector;