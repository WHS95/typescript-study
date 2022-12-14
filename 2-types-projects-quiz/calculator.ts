/**
 * Let's make a calculator ๐งฎ
 */

//๋ด๊ฐ ์์ฑํ ํจ์ ๋ฐฉ์
// type Tool = 'add' | 'substract' |  'multiply' |  'divide' |  'remainder' 

// function calculate(tool:Tool, num1 :number, num2: number) {
//     if(tool === 'add'){
//         return num1 + num2
//     } else if(tool === 'substract'){
//         return num1 - num2
//     }
//      else if(tool === 'multiply'){
//         return num1 * num2
//     }
//      else if(tool === 'divide'){
//         return num1/num2
//     } else {
//         return num1%num2
//     }
// }

type Command2 = 'add' | 'substract' |  'multiply' |  'divide' |  'remainder' 

function calculate(command:Command2, a:number, b:number):number{
    switch(command){//์ผ์ด์ค๊ฐ ๋ง์ ๊ฒฝ์ฐ์๋  if else ๋ณด๋ค๋ switch๊ฐ ๊ฐ๋์ฑ์ด ๋ ์ข๋ค.
        case "add":
            return a + b
        case "substract":
            return a - b
        case "multiply":
            return a * b
        case "divide":
            return a / b
        case "remainder":
            return a % b
        default://์ํ๋ ํ๋ผ๋ฏธํฐ๊ฐ ์๋ค์ด์ฌ๊ฒฝ์ฐ์ ๋ํ ์ฒ๋ฆฌ๋ฅผํ์
            throw Error('unknownCommand')
    };
};

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
