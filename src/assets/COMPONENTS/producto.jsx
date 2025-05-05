import { useState } from 'react';
import '../CSS/estilos.css';

const Producto = () => {
    // Estado inicial de productos
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

    // Estado para mantener productos ordenados (copia del original)
    const [productosOrdenados, setProductosOrdenados] = useState([...productos]);

    // Estado para los productos con el precio que incluye el IVA
    const [productosConIVA, setProductosConIVA] = useState([]);

    // Estado para mostrar o no los productos con IVA
    const [mostrarConIVA, setMostrarConIVA] = useState(false);

    // Agregar un estado para manejar los productos filtrados
    const [productosFiltrados, setProductosFiltrados] = useState([]);

    // Estados para manejar el nombre y precio del nuevo producto
    const [nombreProducto, setNombreProducto] = useState('');
    const [precioProducto, setPrecioProducto] = useState('');

    // 1. Mostramos los productos y sus precios usando map
    const mostrarProductos = () => {
        return productosOrdenados.map(producto => (
            <div key={producto.nombre}>
                Producto: {producto.nombre} - Precio: ${producto.precio}
            </div>
        ));
    };

    // 2. Creamos un array con productos con el IVA incluido en el precio
    const calcularPrecioConIVA = () => {
        const productosConIVAIncluidos = productosOrdenados.map(producto => ({
            ...producto,
            precioConIVA: parseFloat((producto.precio * 1.21).toFixed(2))
        }));
        setProductosConIVA(productosConIVAIncluidos);
        setMostrarConIVA(true);
    };

    //2) Crear un nuevo array con los productos cuyo precio sea mayor a $20, usando filter.
    const filtrarProductosPorPrecio = () => {
        const filtrados = productos.filter(producto => producto.precio > 20);
        setProductosFiltrados(filtrados);
    };

    // 3. Función para ordenar los productos por precio de menor a mayor
    const ordenarProductos = () => {
        const ordenados = [...productosOrdenados].sort((a, b) => a.precio - b.precio);
        setProductosOrdenados(ordenados);
    };

    // 4. Función para eliminar el producto con el precio más bajo
    const eliminarProductoMasBarato = () => {
        // Encontrar el precio más bajo en el array de productos
        const precioMasBajo = Math.min(...productosOrdenados.map(p => p.precio));

        // Filtrar los productos para eliminar el que tiene el precio más bajo
        const actualizados = productosOrdenados.filter(p => p.precio !== precioMasBajo);

        // Actualizar los estados
        setProductos(actualizados);
        setProductosOrdenados(actualizados);
    };

    //5) Agregar un nuevo producto al final del array
    const agregarProducto = () => {
        if (nombreProducto.trim() !== '' && !isNaN(precioProducto) && precioProducto > 0) {
            const nuevoProducto = { nombre: nombreProducto, precio: parseFloat(precioProducto) };
            setProductos([...productos, nuevoProducto]);
            setProductosOrdenados([...productosOrdenados, nuevoProducto]); // Actualizar también los productos ordenados
            setNombreProducto('');
            setPrecioProducto('');
        } else {
            alert('Por favor, ingrese un nombre válido y un precio mayor a 0.');
        }
    };

    return (
        <div className="producto">
            <h2>Lista de Productos</h2>
            {productosFiltrados.length > 0
                ? productosFiltrados.map(producto => (
                    <div key={producto.nombre}>
                        Producto: {producto.nombre} - Precio: ${producto.precio}
                    </div>
                ))
                : mostrarProductos()}

            <h2>Opciones</h2>
            <button onClick={ordenarProductos}>Ordenar productos por precio</button>
            <button onClick={eliminarProductoMasBarato}>Eliminar el producto más barato</button>
            <button onClick={calcularPrecioConIVA}>Mostrar productos con IVA</button>
            <button onClick={filtrarProductosPorPrecio}>Filtrar productos con precio > $20</button>

            {/* Mostrar productos con IVA */}
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

            {/* Agregar nuevo producto */}
            <div>
                <h2>Agregar Producto</h2>
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
            </div>
        </div>
    );
};

export default Producto;