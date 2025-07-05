const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';  

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const action = button.getAttribute('data-action');

    if (action === 'clear') {
      currentInput = '';
      display.textContent = '0';
    } else if (action === '=') {
      try {
        //calculate the input and display it
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
      } catch {
        display.textContent = 'Error';
        currentInput = '';
      }
    } else {
      //add number or operator to the input
      currentInput += action;
      display.textContent = currentInput;
    }
  });
});