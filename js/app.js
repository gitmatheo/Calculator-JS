const key = Array.from(document.getElementsByClassName("key"));
const displayText = document.getElementById("display-bottom-text");

const operate = () => {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b = 0) => {
    if (b === 0) throw new Error("Cannot divide by 0");
    return a / b;
  };
  return { add, subtract, multiply, divide };
};

function populate() {
  key.forEach(function(e) {
    e.addEventListener("click", function() {
      let show = "";
      show += e.innerText;
      display(show);
    });
  });
}

function display(txt) {
  displayText.innerText = txt;
}

display(populate());

// window.addEventListener("load", function() {

// });
