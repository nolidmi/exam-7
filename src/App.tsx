import React, {useState} from 'react';
import './App.css';
import Items from "./components/items/items";
import OrderType from "./type d";

import waffles from './assets/vafli.png'
import icecream from './assets/icecream.png.png'
import donut from './assets/ponchik.png.png'
import tea from './assets/tea.png.png'
import coffee from './assets/coffee.png'
import juice from './assets/juse.png'


function App() {
  const [order, setOrder] = useState([]);
  if (order.length === 0) {
    order.push();
  }






  return (
    <div className="container">
      <div className="Order Details"></div>
      <div className="Add items d-flex justify-content-between">
        <Items/>
        <Items/>
        <Items/>
      </div>
    </div>
  );
}

export default App;
