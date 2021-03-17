const word = [['a','b'],['c','d']]

function flatten(word) {
    const re = [...word]
    const object = []
    while (re.length) {
        const arr2 = re.pop()
        if (Array.isArray(arr2)){
            re.push(...arr2)
            }else{
                    object.push(arr2)
            }
    }
    return object.reverse()
}
console.log(flatten(word))
