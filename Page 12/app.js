let str = "Pig latin is cool"
function addLength(str) {
    let newStr = str.split(" ")
    let arr = []
    for (let i = 0; i < newStr.length; i++) {
        let firstLetter = newStr[i].substring(0, 1)
        let bodyLetter = newStr[i].substring(1, newStr[i].length)
        arr.push(bodyLetter + firstLetter + 'ay')
    }
    return arr.join(" ").toString()
}
let arrayCountIndex = addLength(str)
console.log(arrayCountIndex)