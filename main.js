//catch values
const billAmount = document.querySelector(".inputfirst");
const numberOfPeople = document.querySelector(".inputsecond");
const customTipPercentage = document.querySelector(".cust");
const billTipAmount = document.querySelector(".billTipAmount");
const tipStartTipValue = document.querySelector(".dollars");
const billTotalPerPerson = document.querySelector(".dollarssec");
const buttons = document.querySelectorAll(".btn");
const customTip = document.querySelector(".custom");
const reset = document.querySelector(".reset");
const cantZero = document.querySelector(".hiddendiv");
const differentBtn = document.querySelector(".different");
let peopleValue = 1;
let billValue = 0.0;
let tipValue = 0.15;
tipStartTipValue.innerHTML = "$" + (0.0).toFixed(2);
billTotalPerPerson.innerHTML = "$" + (0.0).toFixed(2);

billAmount.addEventListener("input", billAmountFun);
numberOfPeople.addEventListener("input", peopleValueFun);

function billAmountFun() {
  billValue = parseFloat(billAmount.value);
  calculateTip();
}
function peopleValueFun() {
  peopleValue = parseFloat(numberOfPeople.value);
  calculateTip();
}
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    const activebtn = document.querySelector(".active_btn");
    if (activebtn) {
      activebtn.classList.toggle("active_btn");
    }
    buttons[i].classList.toggle("active_btn");
    buttons[i].classList.remove("normal_btn");
    tipValue = parseInt(buttons[i].innerHTML) / 100;
    customTip.value = "custom";

    calculateTip();
  });
}
customTip.addEventListener("input", () => {
  tipValue = customTip.value / 100;
  buttons.forEach((e) => {
    e.classList.add("normal_btn");
  });
  calculateTip();
});
function calculateTip() {
  if (peopleValue >= 1) {
    let tipAmount = (tipValue * billValue) / peopleValue;
    let total = (billValue + tipAmount) / peopleValue;
    tipStartTipValue.innerHTML = "$" + tipAmount.toFixed(2);
    billTotalPerPerson.innerHTML = "$" + total.toFixed(2);
  }
}
numberOfPeople.addEventListener("input", () => {
  if (numberOfPeople.value == "0") {
    cantZero.classList.toggle("inline");
  } else {
    cantZero.classList.remove("inline");
  }
});

reset.addEventListener("click", (e) => {
  billAmount.value = "0";
  numberOfPeople.value = "1";
  tipStartTipValue.innerHTML = "$" + "0.00";
  billTotalPerPerson.innerHTML = "$" + "0.00";
  buttons.forEach((e) => {
    e.classList.remove("active_btn");
  });
  differentBtn.classList.add("active_btn");
  customTip.value = "custom";
});
