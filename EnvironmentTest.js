let Environment = require('./Environment');
let Chromossome = require('./Chromossome');

class EnvironmentTest {
    
    constructor(){
        let population = [
            new Chromossome([12, 5,23, 8]),
            new Chromossome([ 2,21,12, 3]),
            new Chromossome([10, 4,13,14]),
            new Chromossome([20, 1,10, 6]),
            new Chromossome([ 1, 4,13,19]),
            new Chromossome([20, 5,19, 1])
            ];
        this.environment = new Environment();
    }
    
}