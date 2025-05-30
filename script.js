function calculate() {
  const display = document.getElementById("display");
  const expression = document.getElementById("expression");

  try {
    const result = math.evaluate(display.value);
    expression.innerText = display.value; // show expression above
    display.value = result; // show result in main display
    adjustFontSize();
  } catch (e) {
    display.value = "Error";
  }
}

function adjustFontSize() {
  const display = document.getElementById("display");
  const length = display.value.length;

  if (length >= 25) return;

  if (length > 15) {
    display.style.fontSize = "1.2rem";
  } else if (length > 10) {
    display.style.fontSize = "1.5rem";
  } else {
    display.style.fontSize = "2rem";
  }
}

const toggleBtn = document.getElementById("darkModeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Change button text/icon
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.innerText = "☀️ Light Mode";
  } else {
    toggleBtn.innerText = "🌙 Dark Mode";
  }
});
