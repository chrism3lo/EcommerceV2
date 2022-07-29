import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Product from './component/Products';


function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Product/>
      <About/>
    </>
  );
}

export default App;
