const host = window.location.origin;



function loadPage(){
    let titleHead = document.getElementById("title").innerHTML 
    let authHead = document.getElementById("authHead")
    titleHead.innerHTML = localStorage.getItem('title')
    authHead.innerHTML = localStorage.getItem('author')
}

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

window.onload = loadPage()