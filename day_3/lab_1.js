alert("Welcome to my first site");

function exchangeEgyPound(pounds) {
  return (pounds / 31.5).toFixed(2).replace(/\.00$/, "");
}

function getEvenOddSequence() {
  let output = [];
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      output.push("I'm even");
    } else {
      output.push(i);
    }
  }
  return output.join(" ");
}

function equalFunc(a, b, c) {
  if (a === b && b === c) return 3;
  if (a === b || b === c || a === c) return 2;
  return 0;
}

function validateUser(firstName, mobileNumber, birthYear, color) {
  if (!/^[A-Za-z]+$/.test(firstName)) {
    return {
      valid: false,
      message: "First name should contain only letters",
    };
  }
  const egyptMobile = /^01[0125][0-9]{8}$/;
  if (!egyptMobile.test(mobileNumber)) {
    return {
      valid: false,
      message:
        "Mobile number should be a valid Egyptian number (11 digits, starting with 010/011/012/015)",
    };
  }
  const year = Number(birthYear);
  const currentYear = new Date().getFullYear();
  if (isNaN(year) || year < 1900 || year > currentYear) {
    return {
      valid: false,
      message: `Birth year should be a number between 1900 and ${currentYear}`,
    };
  }
  if (!["red", "green", "blue"].includes(color.toLowerCase())) {
    return {
      valid: false,
      message: "Color should be red, green, or blue",
    };
  }
  const age = currentYear - year;
  return {
    valid: true,
    message: `Welcome dear ${firstName} your age is ${age} your mobile is ${mobileNumber}`,
    color: color.toLowerCase(),
    age: age,
  };
}

function displayOutput(html) {
  document.getElementById("outputContent").innerHTML = html;
}

function handleExchange() {
  let input = prompt("Enter amount in Egyptian pounds (e.g. 2000):");
  if (input === null || input.trim() === "") {
    displayOutput("No amount entered.");
    return;
  }
  let num = Number(input);
  if (isNaN(num) || num <= 0) {
    displayOutput("Please enter a valid positive number.");
    return;
  }
  let dollars = exchangeEgyPound(num);
  displayOutput(
    `<strong>${num} EGP</strong> = <strong>${dollars} USD</strong><br><span style="font-size:0.9rem; color:#3f5570;">(rate: 1 USD = 31.5 EGP)</span>`,
  );
}

function handleEvenOdd() {
  let sequence = getEvenOddSequence();
  displayOutput(
    `<span style="font-family: monospace; font-size: 1.2rem;">${sequence}</span>`,
  );
}

function handleUserInfo() {
  let firstName = prompt("Enter your first name:");
  if (firstName === null) return;
  let birthYear = prompt("Enter your birth year (e.g. 1999):");
  if (birthYear === null) return;
  let mobileNumber = prompt(
    "Enter your mobile number (11 digits, e.g. 01011111110):",
  );
  if (mobileNumber === null) return;
  let color = prompt("Choose a color: red, green, or blue");
  if (color === null) return;

  let result = validateUser(firstName, mobileNumber, birthYear, color);

  if (!result.valid) {
    displayOutput(`<span style="color: #b00020;">❌ ${result.message}</span>`);
    return;
  }

  let colorStyle = result.color;
  let textColor =
    colorStyle === "red" || colorStyle === "blue" ? "white" : "black";
  let bgColor = colorStyle;
  displayOutput(`
      <div style="color: ${textColor}; background-color: ${bgColor}; padding: 0.8rem 1.2rem; border-radius: 16px; display: inline-block;">
        ${result.message}
      </div>
      <div style="margin-top: 0.5rem; font-size: 0.9rem;">✅ color chosen: <span style="font-weight:bold; color:${bgColor};">${colorStyle}</span></div>
    `);
}

function handleEqualFunc() {
  let a = prompt("Enter first integer (a):");
  if (a === null) return;
  let b = prompt("Enter second integer (b):");
  if (b === null) return;
  let c = prompt("Enter third integer (c):");
  if (c === null) return;

  let intA = parseInt(a, 10);
  let intB = parseInt(b, 10);
  let intC = parseInt(c, 10);

  if (isNaN(intA) || isNaN(intB) || isNaN(intC)) {
    displayOutput("❌ Please enter valid integers.");
    return;
  }

  let equalCount = equalFunc(intA, intB, intC);
  displayOutput(
    `equalFunc(${intA}, ${intB}, ${intC}) → <strong>${equalCount}</strong>`,
  );
}

function handleSumUntil() {
  let total = 0;
  let values = [];
  let stop = false;

  while (!stop) {
    let input = prompt(
      `Enter a number (0 or sum > 50 stops)\nCurrent sum: ${total}\nEntered: ${values.join(", ") || "none"}`,
    );
    if (input === null) {
      if (values.length === 0) {
        displayOutput("No values entered. Cancelled.");
        return;
      }
      break;
    }
    let num = Number(input);
    if (isNaN(num)) {
      alert("Please enter a valid number.");
      continue;
    }
    if (num === 0) {
      stop = true;
      continue;
    }
    total += num;
    values.push(num);
    if (total > 50) {
      stop = true;
    }
  }

  alert(`Total sum = ${total}`);
  displayOutput(
    `📊 Total sum: <strong>${total}</strong><br><span style="font-size:0.9rem;">Entered values: ${values.join(", ") || "none"}</span>`,
  );
}

function handleHeadingLoop() {
  let message = prompt("Enter a message to display in headings (H1–H6):");
  if (message === null || message.trim() === "") {
    displayOutput("No message entered.");
    return;
  }
  let container = document.createElement("div");
  container.className = "heading-demo";
  for (let level = 1; level <= 6; level++) {
    let heading = document.createElement(`h${level}`);
    heading.textContent = message;
    container.appendChild(heading);
  }
  document.getElementById("outputContent").innerHTML = "";
  document.getElementById("outputContent").appendChild(container);
}

document
  .getElementById("exchangeBtn")
  .addEventListener("click", handleExchange);
document.getElementById("evenOddBtn").addEventListener("click", handleEvenOdd);
document
  .getElementById("userInfoBtn")
  .addEventListener("click", handleUserInfo);
document
  .getElementById("bonusEqualBtn")
  .addEventListener("click", handleEqualFunc);
document
  .getElementById("sumUntilBtn")
  .addEventListener("click", handleSumUntil);
document
  .getElementById("headingLoopBtn")
  .addEventListener("click", handleHeadingLoop);

window.onload = function () {
  displayOutput("Click any button to run a task.");
};
