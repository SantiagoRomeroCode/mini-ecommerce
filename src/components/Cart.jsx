import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { 
    carrito, cambiarCantidad, eliminarDelCarrito, pagar, 
    total, mostrarMensaje 
  } = useContext(CartContext);

  return (
    <div className="carrito-seccion">
      <h2>Carrito</h2>
      
      {mostrarMensaje ? (
        <div className="mensaje-gracias">
          <div className="icono-check">✓</div>
          <h3>¡Gracias por tu compra!</h3>
          <p>Tu pedido ha sido procesado</p>
        </div>
      ) : carrito.length === 0 ? (
        <div className="carrito-vacio">
          <p>🛒</p>
          <p>Carrito vacío</p>
        </div>
      ) : (
        <>
          <div className="carrito-items">
            {carrito.map(item => (
              <div key={item.id} className="carrito-item">
                <img src={item.imagen} alt={item.nombre} />
                <div className="item-info">
                  <h4>{item.nombre}</h4>
                  <p>${item.precio}</p>
                </div>
                <div className="cantidad-control">
                  <button onClick={() => cambiarCantidad(item.id, item.cantidad - 1)}>-</button>
                  <input
                    type="number"
                    value={item.cantidad}
                    onChange={(e) => cambiarCantidad(item.id, parseInt(e.target.value))}
                    min="0"
                  />
                  <button onClick={() => cambiarCantidad(item.id, item.cantidad + 1)}>+</button>
                </div>
                <div className="subtotal">
                  ${item.precio * item.cantidad}
                </div>
                <button 
                  className="btn-eliminar"
                  onClick={() => eliminarDelCarrito(item.id)}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="carrito-total">
            <h3>Total: ${total}</h3>
            <button className="btn-pagar" onClick={pagar}>
              Proceder al Pago
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;