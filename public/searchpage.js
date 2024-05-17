function bookInfo(title,author){
    localStorage.setItem('title',title)
    localStorage.setItem('author',author)
    window.location = 'book.html'
}

async function loadResults(query){
    await fetch(`https://openlibrary.org/search.json?q=${query}`).
    then((res) => res.json())
    .then((res) =>{
        resList = document.getElementById('resList')
        resList.innerHTML = ''
        function correctArgMaker(title, author) {
            return () => bookInfo(title, author);
        }
        for (let i = 0; i < 10; i++) {
            var currentBook = res.docs[i];
            var bookLink = document.createElement('a');
            bookLink.onclick = correctArgMaker(currentBook.title, currentBook.author_name[0]);
            bookLink.innerHTML = `${currentBook.title} by ${currentBook.author_name[0]}`
            var newEntry = document.createElement('li');
            newEntry.appendChild(bookLink);
            resList.appendChild(newEntry)
            ;
        }
    });
}

async function loadPage() {

    var query = localStorage.getItem('query')
    var fixedQuery = query.replace(/ /g, "+");
    loadResults(fixedQuery)   
    };

function loadSearch(){
    query = document.getElementById('usersearch').value
    var fixedQuery = query.replace(/ /g, "+");
    loadResults(fixedQuery)
}
window.onload = loadPage()