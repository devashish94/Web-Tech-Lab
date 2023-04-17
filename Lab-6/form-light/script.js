
var form = document.getElementById("registration-form");
var regNumberInput = document.getElementById("reg-number");
var sectionRadios = document.getElementsByName("section");
var yearRadios = document.getElementsByName("year");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  clearErrorMessages();
  var regNumber = regNumberInput.value.trim();
  if (regNumber === "" || regNumber != 7) {
    showError(regNumberInput, "Registration Number is required");
    return;
  }
  alert("Form submitted successfully!");
  form.reset();
});

function showError(element, message) {
  element.classList.add("input-error");
  var errorElement = document.createElement("div");
  errorElement.classList.add("error-message");
  errorElement.textContent = message;
  element.parentNode.appendChild(errorElement);
}
