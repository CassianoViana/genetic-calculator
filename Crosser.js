"use strict";

class Crosser {

    constructor(crossRate) {
        this.crossRate = crossRate;
    }

    cross(population, testRandomParents, testCutPoints) {
        let parents = this.selectParents(population, testRandomParents);
        let cutPoints = testCutPoints || this.randomCutPoints(population);

        let crossovers = [];
        let chromossomeLength = population[0].genes.length;
        for (let i = 0; i < parents.length; i++) {
            let i2 = (i + 1) % parents.length;
            let genesMale = parents[i].genes;
            let genesFemale = parents[i2].genes;
            let genesChild = [];
            let k = 0;
            while(k < cutPoints[i]){
                genesChild[k] = genesMale[k];
                k++;
            }
            while(k < chromossomeLength){
                genesChild[k] = genesFemale[k];
                k++;
            }
            crossovers[i] = genesChild;
        }

        for(let i = 0; i < parents.length; i++){
            parents[i].genes = crossovers[i];
        }
    }

    selectParents(population, testRandomParents){
        let parents = [];
        let R = [];
        let k = 0;
        while (k < population.length) {
            R[k] = testRandomParents && testRandomParents[k] || Math.random();
            if (R[k] < this.crossRate) {
                parents.push(population[k]);
            }
            k = k + 1;
        }
        return parents;
    }

    randomCutPoints(parents){
        if(!parents) return;
        let cutPoints = [];
        let chromossomeLength = parents[0].genes.length;
        for (let i = 0; i < parents.length; i++) {
            cutPoints[i] = Math.ceil(Math.random() * (chromossomeLength - 1));
        }
        return cutPoints;
    }
}

module.exports = Crosser;