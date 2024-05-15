const host = window.location.origin;

async function userLog() {
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    let fun = document.getElementById('funSelect').value


    if(fun == 'signup'){
        await fetch(`${host}/signup`,{
            method:'POST',
            body: JSON.stringify({
                "username": username,
                "password": password
            })

        })
    }
}