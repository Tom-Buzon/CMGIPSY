//Se connecter avec identifiant
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    let user = { "mail": username, "password": password };


    fetch("http://localhost:3000/login/", {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }).then(res => {
            if (res.ok) return res.json()
        })
        .then(data => {
            console.log(data)
            if (data == true) {
                window.location.href = "dash.html"
            } else {
                loginErrorMsg.style.fontSize = "3em"
                loginErrorMsg.innerText = "Invalid Account"
                loginErrorMsg.style.color = "white"
                loginErrorMsg.style.display = "block"
            }
        })
});

function disableElement(article) {
    article.style.display = "none"
}