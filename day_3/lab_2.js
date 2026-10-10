let showDateAndTime = document.getElementById("btn_showDateAndTime");
let opeAdvertisingWindow = document.getElementById("btn_openWindow");
let dateTime = document.getElementById("dateTime");
let userInfo = document.getElementById("userInfo");
showDateAndTime.addEventListener(
  "click",
  () => {
    dateTime.innerHTML += new Date().toLocaleString();
  },
  { once: true },
);

opeAdvertisingWindow.addEventListener("click", () => {
  setTimeout(() => {
    window.open("ad.html", "adWindow", "width=500,height=400");
  }, 3000);
});

const evenNumber = /^\d*[02468]$/;
var input = prompt("Enter number");
if (evenNumber.test(input)) {
  console.log("true");
} else {
  console.log("false");
}

let userName = prompt("Enter Your name");
let phoneNumber = prompt("Enter the phone number");
let mobileNumber = prompt("Enter the mobile number");
let email = prompt("Enter your email");
let color = prompt("Enter the color");

const nameRegExp = /^[A-Za-z]+$/;
const phoneNumberRegExp = /^\d{8}$/;
const egyptMobile = /^01[0125][0-9]{8}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateUser(userName, phoneNumber, mobileNumber, email, color) {
  if (!nameRegExp.test(userName)) {
    return "Name should contain only letters";
  }

  if (!phoneNumberRegExp.test(phoneNumber)) {
    return "Phone number should be (8 digits)";
  }

  if (!egyptMobile.test(mobileNumber)) {
    return "Mobile number should be a valid Egyptian number (11 digits, starting with 010/011/012/015)";
  }

  if (!emailRegex.test(email)) {
    return "Email is not valid";
  }

  if (!["red", "green", "blue"].includes(color.toLowerCase())) {
    return "Color should be red, green, or blue";
  }

  userInfo.style.color = color;

  return (
    "Welcome dear " +
    userName +
    "\nYour phone number is " +
    phoneNumber +
    "\nYour mobile number is " +
    mobileNumber +
    "\n Your email is " +
    email +
    "\nYour favorite color is " +
    color
  );
}

userInfo.innerHTML = validateUser(
  userName,
  phoneNumber,
  mobileNumber,
  email,
  color,
);
