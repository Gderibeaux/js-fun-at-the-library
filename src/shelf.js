function shelfBook(bookName, sciFiShelf){
if (sciFiShelf.length < 3)
return sciFiShelf.unshift(bookName)
}

function unshelfBook(bookTitle, sciFiShelf){
for (var i = 0; i < sciFiShelf.length; i++){
    if (sciFiShelf[i].title === bookTitle){
      sciFiShelf.splice(i, 1)

      }
    }
}

  function listTitles(fantasyShelf){
    for (var i = 0; i < fantasyShelf.length; i++) {
        return `${fantasyShelf[0].title}, ${fantasyShelf[1].title}, ${fantasyShelf[2].title}`
}
        // fantasyShelf.push
}

function searchShelf(sciFiShelf, bookName){
 for (var i = 0; i < sciFiShelf.length; i++){
     console.log(i, "Status", (sciFiShelf[i].title === bookName))
   if (sciFiShelf[i].title === bookName) {
     return true }
}
   return false

   }
    // console.log(i, "Status", sciFiShelf[1].title)
   // if (sciFiShelf.includes(title){
   //
   //    return sciFiShelf.title










module.exports = {
shelfBook,
unshelfBook,
listTitles,
searchShelf
};
