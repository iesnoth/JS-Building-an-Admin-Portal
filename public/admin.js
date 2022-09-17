
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
//when a new quantity is put in, have the submit button
//dynamically send information from the admin site to the front site
//this will be a click event and PATCH request
function bookAdmin(book) {
    //creating a div for each book
    let bookEntry = document.createElement("div")
    //calling and appending the book titles
    let bookTitle = document.createTextNode(`${book.title}`)
    bookEntry.append(bookTitle)
    //making inputs
    let bookInput = document.createElement("input")
    bookInput.setAttribute('type', 'number')
    bookInput.setAttribute('id', 'book-input')
    bookInput.setAttribute(`placeholder`, `${book.quantity}`)
    bookEntry.append(bookInput)
    //SUBMIT BUTTONS
    let submit = document.createElement("button");
    submit.setAttribute('id', 'submitButton');
    let text = document.createTextNode("Submit");
    submit.appendChild(text);
    bookEntry.append(submit)
    
    //ok, so the test works, but it sets off all the alerts at once for some reason
    document.getElementById('submitButton').addEventListener('click', patchIt)
   
    async function patchIt() {
        let response = await fetch('http://localhost:3001/updateBook',{
            method:'PATCH',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                quantity: 1000
            })
        });

        let updatedBook = await response.json()
        alert(updatedBook)
    }

 //appending div
    document.body.append(bookEntry)

}

getList()



// Give each text input a value: the quantity of the associated book.
// When the submit button is clicked, retrieve the quantity
//from the associated text input and save the updated quantity to the server.



