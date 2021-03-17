const valor = 4

function powerMorphic(valor){
    let ban =0
    let alm=0
    for(let i=2;i<=10;i++){
        ban=Math.pow(valor,i)
        let string = valor.toString()
        let otro = ban.toString()

        if(otro[otro.length-1] === string[string.length-1]){
            alm++
        }
    }
    if(alm === 9){
        console.log("Polimórfico")
    }else if(alm === 4){
        console.log("Quadrimórfico")
    }else if(alm === 2){
        console.log("Bimórfico")
    }else if(alm === 1){
        console.log("Enamórfico")
    }else if(alm === 0){
        console.log("Amórfico")
    }
}
powerMorphic(valor)