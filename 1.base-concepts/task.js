"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;

  if (d < 0) {
    arr = [];
  }

  if (d === 0) {
    arr = [-b / (2 * a)];
  }

  if (d > 0) {
    arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent / 100;
  let monthPercent = percent / 12;
  let loanBody = amount - contribution;
  let monthPayment =
    loanBody *
    (monthPercent + monthPercent / ((1 + monthPercent) ** countMonths - 1));

  let sum = monthPayment * countMonths;
  let sumRounded = sum.toFixed(2);

  return Number(sumRounded);
}
