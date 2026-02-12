import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="contenido">
        <ProductList />
        <Cart />
      </div>
    </div>
  );
}

export default App;