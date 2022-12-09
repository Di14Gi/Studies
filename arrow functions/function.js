let num = 20;

function showFIrstMessage(text){
    console.log(text);
    num = 10;
}

showFIrstMessage('Hello world');


// function calc(a, b){
//     return (a+b);
// }

// console.log(calc(4, 3))
// console.log(calc(5, 3))
// console.log(calc(6, 3))
// console.log(calc(7, 3))


function ret(){
    let num = 50;
    return num
}

const anotherNum = ret();
console.log(anotherNum)


const logger = function() {
    console.log('hello')
};

logger();

const calc = (a, b) => {return a + b};



const usdCurr = 28
const discount = 0.9;
function convert(amount, curr){
    return (curr * amount)
}

function promotion(result){
    console.log(result * discount)
}

const res = convert(500, usdCurr);
promotion(res);


function test(){
    for(let i = 0; i < 5; i++){
        console.log(i);
        if(i === 3) return;
    }
    console.log('done')
}

test();

function doNothing()
console.log(doNothing() === undefined)



function addName(name){
    return (`Привет, ${name}!`);
}

console.log(addName('DIma'))


function arr(num){
    return [num - 2, num, num + 1]
}

console.log(arr(45))