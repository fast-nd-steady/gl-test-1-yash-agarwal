let name = document.getElementById('name');
let email = document.getElementById('email');
let password = document.getElementById('password');
let btn = document.getElementById("submit-btn");

function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
}
function containsNumber(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= '0' && str[i] <= '9') {
            return true
        }
    }
    return false
}


btn.onclick = (e) => {
    e.preventDefault();

    if (name.value.length < 4) {
        alert("name should be atleast be 4 char");
    }
    if (!email.value.toString().includes('@')) {
        alert("invalid email");
    }

    if (password.value.length < 6) {
        alert("password should be atleast 6 char");
    } else if (!containsSpecialChars(password.value)) {
        alert("password should contain atleast 1 shecial char");
    } else if (!containsNumber(password.value)) {
        alert("password showld contain atleasr 1 number");
    }

}