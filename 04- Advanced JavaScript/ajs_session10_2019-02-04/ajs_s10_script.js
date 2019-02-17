
Array.prototype.myMap = function(callback) {
    let newArr = [];
    for(const el of this) {
        newArr.push(callback(el))
    }
    return newArr;
}

Array.prototype.myFilter = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i])) {
            result.push(this[i]);
        }
    }    
    return result;
}

let myArray = [1,2,3,4,5, -3, 'hi', true, null, undefined]

let newArr = myArray.myMap(el => el+1)
newArr

let otherArray = myArray.myFilter(el => el>2)
otherArray


