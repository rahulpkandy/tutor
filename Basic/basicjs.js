//Finding position of a given number in an Array//


/*let myArr = [1, 5, 6, 8, 7];
for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] == 6) {
        console.log(i)
        break
    }
}
//Multplication of numbers inside an Array//

   let myArr=[1,5,6,8,7];
   for (let i=0; i<myArr.length; i++)
   {
       myArr[i]=myArr[i]*10
   }
console.log(myArr);  

//Multiplying Odd & Even numbers in an Array//

let myArr = [1, 5, 6, 8, 7];
for (let i = 0; i < myArr.length; i++) {
if (myArr[i] % 2 == 0) {
   myArr[i] = myArr[i] * 10
}
else{
   myArr[i] = myArr[i] * 5
}
}
console.log(myArr)

//Adding numbers altogether inside an Array//

let myArr = [1, 5, 6, 8, 7];
let sum =0
for (let i = 0; i < myArr.length; i++){
sum=sum+myArr[i]
}
console.log(sum)*/

//Finding Largest & Second Largest number in an Array/ 

let newArr=[2,5,8,4,7,8]
let largest = -1
let secondLargest=-1

for (let i=0; i<newArr.length; i++){
    if(newArr[i]>largest){
        secondLargest=largest
        largest=newArr[i]
    }else if(newArr[i]>secondLargest&&newArr[i]!=largest){
        secondLargest=newArr[i]
    }
}
console.log(largest);
console.log(secondLargest);

//Sum of Odd no in Array//

/*let newArr=[2,8,7,3,6]
sum=0
for(let i=0; i<newArr.length; i++){
    if(newArr[i]%2!=0){
        sum=sum+newArr[i]
    }
}
console.log(sum);*/

