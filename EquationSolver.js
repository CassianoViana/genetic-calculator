// pegar funcao
// contar variáveis
// criar cromossomos com espaços para as variáveis
// avaliar o resultado da funcao pra cada cromossomo
// calcular fitness dos cromossomos, normalizado
// 
let Environment = require('./Environment');

"use strict";

solve("a + 2b + 3c + 4d = 30");

let population = [];
let equation;
function solve(e){
   equation = e;
   population = generatePopulation();
    
   let environment = new Environment( population );
    
   while(!mustStop()){
       environment.life();
   }
   return selectBestChromosome();
}

function calculateChromLength(equation){
    return 4;
}

function calculatePopulationSize(chromLength){
    return 6;
}

function generatePopulation(){
    var a = calculateChromLength(equation);
    var b = calculatePopulationSize(a);
}

function mustStop(){
    
}

function selectBestChromosome(){
    
}