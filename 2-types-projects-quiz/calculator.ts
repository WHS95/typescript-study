/**
 * Let's make a calculator 🧮
 */

//내가 작성한 함수 방식
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

type Command ='add' | 'substract' |  'multiply' |  'divide' |  'remainder' 

function calculate(command:Command, a:number, b:number):number{
    switch(command){
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
        default:
            throw Error('unknownCommand')
    };
};

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
