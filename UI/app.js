$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('.mssgicon').toggleClass('fn');
    });

});
CKEDITOR.replace('editor1', {
    height: '80px'	
    });
    // modal js
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// instantiate UI
const ui = new UI();
//  cancel function
cancelMessage=()=>{
    console.log('it haf run');
}
// add event listener for submit button on login
login = () => {
    document.getElementById('loginForm').addEventListener('submit', submitForm = (e) => {
        // get form values
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        // instantiate a book
        const login = new Login(email, password);

        // instantiate UI
        const ui = new UI();

        // validate the fields
        if (email === "" || password === "") {
            // alert('Please fill in some details');
            // error alert
            ui.showAlert('Please fill in all fields', 'alert danger')
        } else {
            ui.showAlert('Login Succesfully', 'alert success')
            //do something here
            console.log('its working', login);
        }
        e.preventDefault();
    })
}
register = () => {
    //  add event listener for submit button on register
    document.getElementById('registerForm').addEventListener('submit', registerSubmit = (e) => {
        // get form values
        const email = document.getElementById('email').value;
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const phone = document.getElementById('phone').value;
        const country = document.getElementById('country').value;
        const gender = document.getElementById('gender').value;
        const password = document.getElementById('password').value;
        const cnfpassword = document.getElementById('cnfpassword').value;

        // instantiate a book
        const register = new Register(email, firstName, lastName, phone, country, gender, password, cnfpassword);
        // validate the fields
        if (email === " " || firstName === " " || lastName === "" || phone === "" || country === "" || gender === "" || cnfpassword === "") {
            // error alert
            ui.showAlert('Please fill in all fields', 'alert danger')
        } else {
            if (password != cnfpassword) {
                // showAlert error
                ui.showAlert('Password do not match', 'alert danger');
            } else {
                //do something here
                ui.showAlert('Registered Sucesfully', 'alert success');
                console.log('its working', register);
            }

        }
        e.preventDefault();
    })
}
document.getElementById('loginEmail').addEventListener('blur', validateloginEmail);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('firstName').addEventListener('blur', validatefirstName);
document.getElementById('lastName').addEventListener('blur', validatelastName);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validatefirstName() {
    const firstName = document.getElementById('firstName');
    const re = /^[a-zA-Z]{2,15}$/
    if (!re.test(firstName.value)) {
        ui.showAlert('First Name must be between 2 - 15 letters', 'alert danger');
        firstName.classList.add('border-red');
    } else {
        firstName.classList.replace('border-red', 'border-green');
    }
}

function validatelastName() {
    const lastName = document.getElementById('lastName');
    const re = /^[a-zA-Z]{2,15}$/
    if (!re.test(lastName.value)) {
        ui.showAlert('Last Name must be between 2 - 15 letters', 'alert danger');
        lastName.classList.add('border-red');
    } else {
        lastName.classList.replace('border-red', 'border-green');
    }
}

function validatePhone() {
    const phone = document.getElementById('phone');
    const re = /^[0-9]{11}$/
    if (!re.test(phone.value)) {
        ui.showAlert('Phone number must be between 11 numbers', 'alert danger');
        phone.classList.add('border-red');
    } else {
        phone.classList.replace('border-red', 'border-green');
    }
}
function validateEmail() {
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)([a-zA-Z]{2,5})$/
    if (!re.test(email.value)) {
        ui.showAlert('Use a valid email', 'alert danger');
        email.classList.add('border-red');
    } else {
        email.classList.replace('border-red', 'border-green');
    }
}
function validateloginEmail() {
    const email = document.getElementById('loginEmail');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)([a-zA-Z]{2,5})$/
    if (!re.test(email.value)) {
        ui.showAlert('Use a valid email', 'alert danger');
        email.classList.add('border-red');
    } else {
        email.classList.replace('border-red', 'border-green');
    }
}