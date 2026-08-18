const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event){

    event.preventDefault();


    // Gets the values entered by the user from the form fields
    // querySelector is used because the inputs do not have their own IDs
    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector("textarea").value.trim();


    // Checks if any field is empty
    if(name === "" || email === "" || message === ""){

        // Shows a warning message if information is missing
        alert(
            "WARNING!\n\n" +
            "Please complete all fields before submitting."
        );

        // Stops the code from continuing
        return;
    }


    // Checks if the email contains basic email formatting
    if(!email.includes("@") || !email.includes(".")){

        // Shows an error message if the email is invalid
        alert(
            "INVALID EMAIL!\n\n" +
            "Please enter a valid email address."
        );

        // Stops the code from continuing
        return;
    }


    // Displays a success message after all validation checks pass
    alert(
        "EXECUTE COMPLETE!\n\n" +
        "Thank you, " + name + "!\n" +
        "Your message has been sent successfully."
    );


    // Clears all input fields after successful submission
    form.reset();

});