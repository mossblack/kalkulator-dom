const value1 = document.querySelector('.value1');
const value2 = document.querySelector('.value2');
const result = document.querySelector('.result');
const reset = document.querySelector('.reset');
const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', function(e) {
  const x = parseFloat(value1.value);
  const y = parseFloat(value2.value);
  let resultCal = 0;
  const operator = e.target.getAttribute('value');

  if (operator === '+') {
    resultCal = x + y;
    result.textContent = resultCal;
  } else if (operator === '-') {
    resultCal = x - y;
    result.textContent = resultCal;
  } else if (operator === '*') {
    resultCal = x * y;
    result.textContent = resultCal;
  } else if (operator === '/') {
    resultCal = x / y;
    result.textContent = resultCal;
  } else if (e.target.className == 'reset') {
    result.textContent = 'Hasil';
  }
});