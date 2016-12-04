"use strict";

class Mutator {

    constructor(mutationRate, maxGenValue){
        this.mutationRate = mutationRate;
        this.maxGenValue = maxGenValue;
    }

    mutate(population, randomPositions, randomNewGenes){

        let psize = population.length;
        let clength = population[0].genes.length;
        let totalGenes = psize * clength;

        randomPositions = randomPositions || this.randomPositions(totalGenes);
        randomNewGenes = randomNewGenes || this.generateNewGenes(randomPositions.length);

        for(let i = 0; i < randomPositions.length; i++){
            let randomPosition = randomPositions[i];
            let randomNewGene = randomNewGenes[i];
            
            let genePosition = (randomPosition % clength);
            if(genePosition == 0) genePosition = clength;
            genePosition = genePosition - 1.

            let chromossomePosition = Math.ceil(randomPosition / clength);
            chromossomePosition = chromossomePosition - 1;

            population[chromossomePosition].genes[genePosition] = randomNewGene;
        }
    }

    randomPositions(totalGenesPopulation){
        let nrRandomPositions = Math.ceil(totalGenesPopulation * this.mutationRate);
        let randomPositions = [];
        for(let i = 0; i < nrRandomPositions; i++){
            randomPositions[i] = Math.ceil(Math.random() * totalGenesPopulation); 
        }
        return randomPositions;
    }

    generateNewGenes(nrRandomPositions){
        let randomNewGenes = [];
        for(let i = 0; i < nrRandomPositions; i++){
            randomNewGenes[i] = Math.ceil(Math.random() * this.maxGenValue); 
        }
        return randomNewGenes;
    }
}

module.exports = Mutator;