const h = "YFjaHUFBvaFBYsFBYLcGBrYEiFGBMpEtNT"

function detectWord(h){
    let min = ""
    for (var i = 0;i<=h.length;i++){ 
        if(h.charAt(i) === h.charAt(i).toLowerCase()){
            min += h.charAt(i) 
        }
    }
    console.log(min)
}
detectWord(h)