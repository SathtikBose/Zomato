import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Veg from './components/Veg';
import NonVeg from './components/NonVeg';
import Checkout from './components/Checkout';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [backgroundColor, setbackgroundColor] = useState('white');
  const [textColor, settextColor] = useState('black');
  const [modeText, setmodeText] = useState('Dark Mode');
  const [border, setborder] = useState('black');
  const [itemName, setitemName] = useState('');
  const [price, setprice] = useState('');

  const toggleMode = () => {
    if (backgroundColor === 'white') {
      setbackgroundColor('black');
      settextColor('white');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      setmodeText('Light Mode');
      setborder('white');
    } else {
      setbackgroundColor('white');
      settextColor('black');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      setmodeText('Dark Mode');
      setborder('black');
    }
  };

  const buyItem = (itemName, price) => {
    setitemName(itemName);
    setprice(price);
  };

  return (
    <div>
      <Navbar title='Zomato' toggleMode={toggleMode} modeText={modeText} />
      <Routes>
        <Route path='/' element={<Home backgroundColor={backgroundColor} textColor={textColor} border={border} />} />
        <Route path='/about' element={<About backgroundColor={backgroundColor} textColor={textColor} />} />
        <Route path='/veg' element={<Veg backgroundColor={backgroundColor} textColor={textColor} buyItem={buyItem} />} />
        <Route path='/non-veg' element={<NonVeg backgroundColor={backgroundColor} textColor={textColor} buyItem={buyItem} />} />
        <Route path='/checkout' element={<Checkout backgroundColor={backgroundColor} textColor={textColor} itemName={itemName} price={price} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
