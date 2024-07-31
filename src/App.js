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
}


export default App;