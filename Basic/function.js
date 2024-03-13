/*function sum(a){
return a*10
}

let result=sum(5)

console.log(result);


function checkEven(a){
    if(a%2==0){
        return "This number is even number"

    }else{
        return "This number is odd number"
    }
}
console.log(checkEven(86));*/


let myArr = [5, 8, 6, 9, 4];
function checkIndex(inputarray, number) {
    let found = -1
    for (let i = 0; i < inputarray.length; i++) {
        if (inputarray[i] == number) {
            found = i
            break;
        } 
    }
    return found
}
let answer = checkIndex(myArr, 8
    )
if (answer != -1) {
    console.log(answer)
} else {
    console.log("Number not found");
}




