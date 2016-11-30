// pegar funcao
// contar variáveis
// criar cromossomos com espaços para as variáveis
// avaliar o resultado da funcao pra cada cromossomo
// calcular fitness dos cromossomos, normalizado
// 
"use strict";

let population = [];

function solve(equation){
    var a = calculateChromLength(equation);
    var b = calculatePopulationSize(a);
    population = generatePopulation(a, b)
    
    while(!mustStop()){
        evaluate();
        select();
        cross();
        mute();
    }
}

function calculateChromLength(equation){
    return 4;
}

function calculatePopulationSize(chromLength){
    return 6;
}

function generatePopulation(chromLength, populationSize){
    
}

function mustStop(){
    
}

function evaluate(){
    
}

function select(){
    
}

function cross(){
    
}

function mute(){
    
}
