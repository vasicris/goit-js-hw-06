const validationInput = document.querySelector("#validation-input");

function updateInput() {
    const enteredLength = validationInput.value.length;
    const requiredLength = validationInput.dataset.length;
  
    if (enteredLength == requiredLength) {
      validationInput.classList.remove("invalid");
      validationInput.classList.add("valid");
    } else {
      validationInput.classList.remove("valid");
      validationInput.classList.add("invalid");
    }
  }
  
  validationInput.addEventListener("blur", updateInput);