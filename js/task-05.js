const inputField = document.querySelector("#name-input");
const outputField = document.querySelector("#name-output");

function changeNameOutput(event) {
  const inputValue = event.target.value;
  if (inputValue.length > 0) {
    outputField.innerHTML = inputValue;
    return;
  }
    outputField.innerHTML = "Anonymous";
}

inputField.addEventListener("input", changeNameOutput);