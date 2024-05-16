function loadBooks(bookName) {
    var bookName = localStorage.getItem('lookup')
    var newBookName = bookName.replace(/ /g, "+");
    return fetch(
        `https://openlibrary.org/search.json?title=${newBookName}`
    ).then((res) => res.json());
}

window.onload = loadBooks()