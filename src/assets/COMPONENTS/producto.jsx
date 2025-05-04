import '../CSS/estilos.css';
import { useState } from 'react';

const Productos = () => {
    const [productos, setProductos] = useState([
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

    const [productosOrdenados, setProductosOrdenados] = useState([...productos]);

    // Función para ordenar los productos por precio de menor a mayor
    const ordenarProductos = () => {
        const productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);
        setProductosOrdenados(productosOrdenados);
    };

    // Función para eliminar el producto con el precio más bajo
    const eliminarProductoMasBarato = () => {
        // Encontrar el precio más bajo en el array de productos
        const precioMasBajo = Math.min(...productos.map((producto) => producto.precio));

        // Filtrar los productos para eliminar el que tiene el precio más bajo
        const productosActualizados = productos.filter(
            (producto) => producto.precio !== precioMasBajo
        );

        // Actualizar los estados
        setProductos(productosActualizados);
        setProductosOrdenados(productosActualizados);
    };

    return (
        <div className="producto">
            <h2>Lista de Productos</h2>
            <button onClick={ordenarProductos}>Ordenar productos por precio</button>
            <button onClick={eliminarProductoMasBarato}>Eliminar el producto más barato</button>
            <ul>
                {productosOrdenados.map((prod, index) => (
                    <li key={index}>
                        {prod.nombre} - ${prod.precio}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Productos;
