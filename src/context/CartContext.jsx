import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Estado
  const [carrito, setCarrito] = useState([]);
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  // Cargar desde LocalStorage al iniciar
  useEffect(() => {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      setCarrito(JSON.parse(carritoGuardado));
    }
  }, []);

  // Guardar en LocalStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  // Funciones
  function agregarAlCarrito(producto) {
    const existe = carrito.find(item => item.id === producto.id);
    if (existe) {
      setCarrito(carrito.map(item =>
        item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
      ));
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  }

  function cambiarCantidad(id, nuevaCantidad) {
    if (nuevaCantidad <= 0) {
      setCarrito(carrito.filter(item => item.id !== id));
    } else {
      setCarrito(carrito.map(item =>
        item.id === id ? { ...item, cantidad: nuevaCantidad } : item
      ));
    }
  }

  function eliminarDelCarrito(id) {
    setCarrito(carrito.filter(item => item.id !== id));
  }

  function pagar() {
    if (carrito.length === 0) {
      alert('El carrito está vacío');
      return;
    }
    setMostrarMensaje(true);
    setCarrito([]);
    localStorage.removeItem('carrito');
    setTimeout(() => {
      setMostrarMensaje(false);
    }, 3000);
  }

  // Totales
  const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
  const cantidadItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);

  return (
    <CartContext.Provider value={{
      carrito,
      agregarAlCarrito,
      cambiarCantidad,
      eliminarDelCarrito,
      pagar,
      total,
      cantidadItems,
      mostrarMensaje
    }}>
      {children}
    </CartContext.Provider>
  );
};