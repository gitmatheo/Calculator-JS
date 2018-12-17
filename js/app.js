document.addEventListener("DOMContentLoaded", function() {
  const displayText = document.getElementById("display-bottom-text");
  const displayTopText = document.getElementById("display-top-text");
  const operator = document.getElementsByClassName("operator");
  const number = document.getElementsByClassName("number");
  const negative = document.getElementById("k18");

  function getHistory() {
    return displayTopText.innerText;
  }

  function printHistory(num) {
    displayTopText.innerText = num;
  }

  function getOutput() {
    return displayText.innerText;
  }

  function printOutput(num) {
    if (num == "") {
      displayText.innerText = num;
    } else {
      displayText.innerText = getFormattedNumber(num);
    }
  }

  function getFormattedNumber(num) {
    if (num == "-") {
      return "";
    }
    let n = num;
    let value = n.toLocaleString("en");
    return value;
  }

  function reverseNumberFormat(num) {
    return num.replace(/,/g, "");
  }

  for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function() {
      if (this.id == "clear") {
        printHistory("");
        printOutput("");
      } else if (this.id == "backspace") {
        let output = reverseNumberFormat(getOutput()).toString();
        if (output) {
          // if output has a value
          output = output.substr(0, output.length - 1);
          printOutput(output);
        }
      } else {
        let output = getOutput();
        let history = getHistory();
        if (output == "" && history != "") {
          if (isNaN(history[history.length - 1])) {
            history = history.substr(0, history.length - 1);
          }
        }
        if (output != "" || history != "") {
          output = output == "" ? output : reverseNumberFormat(output);
          history += output;
          if (this.id == "=") {
            let result = eval(history);
            printOutput(result);
            printHistory("");
          } else if (this.id == ".") {
            output = output + this.id;
            printOutput(output);
          } else {
            history += this.id;
            printHistory(history);
            printOutput("");
          }
        }
      }
    });
  }

  for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function() {
      console.log("number " + this.id);
      let output = reverseNumberFormat(getOutput());

      if (output != NaN) {
        //if output is a number
        output = output + this.id;
        printOutput(output);
      }
    });
  }

  function negativeToggle() {
    if (getOutput()[0] == "-") {
      printOutput(getOutput().substring(1));
    } else {
      printOutput("-" + getOutput());
    }
  }

  negative.addEventListener("click", negativeToggle);
});
