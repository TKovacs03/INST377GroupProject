const host = window.location.origin;



function loadPage() {
    title = localStorage.getItem('title');
    author = localStorage.getItem('author');
    cover = localStorage.getItem('cover');
    titleHead = document.getElementById('title');
    authHead = document.getElementById('auth');
    coverElem = document.getElementById('resultCover');

    titleHead.innerHTML = title;
    authHead.innerHTML = author;
    coverElem.src = cover;
}

document.addEventListener('DOMContentLoaded', loadPage);

async function addBook(){ 
    await fetch(`${host}/addBook`,{
        method:'POST',
        body: JSON.stringify({
            "title": localStorage.getItem('title'),
            "author": localStorage.getItem('author'),
            "user_id": localStorage.getItem('user_id')
        }),
        headers: {
            "Content-type":"application/json"
        }
    })
    
}

