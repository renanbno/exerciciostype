"use strict";
let numero = 200;
let segundoNumero = 100;
console.log(numero + segundoNumero);
let idade = 16;
let texto = "Minha idade é: " + idade;
console.log(texto);
let idaden = 16;
let texton = "Minha idade é: ";
console.log(texton + idaden);
let verdadeiro = false;
console.log(verdadeiro);
let arr = [1, 2, 3, 4, 10, 50, 60];
console.log(arr);
console.log("Tamanho do arrey:" + arr.length);
console.log("acessando a posição do array: " + arr[7]);
console.log(arr.indexOf(60));
let arrayTexto;
arrayTexto = ['ab', 'bc', 'cd', 'de'];
console.log(arrayTexto);
console.log(arrayTexto);
console.log(arrayTexto.indexOf('ab'));
function exibirTexto() {
    console.log("Exibindo meu Texto");
}
exibirTexto();
function exibirOutroTexto() {
    return "Exibindo outro Texto";
}
console.log(exibirOutroTexto());
function returN() {
    return 10;
}
console.log(returN());
function retornaT() {
    return "retornar string";
}
console.log(retornaT());
function soma(a, b) {
    return a + b;
}
console.log("O valor da soma é: " + soma(50, 100));
/*exercicio 1*/
function multiplicação(a, b) {
    return a * b;
}
console.log("O valor da multiplicação é: " + multiplicação(70, 2));
/*exercicio 2*/
function formula(a, b, c) {
    return (a + b) * c;
}
console.log("O valor da resolução é: " + formula(70, 70, 2));
/*exercicio 3*/
function stringTexto(a, b) {
    return ("O resultado da multiplicação é: " + (a * b));
}
console.log(stringTexto(80, 2));
