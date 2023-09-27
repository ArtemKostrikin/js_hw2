"use strict";

const positive = Number.parseFloat(prompt("Введите положительное число: "));
const negative = Number.parseFloat(prompt("Введите отрицательное число: "));

if (positive > 0 && negative < 0) {
  console.log("Все значения верные.");
} else {
  console.log("Одно или более значений некорректно.");
}

// Простите стёр задачу и позже заметил
