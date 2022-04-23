//question 1
/*let Books = [
    {
        Book_ID: "1",
        Book_Name: "Nordic Tales",
        Book_Price: "₪86.39",
        Book_Author: "Ulla Thynell"
    },
    {
        Book_ID: "2",
        Book_Name: "Ring",
        Book_Price: "₪62.69",
        Book_Author: "Koji Suzuki"
    },
    {
        Book_ID: "3",
        Book_Name: "The Magic",
        Book_Price: "₪56.34",
        Book_Author: " Rhonda Byrne"
    }];

let mybooks = JSON.stringify(Books);
console.log(mybooks);

let item = JSON.parse(mybooks);
for (let i of Books) {
    console.log(i);
}

for (let i of item) {
    console.log(i);
}

for (let index of item) {
    console.log(`Book_ID: ${index.Book_ID}`
        , `\nBook_Name: ${index.Book_Name}`
        , `\nBook_Price: ${index.Book_Price}`
        , `\nBook_Author: ${index.Book_Author} \n--------------------------`);

}*/

//------------------------------------------------

//question 2

let myCat = [{
    Name: "Memo",
    Age: 1,
    Color: "Black",
    Is_Sterile: true
}];

let Cats = JSON.stringify(myCat);
alert(Cats);

let yourCat = JSON.parse(Cats);
for(let i of yourCat){
    console.log(i);
}

for (let i of yourCat) {
    console.log(`Name: ${i.Name}\nAge: ${i.Age}\nColor: ${i.Color}\nIs Sterile: ${i.Is_Sterile}`);
}