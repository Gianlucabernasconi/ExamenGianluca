import './App.css';
import { useState } from 'react';

function Productos() {
  const [productosMascotas, setProductosMascotas] = useState([
    { nombre: "Croquetas para perros", tipo: "Seco", precio: 20, id: 1, cantidad: 10 },
    { nombre: "Alimento húmedo para gatos", tipo: "Húmedo", precio: 15, id: 2, cantidad: 10 },
    { nombre: "Snacks dentales", tipo: "Snack", precio: 10, id: 3, cantidad: 10 },
    { nombre: "Golosinas de pollo", tipo: "Premio", precio: 8, id: 4, cantidad: 10 },
    { nombre: "Alimento para cachorros", tipo: "Seco", precio: 25, id: 5, cantidad: 10 },
  ]);

  const [carrito, setCarrito] = useState([]);

  function agregarAlCarrito(producto) {
    // Reducir cantidad en productosMascotas
    setProductosMascotas(
      productosMascotas.map((p) =>
        p.id === producto.id
          ? { ...p, cantidad: p.cantidad - 1 }
          : p
      )
    );

    // Agregar producto al carrito
    const productoEnCarrito = carrito.find((p) => p.id === producto.id);

    if (productoEnCarrito) {
      // Incrementar cantidad si ya está en el carrito
      setCarrito(
        carrito.map((p) =>
          p.id === producto.id
            ? { ...p, cantidad: p.cantidad + 1 }
            : p
        )
      );
    } else {
      // Agregar nuevo producto al carrito
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  }

  const listarProductos = productosMascotas.map((producto) => (
    <li key={producto.id}>
      <button
        onClick={() => {
          if (producto.cantidad > 0) {
            agregarAlCarrito(producto);
          }
        }}
      >
        Agregar al carrito
      </button>
      {producto.nombre} - Tipo: {producto.tipo} - Precio: ${producto.precio} - Existencias: {producto.cantidad}
    </li>
  ));

  return (
    <>
      <h1>Productos</h1>
      <ul>{listarProductos}</ul>

      <h2>Carrito</h2>
      <ul>
        {carrito.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} - Cantidad: {producto.cantidad}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Productos;
