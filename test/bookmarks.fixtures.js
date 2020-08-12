function makeBookmarksArray() {
    return[
     {
       id: 1,
       title: 'Book One',
       url: 'www.goodbook.com',
       description: 'This book is really good',
       rating: 5,
     },
     {
       id: 2,
       title: 'Book two',
       url: 'www.badbook.com',
       description: 'This book is really bad',
       rating: 1,
     },
     {
       id: 3,
       title: 'Book three',
       url: 'www.bookthree.com',
       description: 'This book is bad',
       rating: 2,
     },
     {
       id: 4,
       title: 'Book four',
       url: 'www.bookfour.com',
       description: 'This book is good',
       rating: 4,
     }
    ]
}
  
function makeMaliciousBookmark() {
    const maliciousBookmark = {
      id: 911,
      title: 'Naughty naughty very naughty <script>alert("xss");</script>',
      url: 'Naughty naughty very naughty <script>alert("xss");</script>',
      description: `Bad image <img src="https://url.to.file.which/does-not.exist" onerror="alert(document.cookie);">. But not <strong>all</strong> bad.`,
      rating: 'Naughty naughty very naughty <script>alert("xss");</script>'
    }
    const expectedBookmark = {
      ...maliciousBookmark,
      title: 'Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;',
      description: `Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.`,
    }
    return {
      maliciousBookmark,
      expectedBookmark,
    }
  }
  
  module.exports = {
    makeBookmarksArray,
    makeMaliciousBookmark
  }
