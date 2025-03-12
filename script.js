// script.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#contact form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        let name = document.querySelector("input[type='text']").value;
        let email = document.querySelector("input[type='email']").value;
        let message = document.querySelector("textarea").value;

        if(name && email && message) {
            alert(`Thank you, ${name}! Your message has been received.`);
            form.reset();
        } else {
            alert("Please fill out all fields.");
        }
    });
});
