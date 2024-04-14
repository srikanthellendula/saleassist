import Home from './components/Home';
import Header from './components/Header';
import ProductsHeader from './components/ProductsHeader';
 
import './App.css';

function App() {
  return (
    <div className='app-cont'>
      <Header/>
      <ProductsHeader/>
      <Home/>
      
    </div>
  );
}

export default App;
