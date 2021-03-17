function f(){
    return num=30
}
function g(){
    return num=10
}

function whichIsLarger(f,g){
    if(f>g){
        return console.log("f")
    }else if(g>f){
        return console.log("g")
    }else{
        return console.log("ninguna")
    }
}
whichIsLarger(f(),g())