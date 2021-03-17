const arr = [1, 2, 2, 3]
const arr1 = [5, 3, 2, 2]
const arr2 = [7, 3, 2, 2]

function sumCommon(){
    let arrNew = []

for (let i = 0; i< arr.length; i++){
    for (let j = 0; j < arr.length; j++){
        if (arr[i] == arr1[j] && arr[i] == arr2[j]){
            arrNew.push(arr[i])
            break;
        }
    }
}
let sum = 0;
for (let j of arrNew){
    sum += j
}
return sum
}
console.log(sumCommon())
