document.getElementById("contactForm").addEventListener("submit", function (e) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (name === "" || email === "" || message === "") {
    alert("Please fill all fields.");
    e.preventDefault(); // Stop form from submitting
    return;
  }

  if (!email.match(emailPattern)) {
    alert("Please enter a valid email.");
    e.preventDefault();
    return;
  }

  alert("Form submitted successfully!");
});
