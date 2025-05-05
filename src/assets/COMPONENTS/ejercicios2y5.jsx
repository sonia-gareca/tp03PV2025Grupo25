import { useState } from 'react';
import '../CSS/estilos.css';

const ProductosEjer2y5 = () => {
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

    const [nombreProducto, setNombreProducto] = useState('');
    const [precioProducto, setPrecioProducto] = useState('');
    const [mostrarFiltrados, setMostrarFiltrados] = useState(false);

    const filtrarProductosPorPrecio = () => {
        return productos.filter(producto => producto.precio > 20);
    };

    const agregarProducto = () => {
        if (nombreProducto.trim() !== '' && !isNaN(precioProducto) && precioProducto > 0) {
            const nuevoProducto = { nombre: nombreProducto, precio: parseFloat(precioProducto) };
            setProductos([...productos, nuevoProducto]);
            setNombreProducto('');
            setPrecioProducto('');
        } else {
            alert('Por favor, ingrese un nombre válido y un precio mayor a 0.');
        }
    };

    return (
        <div className="producto container">
            <h2>Lista de Productos</h2>

            <div>
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
            </div>

            <div>
                <button onClick={agregarProducto} className="btn-agregar">Agregar Producto</button>
                <button onClick={() => setMostrarFiltrados(!mostrarFiltrados)} className="btn-filtrar">
                    {mostrarFiltrados ? "Mostrar Todos" : "Filtrar Precio > $20"}
                </button>
            </div>

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

export default ProductosEjer2y5;