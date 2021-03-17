const num=11
function numberSplit(num){
    if((num%2) != 0){
        console.log("[",(Math.floor(num/2)),"|",(Math.ceil(num/2)),"]")
    }else{
        console.log("[",(num/2),"|",(num/2),"]")
    }
}
numberSplit(num)