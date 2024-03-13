let myArr = [1, 4, 2, 3, 1, 3, 5, 4];
let result = [];
for (let i = 0; i < myArr.length; i++) {
   if (!alredyExists(myArr[i])) {
      result.push(myArr[i])
   }
}
function alredyExists(num) {
   let found = false
   for (let i = 0; i < result.length; i++) {
      if (result[i] == num) {
         found = true;
         return found;
      }
   }
   return found;
}
console.log(result);
