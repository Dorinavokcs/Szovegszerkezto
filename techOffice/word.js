function logSelection(event) {
    const selection = event.target.value.substring(
      event.target.selectionStart,
      event.target.selectionEnd,
    );
    console.log(selection);
  }
const textarea = document.querySelector("#editor");
textarea.addEventListener("select", logSelection);
