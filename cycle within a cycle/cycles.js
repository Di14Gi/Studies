// for(let i = 0; i < 3; i++){
//     console.log(i)
//     for(let j = 0; j < 3; j++){
//         console.log(j)
//     }
// }


// let result = '';
// const length = 7;

// for(let i = 1; i < length; i++){
//     for(let j = 0; j < i; j++){
//         result += '*';
//     }

//     result += '\n'
// }

// console.log(result);


// first: for(let i = 0; i < 3; i++){
//     console.log(`First level: ${i}`);
//     for(let j = 0; j < 3; j++){
//         console.log(`Second level: ${j}`);
//         for(let k = 0; k < 3; k++){
//             if(k === 2) break first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }




// for(let i = 5; i <= 10; i++){
//     console.log(i)
// }

// for(let i = 20; i >= 10; i--){
//     if(i === 13){
//         break
//     }
//     console.log(i)
// }


// for(let i = 2; i <= 10; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }

// let i = 2;
// while(i <= 16){
//     if(i % 2 === 0){
//         i++;
//         continue;
//     }else {
//         console.log(i);
//     }
//     i++;
// }


// let arr = []

// for(let i = 5; i <= 10; i++){
//     arr.push(i)
// }
// console.log(arr)


// let arr = [1, 322, 3, 14, 5, 65, 7, 18, 129]
// let result = []

// for(let i = 0; i < arr.length; i++){
//     result[i] = arr[i]
// }
// console.log(result)



// let arr = ['Hello', 2, 6, 'Home']

// for(let i = 0; i <= arr.length; i++){
//     if(typeof(arr[i]) === 'number'){
//         arr[i] *= 2
//     }else if(typeof(arr[i]) === 'string'){
//         arr[i] = `${arr[i]} - done`
//     }
// }
// console.log(arr)


// let data = ['Homework', 20, 'Hello', 5, 10]
// let result = []
// for(let i = 0; i <= data.length; i++){
//     result[i - 1] = data[data.length - i]
// }

// console.log(result)
// return result




const lines = 5;
let res = '';

for(let i = 0; i <= lines; i++){
    for(let j = 0; j < lines - i; j++){
        res += ' ';
        console.log(j)
    }
    for(let k = 0; k < 2 * i + 1; k++){
        res += '*';
    }
    res += '\n';
}

console.log(res);