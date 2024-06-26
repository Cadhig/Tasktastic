const emptyFieldId = "emptyField"
const passwordMatch = "passwordMatch"

async function createAccount() {
    const username = document.getElementById('username')
    const password = document.getElementById('password')
    const confirmPassword = document.getElementById('confirmPassword')

    if (username.value === "" || password.value === "" || confirmPassword.value === "") {
        const getAlert = document.getElementById(emptyFieldId)
        const empty = "Please fill out all fields!"
        if (getAlert?.textContent === empty) {
            return
        }
        return showError(empty, emptyFieldId)

    }
    if (confirmPassword.value !== password.value) {
        const getAlert = document.getElementById(passwordMatch)
        const noMatch = "Passwords don't match!"
        if (getAlert?.textContent === noMatch) {
            return
        }
        return showError(noMatch, passwordMatch)
    }

    const data = {
        username: username.value,
        password: password.value
    }
    console.log(data)
    const apiCall = await fetch('/api/users/signup', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    if (!apiCall.ok) {
        return showError('Username taken!', "takenUsername")
    }
    alert('Account created')
    window.location.assign('/notes')
}


function clearError() {
    const pass = document.getElementById(passwordMatch)
    const emptyInput = document.getElementById(emptyFieldId)
    const takenUsername = document.getElementById("takenUsername")
    if (pass) {
        pass.remove()
    }
    if (emptyInput) {
        emptyInput.remove()
    }
    if (takenUsername) {
        takenUsername.remove()
    }
}

function showError(error, id) {
    const inputBox = document.getElementById('inputBox')
    const alert = document.createElement('p')
    alert.textContent = error
    alert.setAttribute('id', id)
    alert.setAttribute('class', 'text-center text-red-600')
    inputBox.appendChild(alert)
    return
}

function check() {
    console.log('i work')
}

async function userLogin() {
    const username = document.getElementById('username')
    const password = document.getElementById('password')
    const data = {
        username: username.value,
        password: password.value
    }
    const apiCall = await fetch('/api/users/login', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    if (!apiCall.ok) {
        return showError('Invalid login!')
    }
    window.location.assign('/notes')
}