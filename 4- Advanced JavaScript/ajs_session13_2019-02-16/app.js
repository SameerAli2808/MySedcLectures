// console.log('Hello from nodejs')

// function sayMyName() {
//     return 'My name is Sameer'
// }

// console.log(sayMyName())

////////////////////////////////////////////////////////////////////
// const myScript = require('./myScript')
// console.log(myScript.sayMyName())
// console.log(myScript.sayMyProfession())

///////////////////////////////////////////////////////////////////////////////
// const fs = require('fs')

// const log = msg => {
//     let entry = `[${new Date()}] ${msg}
//     `
//     fs.appendFileSync('./logInfo.txt', entry)
// }


// let shelf = JSON.parse(fs.readFileSync('./shelf.js', 'utf8'))

// shelf.push({
//         "title": "Something Important 02",
//         "author": "Some One",
//         "pageCount": 2564
// })

// for(const book of shelf) {
//     log(`Read book with title ${book.title}`)
// }

// fs.writeFileSync('./update_shelf.json', JSON.stringify(shelf, null, 2))

// console.log(shelf)

///////////////////////////////////////////////
// The Workout

const fs = require('fs')
let shelf = JSON.parse(fs.readFileSync('./shelf.js', 'utf8'))
console.log(shelf)
let unpublished = [];
let published = [];

for(const book of shelf) {
    if(book.published === 'unpublished') {
        unpublished.push(book);
    } else {
        book.status = ['Read', 'Not read', 'Want to read'];
        published.push(book)
    }
}

fs.writeFileSync('./unpublished_shelf.json', JSON.stringify(unpublished, null, 2))
fs.writeFileSync('./published_shelf.json', JSON.stringify(published, null, 2))


