const admissionForm = document.querySelector(".admission-form");

if (admissionForm) {

    admissionForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert("Admission enquiry submitted successfully!");

        admissionForm.reset();

    });

}

const loginForm = document.querySelector(".login-box form");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        let username = loginForm.querySelector('input[type="text"]').value;
        let password = loginForm.querySelector('input[type="password"]').value;

        if (username === "" || password === "") {

            alert("Please enter username and password.");

        } else {

            alert("Login Successful!");

            loginForm.reset();

        }

    });

}

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link){

    link.addEventListener("click", function(event){

        event.preventDefault();

        let section = document.querySelector(this.getAttribute("href"));

        if(section){

            section.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

window.addEventListener("scroll", function(){

    let sections = document.querySelectorAll("section");

    let current = "";

    sections.forEach(function(section){

        let sectionTop = section.offsetTop - 100;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(function(link){

        link.classList.remove("active");

        if(link.getAttribute("href") == "#" + current){

            link.classList.add("active");

        }

    });

});
