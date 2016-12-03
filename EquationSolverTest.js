var EquationSolver = require("./EquationSolver");

var solver = new EquationSolver();

let genes = [5,5,5,5];
let equation = "a + 2b + 3c + 4d = 30";
let expected = 50;
let result = objFunction(genes, equation);
console.log("test.1: genes over equation", expected == result);


function objFunction(){
    
}
