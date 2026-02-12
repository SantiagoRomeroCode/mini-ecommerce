import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Header = () => {
  const { cantidadItems } = useContext(CartContext);

  return (
    <header className="header">
      <h1>🛍️ Mini Ecommerce</h1>
      <div className="carrito-icono">
        🛒 {cantidadItems > 0 && <span className="badge">{cantidadItems}</span>}
      </div>
    </header>
  );
};

export default Header;