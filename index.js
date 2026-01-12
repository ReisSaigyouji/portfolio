document.addEventListener("DOMContentLoaded", function() {

    const btn = document.getElementById("Btn");
    const thanks = document.getElementById("Thanks");

    btn.addEventListener("click", function(event) {
        event.preventDefault();
        thanks.style.display = "block";
        document.querySelector(".contact-form").reset();

        setTimeout(() => {
            thanks.style.display = "none";
        }, 3000);
    });

});