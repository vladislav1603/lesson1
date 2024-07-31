
function App() {
  let input, number, str;
  str = "number 1:";
  while (true) {
      input = prompt(str);
      if ((number = +input) !== parseFloat(input) || !Number.isFinite(number))
          alert("введено не число");
      else break;
  }
  let num1 = number;

  str = "number 2:";
  while (true) {
      input = prompt(str);
      if ((number = +input) !== parseFloat(input) || !Number.isFinite(number))
          alert("введено не число");
      else break;
  }
  let num2 = number;

  if (num1 > num2) {
      alert("Первое число больше второго");
  }
  else if (num1 < num2) {
      alert("Второе число больше первого");
  }
  else {
      alert("числа равны");
  }
}

export default App;