const graf =[
    [ 0, 1, 0, 0 ],
    [ 1, 0, 1, 1 ],
    [ 0, 1, 0, 1 ],
    [ 0, 1, 1, 0 ]]
const nod1=0
const nod2=2
function grafo(graf, nod1, nod2){
    let num1 =0;
    let num2 =0;
    for(let j=0; j<graf.length; j++){ 
        if (j===nod1){
            num1 = graf[j][nod2];
        }
        if(j===nod2){
            num2 = graf[j][nod1]
        }
    }
    if(num1 === 1 && num2 === 1){
        return true
    }else{ 
        return false
    }
}
grafo(graf,nod1,nod2);
