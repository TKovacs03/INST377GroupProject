document.addEventListener('DOMContentLoaded', () => {
    fetchFavoritedBooks();
});

async function fetchFavoritedBooks() {
    try {
        const response = await fetch('/favoritedBooks'); // Fetch from the backend endpoint //
        const favoritedBooks = await response.json();
        displayFavoritedBooks(favoritedBooks);
    } catch (error) {
        console.error('Failed to fetch favorited books:', error);
    }
}

function displayFavoritedBooks(books) {
    const container = document.getElementById('favoriteBooksContainer');
    container.innerHTML = ''; 

    books.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');

        bookDiv.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
        `;

        container.appendChild(bookDiv);
    });
}
