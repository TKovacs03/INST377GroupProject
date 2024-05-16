
function loadPage(){
    console.log(localStorage.getItem('username'))
}

function searchBook() {
let bookSearch = document.getElementById('usersearch').value
localStorage.setItem('lookup', bookSearch)
window.location.href="searchpage.html"
}

window.onload = loadPage()