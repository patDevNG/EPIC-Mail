// instantiate Epichttp library
const http = new EpicHTTP;

const baseUrl = 'https://jsonplaceholder.typicode.com/';

// instantiate UI
const ui = new UI();

// variables
// login variables
const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');

// register variables
const regfirstName = document.getElementById('firstName');
const reglastName = document.getElementById('lastName');
const regphone = document.getElementById('phone');
const regEmail = document.getElementById('email');
const regcountry = document.getElementById('country');
const reggender = document.getElementById('gender');
const regpassword = document.getElementById('password');
const regcnfpassword = document.getElementById('cnfpassword');

window.onload = () => {
    // validate login process
    loginEmail.addEventListener('blur', validateloginEmail);
    loginPassword.addEventListener('blur', validateloginPassword);
}
window.onload = () => {
    // validate reg process
    regEmail.addEventListener('blur', validateregEmail);
    regfirstName.addEventListener('blur', validatefirstName);
    reglastName.addEventListener('blur', validatelastName);
    regphone.addEventListener('blur', validatePhone);
    regpassword.addEventListener('blur', validateregPassword);
    regcnfpassword.addEventListener('blur', validatecnfPassword);
}

const regUser = {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    address: 'plot 436 arab road kubwa'
}
// get all users
http.get(`${baseUrl}users`)
    .then(data => console.log(data))
    .catch(err => console.log(err));

// get all todods
http.get(`${baseUrl}todos/5`)
    .then(data => console.log(data))
    .catch(err => console.log(err));

//  post user
http.post(`${baseUrl}users`, regUser)
    .then(user => console.log(user))
    .catch(err => console.log(err));

//  update user
http.put(`${baseUrl}users/5`, regUser)
    .then(user => console.log(user))
    .catch(err => console.log(err));


//  cancel function
cancelMessage = () => {
    console.log('it haf run cancel');
}
// add event listener for submit button on login
login = () => {
    document.getElementById('loginForm').addEventListener('submit', submitForm = (e) => {

        // get form values
        const email = loginEmail.value;
        const password = loginPassword.value;
        // instantiate a new login
        const login = new Login(email, password);

        // validate the fields
        if (email === "" || password === "") {
            // error alert
            ui.showAlert('Please fill in all fields', 'alert danger')
        } else {
            ui.showAlert('Login Succesfully', 'alert success')
            //do something here
            //  post user
            http.post(`${baseUrl}users`, login)
                .then(user => console.log(user))
                .catch(err => console.log(err));
            // console.log('its working', user);
        }
        e.preventDefault();
    })
}
register = () => {
    //  add event listener for submit button on register
    document.getElementById('registerForm').addEventListener('submit', registerSubmit = (e) => {
        // get form values
        const email = regEmail.value;
        const firstName = regfirstName.value;
        const lastName = reglastName.value;
        const phone = regphone.value;
        const country = regcountry.value;
        const gender = reggender.value;
        const password = regpassword.value;
        const cnfpassword = regcnfpassword.value;

        // instantiate a new user
        const register = new Register(email, firstName, lastName, phone, country, gender, password, cnfpassword);

        // validate the fields
        if (email === " " || firstName === " " || lastName === "" || phone === "" || country === "" || gender === "" || cnfpassword === "") {
            // error alert
            ui.showAlert('Please fill in all fields', 'alert danger')
        } else {
            //do something here
            ui.showAlert('Registered Sucesfully', 'alert success');
            console.log('its working', register);
        }
        e.preventDefault();
    })
}

// function to validate the email
validateloginEmail = () => {
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)([a-zA-Z]{2,5})$/
    if (!re.test(loginEmail.value)) {
        ui.showAlert('Use a valid email', 'alert danger');
        loginEmail.classList.add('border-red');
    }
    if (loginEmail.value == '') {
        ui.showAlert('This field is required', 'alert danger');
        loginEmail.classList.add('border-red');

    } else {
        loginEmail.classList.replace('border-red', 'border-green');
    }
}
// function to validate password on login
validateloginPassword = () => {
    if (loginPassword.value === "") {
        ui.showAlert('This field is required', 'alert danger')
        loginPassword.classList.add('border-red');
    } else {
        loginPassword.classList.replace('border-red', 'border-green');
    }
}
validatefirstName = () => {
    const re = /^[a-zA-Z]{2,50}$/
    if (!re.test(regfirstName.value)) {
        ui.showAlert('First Name must be more than two letters', 'alert danger');
        regfirstName.classList.add('border-red');
    }
    if (regfirstName.value == '') {
        ui.showAlert('This field is required', 'alert danger');
        regfirstName.classList.add('border-red');
    } else {
        regfirstName.classList.replace('border-red', 'border-green');
    }
}
validatelastName = () => {
    const re = /^[a-zA-Z]{2,50}$/
    if (!re.test(reglastName.value)) {
        ui.showAlert('Last Name must be more than two', 'alert danger');
        reglastName.classList.add('border-red');
    }
    if (reglastName.value == '') {
        ui.showAlert('This field is required', 'alert danger');
        reglastName.classList.add('border-red');
    } else {
        reglastName.classList.replace('border-red', 'border-green');
    }
} // function to validate phone on register
validatePhone = () => {
    const re = /^[0-9]{11}$/
    if (!re.test(regphone.value)) {
        ui.showAlert('Phone number must be between 11 numbers', 'alert danger');
        regphone.classList.add('border-red');
    } else if (regphone.value == '') {
        ui.showAlert('This field is required', 'alert danger');
        regphone.classList.add('border-red');
    } else {
        regphone.classList.replace('border-red', 'border-green');
    }
}
// function to validate password on register
validateregPassword = () => {
    if (regpassword.value === "") {
        ui.showAlert('This field is required', 'alert danger')
        regpassword.classList.add('border-red');
    } else {
        regpassword.classList.replace('border-red', 'border-green');
    }
}
// function to validate confirm password on register
validatecnfPassword = () => {
    if (regcnfpassword.value === "") {
        ui.showAlert('This field is required', 'alert danger')
        regcnfpassword.classList.add('border-red');
    }
    if (regcnfpassword.value !== password.value) {
        ui.showAlert('Password does not match', 'alert danger');
        regcnfpassword.classList.add('border-red');
    } else {
        regcnfpassword.classList.replace('border-red', 'border-green');
    }
}
// function to validate email on register
validateregEmail = () => {
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)([a-zA-Z]{2,5})$/
    if (!re.test(regEmail.value)) {
        ui.showAlert('Use a valid email', 'alert danger');
        regEmail.classList.add('border-red');
    }
    if (regEmail.value == '') {
        ui.showAlert('This field is required', 'alert danger');
        regEmail.classList.add('border-red');

    } else {
        regEmail.classList.replace('border-red', 'border-green');
    }
}