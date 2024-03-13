/*let myArr = [2, 8, 7, 6, 1];
for (let i = 0; i < myArr.length; i++) {

    myArr[i] = myArr[i] * 10
    console.log(myArr[i]);
}


let myArr = [5, 8, 7, 6, 3];
for (let i = 0; i < myArr.length; i++) {
if( myArr[i]%2==0){
    myArr[i]=myArr[i]*10;
    console.log(myArr[i])
}else{
    myArr[i]=myArr[i]*100;
    console.log(myArr[i])
}
}

//Adding numbers altogether inside an Array//

let myArr = [1, 5, 6, 8, 7];
let sum =0
for (let i = 0; i < myArr.length; i++){
sum=sum+myArr[i]
}
console.log(sum)

//Largest number in an Array//

let newArr = [8, 6, 1, 7, 3];
let largest = -1;
let secondLargest = -1;

for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] > largest) {
        secondLargest = largest;
        largest = newArr[i];
    } else if (newArr[i] > secondLargest && newArr[i] != largest) {
        secondLargest = newArr[i];
    }
}
console.log(largest);
console.log(secondLargest);

//Sum of Odd number//

let myArr=[8,6,7,5,3];
let sum=0;
for(let i=0; i<myArr.length; i++){
    if(myArr[i]%2!=0){
    sum=sum+myArr[i]
}
}
console.log(sum);*/

function equalTo100(a,b){
    a===100||b===100;

}
console.log(equalTo100(55,22));






