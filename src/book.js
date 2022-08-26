function createTitle(title1) {
  return (`The ${title1}`)
}
function buildMainCharacter(name, age, pronouns){
var character = {
  name: name,
  age: age,
  pronouns: pronouns,
}
return character
}

function saveReview(firstReview, reviews) {

if (reviews.includes(firstReview) === false) {
  return reviews.push(firstReview);
}
}

function calculatePageCount (bookTitle, bookPageCount){
  var bookPageCount = (bookTitle.length * 20)
  return bookPageCount;
}
 function writeBook (bookTitle, bookCharacter, genre){
   var bookWriter = {
 title: bookTitle,
 mainCharacter: bookCharacter,
 pageCount: bookTitle.length * 20,
 genre: genre,
}
return bookWriter
 }

 function editBook (book){
   return book.pageCount = book.pageCount * .75 

 }




module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
