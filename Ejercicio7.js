const house = 87

function matchstickHouses(house){
    if(house==0){
        console.log(0)
    }else if(house > 0) {
        console.log((house*6)-(house-1))
    }else {
        console.log("Ingrese Valor Positivo")
    }
}
matchstickHouses(house)