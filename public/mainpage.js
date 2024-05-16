function loadPage(){
    console.log(localStorage.getItem('username'))
}

window.onload = loadPage()

function getToday() {
    const date = new Date();
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0');
    var yyyy = date.getFullYear();
    properDate = yyyy + '-' + mm + '-' + dd;
    return properDate;
}

async function popBesties() {
    const slideList = document.getElementById('besties');
    var today = getToday();
    var myBooks = fetch(`https://api.nytimes.com/svc/books/v3/lists/${today}/combined-print-and-e-book-fiction.json?api-key=48tFA6TjZPbiddgyFZgHlijxAT88SpEz`)
    .then((res) => res.json());
    myBooks = await myBooks;
    for (let i = 0; i < 10; i++) {
        var currentBook = myBooks.results.books[i];
        var bookIcon = document.createElement('a');
        var myLink;
        var bam = currentBook.buy_links.find(function(book) {return book.name == 'Books-A-Million'});
        if (bam != undefined) {myLink = bam.url} else {myLink = currentBook.amazon_product_url};
        bookIcon.href = myLink;
        var myImg = document.createElement('img');
        myImg.src = currentBook.book_image;
        myImg.alt = 'oops';
        myImg.height = 500;
        myImg.width = 300;
        bookIcon.appendChild(myImg);
        /*console.log(bookIcon);*/
        var newEntry = document.createElement('li');
        newEntry.className = 'glide__slide';
        newEntry.appendChild(bookIcon);
        slideList.appendChild(newEntry);
    }
    new Glide('.glide', {perView: 3, focusAt: 'center'}).mount()
}