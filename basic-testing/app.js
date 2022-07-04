import { extractNumbers } from './src/parser.js';
import {
  validateStringNotEmpty,
  validateNumber
} from './src/util/validation.js';
import { add } from './src/math.js';
import { transformToNumber } from './src/util/numbers.js';

let form;
let output;

if (typeof document !== 'undefined') {
  form = document.querySelector('form');
  output = document.getElementById('result');
  form.addEventListener('submit', formSubmitHandler);
}

let resultText = '';
let result = '';

function formSubmitHandler(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const numberInputs = extractNumbers(formData);
  
  try {
    getValidNumbers(numberInputs)
  } catch (error) {
    result = error.message;
  }
  valudateInput(result);
  output.textContent = resultText;
}

export function valudateInput(res) {
  
  if (res === 'invalid') {
    resultText = 'Invalid input. You must enter valid numbers.';
  } else if (res !== 'no-calc') {
    resultText = 'Result: ' + res;
  }
  return resultText;
}

export function getValidNumbers(array) {
  const numbers = [];
    for (const element of array) {
      validateStringNotEmpty(element);
      const number = transformToNumber(element);
      validateNumber(number);
      numbers.push(number);
    }
    result = add(numbers).toString();
    return result;
}