import {useState} from 'react'

function App() {
    const [array, setArray] = useState([1,2,3,4,5,6,7,8,9,10]);
    const newArray = () => setArray(array => array.filter(x => x % 2))
    return<div>
        {
            array.map(item => <p key={item}>{item}</p>)
        }
        <button onClick={newArray}>Отфлитровать</button>
    </div>

const str1 = "Java";
const str2 = "Java";
const str3 = "C++";


if (str1.equals(str2)) {
  alert("Statement is true");
} else {
  alert("Statement is false");
}

if(str1.equals(str3)) {
  alert("Statement is true");
} else {
  alert("Statement is false");
}


let input, number, str, text;
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