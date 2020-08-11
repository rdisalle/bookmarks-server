function makeBookmarksArray() {
    return[
     {
       id: 1,
       title: 'Book One',
       url: 'www.goodbook.com',
       description: 'This book is really good',
       rating: '5',
     },
     {
       id: 2,
       title: 'Book two',
       url: 'www.badbook.com',
       description: 'This book is really bad',
       rating: '1',
     },
     {
       id: 3,
       title: 'Book three',
       url: 'www.bookthree.com',
       description: 'This book is bad',
       rating: '2',
     },
     {
       id: 4,
       title: 'Book four',
       url: 'www.bookfour.com',
       description: 'This book is good',
       rating: '4',
     }
    ]
}
  
  module.exports = { makeBookmarksArray, }
