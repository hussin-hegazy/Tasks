// Add this to script.js
document.addEventListener("DOMContentLoaded", function() {
    console.log("JavaScript is working!");

    // Task 2: Dynamic Content Updates
    const aboutText = document.getElementById("aboutText");
    const updateAboutBtn = document.getElementById("updateAboutBtn");

    updateAboutBtn.addEventListener("click", function() {
        aboutText.textContent = "Fun Fact: I love coding and exploring new tech!";
        aboutText.style.color = "blue";
    });

    // Task 3: Smooth Scrolling and Active Navigation
    document.querySelectorAll(".Header ul li a").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Highlighting active section in navigation
    window.addEventListener("scroll", function() {
        let fromTop = window.scrollY;
        document.querySelectorAll(".Header ul li a").forEach(link => {
            let section = document.querySelector(link.getAttribute("href"));
            if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    });

    // Task 4: Form Validation
    const contactForm = document.getElementById("contactForm");
    const formFeedback = document.getElementById("formFeedback");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        let name = document.getElementById("Name").value;
        let email = document.getElementById("Email").value;
        let message = document.getElementById("Message").value;

        formFeedback.textContent = "";
        if (name === "" || email === "" || message === "") {
            formFeedback.textContent = "All fields are required!";
            formFeedback.style.color = "red";
        } else if (!email.includes("@")) {
            formFeedback.textContent = "Please enter a valid email address.";
            formFeedback.style.color = "red";
        } else {
            formFeedback.textContent = "Thank you for your message!";
            formFeedback.style.color = "green";
            contactForm.reset();
        }
    });

    // Task 5: Toggle Light/Dark Mode
    const toggleThemeBtn = document.createElement("button");
    toggleThemeBtn.textContent = "Toggle Theme";
    document.body.prepend(toggleThemeBtn);

    toggleThemeBtn.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
    });

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    // Task 9: Scroll-to-Top Button
    const scrollToTopBtn = document.getElementById("scrollToTop");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 200) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
