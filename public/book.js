const host = window.location.origin;



function loadPage() {
    title = localStorage.getItem('title');
    author = localStorage.getItem('author');
    titleHead = document.getElementById('title');
    authHead = document.getElementById('auth');

    titleHead.innerHTML = title;
    authHead.innerHTML = author;
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

