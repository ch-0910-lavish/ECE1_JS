// Get elements
const heading = document.getElementById("main-heading");
const paragraph = document.getElementById("main-paragraph");
const inputField = document.getElementById("text-input");

const changeHeadingBtn = document.getElementById("change-heading");
const changeBgBtn = document.getElementById("change-bg");
const increaseFontBtn = document.getElementById("increase-font");
const toggleParagraphBtn = document.getElementById("toggle-paragraph");

// Event: Change heading text
changeHeadingBtn.addEventListener("click", () => {
    const newText = inputField.value.trim();
    if (newText) {
        heading.textContent = newText;
    } else {
        alert("Please enter some text!");
    }
});

// Event: Change background color randomly
changeBgBtn.addEventListener("click", () => {
    const colors = ["#f4f4f4", "#ffcccc", "#ccffcc", "#ccccff", "#ffffcc"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

// Event: Increase font size of heading
increaseFontBtn.addEventListener("click", () => {
    let currentSize = window.getComputedStyle(heading).fontSize;
    let newSize = parseInt(currentSize) + 5;
    heading.style.fontSize = newSize + "px";
});

// Event: Show/Hide paragraph
toggleParagraphBtn.addEventListener("click", () => {
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
});