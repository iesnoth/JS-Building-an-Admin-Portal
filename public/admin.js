
// Your Code Here


// Retrieve a list of books from the server.
async function how(){
    let getBooks = await fetch(`http://localhost:3000/listBooks`,{
    method:"GET",
    headers: null,
    body:null,
})

let bookList = await getBooks.json();
console.log(bookList);}

how()






// Display a list of book titles to the admin.
// Place a text input next to each book title.
// Give each text input a value: the quantity of the associated book.
// Place a submit button next to each text input.
// When the submit button is clicked, retrieve the quantity
//from the associated text input and save the updated quantity to the server.