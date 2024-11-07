let form = document.querySelector("form")

const myForm = (e) => {
    let firstName = document.querySelector("#firstName").value
    let lastName = document.querySelector("#lastName").value
    let email = document.querySelector("#email").value
    let result = document.querySelector("#result")

    e.preventDefault()
    const myUser ={
        firstName: firstName,
        lastName: lastName,
        email: email
    }

    result.innerHTML = `<p>First Name: ${myUser.firstName}</p><p>Last Name: ${myUser.lastName}</p><p>Email: ${myUser.email}</p>`
}

form.addEventListener("submit", myForm)