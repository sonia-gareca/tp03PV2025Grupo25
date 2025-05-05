import { useState } from 'react';

import '../CSS/estilos.css';

const Productos = () => {
    const [productos] = useState([
        { nombre: "Smartphone", precio: 55 },
        { nombre: "Auriculares Inalámbricos", precio: 12 },
        { nombre: "Smartwatch", precio: 35 },
        { nombre: "Tablet", precio: 40 },
        { nombre: "Parlante Bluetooth", precio: 80 },
        { nombre: "Cámara Deportiva", precio: 28 },
        { nombre: "Televisor LED 4K", precio: 12 },
        { nombre: "Consola de Videojuegos", precio: 75 },
        { nombre: "Lector de Libros Electrónicos", precio: 22 },
        { nombre: "Impresora Multifunción", precio: 38 }
    ]);

    const [productosConIVA, setProductosConIVA] = useState([]);
    const [mostrarConIVA, setMostrarConIVA] = useState(false);

    // 1. Mostramos los productos y sus precios usando forEach
    const mostrarProductos = () => {
        return productos.map(producto => (
            <div key={producto.nombre}>
                Producto: {producto.nombre} - Precio: ${producto.precio}
            </div>
        ));
    };

    // 3. Creamos un array con productos con el IVA incluido en el precio
    const calcularPrecioConIVA = () => {
        const productosConIVAIncluidos = productos.map(producto => ({
            ...producto,
            precioConIVA: parseFloat((producto.precio * 1.21).toFixed(2))
        }));
        setProductosConIVA(productosConIVAIncluidos);
        setMostrarConIVA(true);
    };

    return (
        <div>
            <h2>Lista de Productos:</h2>
            {mostrarProductos()}

            <h2>Productos con IVA (21%) incluido:</h2>
            <button onClick={calcularPrecioConIVA}>Mostrar productos con IVA</button>

            {mostrarConIVA && productosConIVA.length > 0 && (
                <div>
                    <h3>Productos con IVA incluido</h3>
                    {productosConIVA.map(producto => (
                        <div key={producto.nombre}>
                            Producto: {producto.nombre} - Precio con IVA: ${producto.precioConIVA}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Productos;