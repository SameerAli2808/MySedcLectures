console.log(`It's connected`);

/* Read a Book */
let message = document.getElementById("messege");
let list = document.getElementById("list");
let btnIsRead = document.getElementById("isRead");
let books = [];

function Book(title, author, read) {
    this.bookTitle = title;
    this.bookAuthor = author;
    this.isRead = read;
    this.readingInfo = function() {
        switch (this.isRead) {
            case true:
                return message.innerHTML = `You already read <b>"${this.bookTitle}"</b> by <i>${this.bookAuthor}</i>.`;
                break;
            case false:
                return message.innerHTML = `You still need to read <b>"${this.bookTitle}"</b> by <i>${this.bookAuthor}</i>.`;
                break;
            default:
                return message.innerHTML = `There's no such a book, sorry!`;
                break;
        }
    }
}

books[0] = new Book("Do Androids Dream of Electric Sheep?", "Philip K. Dick", true);
books[1] = new Book("The Hitchhiker's Guide to the Galaxy", "Douglas Adams", true);
books[2] = new Book("Something Wicked This Way Comes", "Ray Bradbury", false);
books[3] = new Book("Pride and Prejudice and Zombies", "Seth Grahame-Smith", true);
books[4] = new Book("I Was Told There'd Be Cake", "Sloane Crosley", false);
books[5] = new Book("The Curious Incident of the Dog in the Night-Time", "Mark Haddon", true);
books[6] = new Book("Eats, Shoots & Leaves: The Zero Tolerance Approach to Punctuation", "Lynne Truss", false);
books[7] = new Book("The Hollow Chocolate Bunnies of the Apocalypse", "Robert Rankin", false);
books[8] = new Book("To Kill a Mockingbird", "Harper Lee", false);
books[9] = new Book("The Unbearable Lightness of Being", "Milan Kundera", false);

for(i=0; i < books.length; i++) {
    list.innerHTML += `<input type="radio" name="readCheck" value="${i}">${books[i].bookTitle}<br></br>`;
}

function myFunction() {
    var checking = document.forms[0];
    for (i = 0; i < checking.length; i++) {
        if (checking[i].checked) {
            books[i].readingInfo();
        }
    }
}

btnIsRead.addEventListener("click", function() {
    myFunction();
})

