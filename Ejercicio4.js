function binary(num){
    if(num >= 1024){
        console.log("Los números siempre serán menores a 1024")
    }else if(num === 0){
        console.log(0)
    }else{
        console.log((num).toString(2))
    }
}
binary(10)