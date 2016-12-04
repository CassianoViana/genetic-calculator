"use strict";

class Mutator {

    constructor(mutationRate){
        this.mutationRate = mutationRate;
    }

    mutate(population, randomPositions, randomNewGenes){

        let psize = population.length;
        let clength = population[0].genes.length;

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
}

module.exports = Mutator;