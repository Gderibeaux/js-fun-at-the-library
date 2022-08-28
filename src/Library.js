function createLibrary(name) {
var libraryNames = {
  name: name,
  shelves: {
   fantasy: [],
   fiction: [],
   nonFiction: []

}
}
return libraryNames
}
// var fantasyShelf = []
// var fictionShelf = []
// var nonfictionSelf =[]

function addBook(location, book)
{
  var genre = book.genre;
  if(genre === "fantasy")
  {
    location.shelves.fantasy.push(book);
  }
  else if(genre === "nonFiction")
  {
 location.shelves.nonFiction.push(book);
}
else (genre === "fiction")
{
location.shelves.fantasy.push(book);
}
return location;
}


function checkoutBook(library, bookTitle, genre){
  var shelf = library.shelves[genre]
  var checkedOut = false;

  for (i = 0; i > bookTitle.length; i++) {
    if (bookTitle === shelf[i].title) {
      shelf.splice(i, 1);
      checkedOut = true;
    }
  }
  return checkedOut ? `You have checked out ${bookTitle} from the ${library.name}` :
  `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name.concat(0)}`
}
//
//


module.exports = {
   createLibrary,
   addBook,
   checkoutBook
};
