let numero: number = 200;
let segundoNumero: number = 100;

console.log(numero + segundoNumero);

let idade: number = 16;
let texto: string = "Minha idade é: " + idade;

console.log(texto);

let idaden: number = 16;
let texton: string = "Minha idade é: " ;

console.log(texton + idaden);

let verdadeiro: boolean = false;

console.log(verdadeiro);

let arr: number[] = [1,2,3,4,10,50,60];

console.log(arr);
console.log("Tamanho do arrey:" + arr.length);
console.log("acessando a posição do array: " + arr[7]);
console.log(arr.indexOf(60));

let arrayTexto: Array<string>;

arrayTexto = ['ab', 'bc', 'cd', 'de'];
console.log(arrayTexto);
console.log(arrayTexto);
console.log(arrayTexto.indexOf('ab'));

function exibirTexto(){
    console.log( "Exibindo meu Texto");
    }
    
exibirTexto();

function exibirOutroTexto(){
    return "Exibindo outro Texto";
}

console.log(exibirOutroTexto());

function returN(){
    return 10;
}

console.log(returN());

function retornaT(): string{
    return "retornar string";
}
console.log(retornaT());


function soma(a:number, b:number): number{
    return a + b;
}
console.log("O valor da soma é: " + soma(50, 100));

/*exercicio 1*/
function multiplicação(a:number, b:number): number{
    return a * b;
}
console.log("O valor da multiplicação é: " + multiplicação(70, 2));


/*exercicio 2*/
function formula(a:number, b:number, c:number): number{
    return (a + b) * c;
}

console.log("O valor da resolução é: " + formula(70, 70, 2));

/*exercicio 3*/
function stringTexto(a:number, b:number): string{
    return ("O resultado da multiplicação é: " + (a*b)) 
    
}
console.log( stringTexto(80, 2));