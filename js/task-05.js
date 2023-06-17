const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
let name = ("");

function updateName() {
if (nameInput.value !== "") {
    nameOutput.textContent = nameInput.value;
} else {
    nameOutput.textContent = "Anonymus";
}
}

nameInput.addEventListener("input", updateName);