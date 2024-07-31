import React, { useState } from "react";

import "./App.css";

function App() {

  const list = [
    "Banana",
    "Apple",
    "Orange",
    "Mango",
    "Pineapple",
    "Watermelon"
    
  ];
  const [filter, setFilter] = useState(list)

  const search = (event) => {
    
    if (event.target.value === "") {
      setFilter(list)
      return
    }
    const filterSearch = list.filter((item) => 
      item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    )
    setFilter(filterSearch)
  }

  return <>
  <div>
      Search <input name="query" type="text" onChange={search} />
  </div>
  <div>
    {filter.map((fruit, key) => ( 
      <div key={key}>{fruit}</div>
    ))}
  </div>
  </>
}

export default App;