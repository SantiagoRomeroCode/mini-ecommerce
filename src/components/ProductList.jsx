import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import productos from '../data/products.json'; 

const ProductList = () => {
  const { agregarAlCarrito } = useContext(CartContext);

  return (
    <div className="productos-seccion">
      <h2>Productos</h2>
      <div className="productos-grid">
        {productos.map(producto => (
          <div key={producto.id} className="producto-card">
            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p className="precio">${producto.precio.toLocaleString()}</p>
            <button onClick={() => agregarAlCarrito(producto)}>
              Agregar al Carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;