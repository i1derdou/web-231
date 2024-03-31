/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: David Clemens
      Date:   2024-03-24

      Filename: project02-02.js
 */


// Verify that the form fields have all been filled out.
function verifyForm() {

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  if (name != '' && email != '' && phone != '') {

    // If all of the fields are filled out, respond with an alert.
    window.alert('Thank you!');

  } else {

    // If any of the form fields are empty, respond with an alert.
    window.alert('Please fill in all fields');

  }

}

/* Event listener that waits for the document to load because the script is included
 at the top of the page and then listens for the submit button to be clicked. */
window.addEventListener("DOMContentLoaded", (event) => {

  const el = document.getElementById('submit');

  if (el) {

    el.addEventListener('click', verifyForm, false);

  }

});

