class UI {
    constructor() {

    }
    // show alert message
    showAlert(message, className) {
        // clear any remaining alerts
        this.clearAlert();
        const div = document.createElement('div');
        // add classes
        div.className = className;
        // add text
        div.appendChild(document.createTextNode(message));
        // append it to the dom 
        // get a parent
        const card = document.querySelector('.card');
        const cardBody = document.querySelector('.card-body');
        // insert alert
        card.insertBefore(div, cardBody);
        // timeout after 3 secs
        setTimeout(() => {
            this.clearAlert()
        }, 3000)
    }
    // clear alert message
    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }
    }
}
// Get the modal
window.onload = function () {
    const modal = document.getElementById('myModal');

    // Get the button that opens the modal
    const btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('.mssgicon').toggleClass('fn');
    });

});
CKEDITOR.replace('editor1', {
    height: '80px'
});
