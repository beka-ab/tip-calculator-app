const billInput = document.querySelector(".bill_input");
const buttons = document.querySelectorAll(".btn");
const numberOfPeople = document.querySelector(".number_of_people");
let tipAmount = document.querySelector(".tipamount_cash");
let total = document.querySelector(".total_cash");
const customPercentage = document.querySelector(".custompercentage");
const reset = document.querySelector(".reset_btn");
const hiddenBillSpan = document.querySelector(".hidden_bill_alert");
const hiddenPeopleSpan = document.querySelector(".hidden_people_alert");
const hiddenPeopleSpanZero = document.querySelector(
  ".hidden_people_alert_Zero"
);
console.log(hiddenPeopleSpanZero);
let totalValue = 0.0;
let tipPercentage = 0.15;
let billvalue = 0.0;
let people = 1;
let totaltip = 0.0;
let custom = 0.0;

//catch tip percentages
buttons.forEach((e) => {
  e.addEventListener("click", () => {
    tipPercentage = parseFloat(e.innerHTML) / 100;
    customPercentage.value = "";
    let activeBtn = document.querySelector(".active");
    if (activeBtn) {
      activeBtn.classList.toggle("active");
    }
    e.classList.toggle("active");
    e.classList.remove("non-active");
    calculate();
  });
});
customPercentage.addEventListener("input", () => {
  custom = customPercentage.value / 100;
  calculate();
});
customPercentage.oninput = function () {
  if (this.value.length > 4) {
    this.value = this.value.slice(0, 4);
  }
};
numberOfPeople.oninput = function () {
  if (this.value.length > 4) {
    this.value = this.value.slice(0, 4);
    hiddenPeopleSpan.classList.add("inline");
  } else {
    hiddenPeopleSpan.classList.remove("inline");
  }
};
billInput.oninput = function () {
  if (this.value.length > 4) {
    this.value = this.value.slice(0, 4);
    hiddenBillSpan.classList.add("inline");
  } else {
    hiddenBillSpan.classList.remove("inline");
  }
};
numberOfPeople.addEventListener("input", () => {
  if (numberOfPeople.value <= 0) {
    hiddenPeopleSpanZero.classList.toggle("inline");
  }
  console.log("people");
});
billInput.addEventListener("input", () => {
  billvalue = billInput.value;
  calculate();
});
numberOfPeople.addEventListener("input", () => {
  people = numberOfPeople.value;
  calculate();
});
function calculate() {
  if (billvalue > 0 && people > 0) {
    if (tipPercentage > 0.01) {
      totaltip = (billvalue * tipPercentage) / people;
      tipAmount.innerHTML = "$" + totaltip.toFixed(2);
      totalValue = parseFloat(totaltip) + parseFloat(billvalue/people);
      total.innerHTML = "$" + totalValue.toFixed(2);
    } else {
      totaltip = (billvalue * custom) / people;
      tipAmount.innerHTML = "$" + totaltip.toFixed(2);
      totalValue = parseFloat(totaltip) + parseFloat(billvalue/people);
      total.innerHTML = "$" + totalValue.toFixed(2);
      console.log(totaltip + billvalue);
    }
  } else {
    tipAmount.innerHTML = "$" + "0.00";
    total.innerHTML = "$" + "0.00";
  }
}
reset.addEventListener("click", () => {
  billInput.value = "";
  numberOfPeople.value = 1;
  customPercentage.value = "";
  buttons.forEach((e) => {
    e.classList.add("non-active");
  });
  tipAmount.innerHTML = "$" + "0.00";
  total.innerHTML = "$" + "0.00";
  hiddenBillSpan.classList.remove("inline");
  hiddenPeopleSpan.classList.remove("inline");
  tipPercentage = 0;
});
