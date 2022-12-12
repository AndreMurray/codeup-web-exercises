

(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    const person = {
        firstName: "Andre",
        lastName: "Murray"


    }
    person.sayHello = function(first, last) {
        return ("Hello " + this.firstName + ' ' + this.lastName + '.');
    }
    console.log(person.sayHello());

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */



    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180 , discount: 0, amountToPay: function (pay,discount) {
              return  (this.amount * this.discount) - this.amount
            } },
        {name: 'Ryan', amount: 250, discount: .12, amountToPay1: function (pay,discount) {
                return  (this.amount * this.discount) - this.amount
            }},
        {name: 'George', amount: 320, discount: .12, amountToPay2: function (pay, discount) {
                return  (this.amount * this.discount) - this.amount
            }}
    ];

    shoppers.forEach( function(shopper) {
    if(shopper.amount > 200) {
        let discount = parseFloat(shopper.amount - (shopper.amount * .12));
        //console.log(`${shopper.name} will pay $${shopper.amount} before the discount, with the discount of % 12, ${shopper.name} will now pay $${discount}`)

    } else {
        //console.log(`${shopper.name} will pay full price ${shopper.amount}`)
    }



    })



    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books = [
        {title: "Harry Potter",
        author: {firstName: "J.K",
                 lastName: "Rowling"},
        },
        {title: "It",
        author: {
                firstName: "Stephen",
                lastName: "King"}},
        {title: "The Exorcist",
        author:{
                firstName: "William",
                lastName: "Blatty"}},
        {title: "The Phantom of the Oera",
        author: {
                firstName: "Gaston",
                lastName: "Leroux"}},
        {title: "Clifford",
        author: {
            firstName: "Norman",
            lastName: "Bridwell"
        }}
    ]

    // console.log(books[0].title);
    // console.log(books[0].author.firstName);
    // console.log(books[0].author.lastName);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach( function (book,index) {
        let bookNumber = index + 1;
        let fullName = `${book.author.firstName} ${book.author.lastName}`;
        let message = `Book #${bookNumber}\nTitle: ${book.title}\nAuthor:${fullName}\n---`
        //console.log(message)

    })

    //console.log("Book # 1\n" + books[0].title + '\n ' + books[0].author.firstName + "\n" + books[0].author.lastName);
    //console.log("Book # 1\n" + books[1].title + '\n ' + books[1].author.firstName + " \n" + books[1].author.lastName);
    //console.log("Book # 1\n" + books[2].title + '\n ' + books[2].author.firstName + " \n" + books[2].author.lastName);
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    function createBook(title, author) {
        let authorArray = author.split(' ');
        let bookObject = {
            title: title,
            author: {
                firstName: authorArray[0],
                lastName: authorArray[1]
            },
        }
        return bookObject
    }

    let book2 = [
        createBook("Harry Potter", "J.K Rowling"),
        createBook("It", "Stephen King"),
        createBook("The Exorcist", "William Blatty"),
        createBook("The Phantom of the Oera", "Gaston Leroux"),
        createBook("Clifford", "Norman Bridwell")
    ];

    console.log(book2)


})();