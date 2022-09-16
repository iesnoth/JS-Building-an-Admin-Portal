
// Your Code Here


// Retrieve a list of books from the server.
async function getList() {

    let response = await fetch('http://localhost:3001/listBooks')
    let bookUnit = await response.json()

    console.log(bookUnit)

    bookUnit.forEach(bookAdmin)
}

// Display a list of book titles to the admin.
//I need to create a function to get each title out of the array and individual object,
//write HTML to make an input field and submit button next to each title
//when a new quantity is put in, have the submit button dynamically send information from the admin site to the front site
function bookAdmin(book){
    //creating a div for each book
    let bookEntry = document.createElement("div")
    //calling and appending the book titles
    let bookTitle = document.createTextNode(`${book.title}`)
    bookEntry.append(bookTitle)
    //
    let bookInput = document.createElement("input")
    bookInput.setAttribute('type','number')
    bookEntry.append(bookInput)
    
    //appending div
    document.body.append(bookEntry)
//     bookEntry.setAttribute('class','book-entry')
//     //insert an input
//     let bookInput = document.createElement("input")
//     //label the input with the 
//     bookInput.setAttribute 
 }

// Give each text input a value: the quantity of the associated book.
// Place a submit button next to each text input.
// When the submit button is clicked, retrieve the quantity
//from the associated text input and save the updated quantity to the server.


getList()