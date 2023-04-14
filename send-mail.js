const form = document.getElementById("contact-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
  const mailto = "mailto:youremail@example.com?subject=Contact%20form&body=" + body;
  window.location.href = mailto;
}
