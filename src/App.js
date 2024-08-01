import {useState} from 'react'

function App() {

  let input, text, str;
  str = "text 1:";
  while (true) {
      input = prompt(str);
      if ((text = +input) === parseFloat(input))
          alert("введен не текст");
      else break;
  }
  let num1 = text.toString();

  str = "text 2:";
  while (true) {
      input = prompt(str);
      if ((text = +input) === parseFloat(input))
          alert("введен не текст");
      else break;
  }
  let num2 = text.toString();

  if (num1 == num2) {
      alert("тексты равны");
  }
  else {
      alert("тексты не равны");
  }
}

export default App;