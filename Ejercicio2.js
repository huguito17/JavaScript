const num = 1

function addUp(num){ 
    let cont = 0;
    if (num>0 && num<1001){
    for (var h=0;h<=num;h++){ 
        cont = cont+h;
    }
    console.log(cont);
    }else{
        console.log("Rango Permitido [ 1 - 1000 ] ")
    }
}

addUp(num)