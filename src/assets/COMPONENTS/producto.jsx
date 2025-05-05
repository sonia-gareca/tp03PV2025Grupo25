import { useState } from 'react';
import '../CSS/producto.css';

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

    const [nombreProducto, setNombreProducto] = useState(''); // Estado para el nombre del producto
    const [precioProducto, setPrecioProducto] = useState(''); // Estado para el precio del producto
    const [mostrarFiltrados, setMostrarFiltrados] = useState(false); // Estado para alternar entre todos y filtrados

    //2) Función para filtrar productos cuyo precio sea mayor a $20
    const filtrarProductosPorPrecio = () => {
        return productos.filter(producto => producto.precio > 20);
    };

    //5) Función para agregar un nuevo producto al final del array
    const agregarProducto = () => {
        if (nombreProducto.trim() !== '' && !isNaN(precioProducto) && precioProducto > 0) {
            const nuevoProducto = { nombre: nombreProducto, precio: parseFloat(precioProducto) };
            setProductos([...productos, nuevoProducto]);
            setNombreProducto(''); // Limpiar el campo de nombre
            setPrecioProducto(''); // Limpiar el campo de precio
        } else {
            alert('Por favor, ingrese un nombre válido y un precio mayor a 0.');
        }
    };

    return (
        <div className="producto">
            <h2>Lista de Productos</h2>

            {/* Campos para ingresar nombre y precio del producto */}
            <input
                type="text"
                placeholder="Nombre del producto"
                value={nombreProducto}
                onChange={(e) => setNombreProducto(e.target.value)}
            />
            <input
                type="number"
                placeholder="Precio del producto"
                value={precioProducto}
                onChange={(e) => setPrecioProducto(e.target.value)}
            />
            <button onClick={agregarProducto}>Agregar Producto</button>

            {/* Botón para alternar entre mostrar todos y filtrar */}
            <button onClick={() => setMostrarFiltrados(!mostrarFiltrados)}>
                {mostrarFiltrados ? "Mostrar Todos" : "Filtrar Precio > $20"}
            </button>

            {/* Mostrar productos */}
            <h3>Productos Agregados:</h3>
            <ul>
                {(mostrarFiltrados ? filtrarProductosPorPrecio() : productos).map((producto, index) => (
                    <li key={index}>
                        Producto: {producto.nombre} - Precio: ${producto.precio}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Productos;
