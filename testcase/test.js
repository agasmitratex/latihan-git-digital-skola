// Agas Khaerul Fajar
// QAE Batch 3, Sesi 4, Tugas 3
const readline = require('readline-sync');

function calculator(operator, num1, num2) {
  let result = 0;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        result = 'Error: Pembagian dengan nol';
      }
      break;
    default:
      result = 'Operator tidak valid';
  }
  return result;
}

const num1 = parseFloat(readline.question('Masukkan angka pertama: '));
const operator = readline.question('Masukkan operator (+, -, *, /): ');
const num2 = parseFloat(readline.question('Masukkan angka kedua: '));

const result = calculator(operator, num1, num2);
console.log(`Hasil: ${result}`);