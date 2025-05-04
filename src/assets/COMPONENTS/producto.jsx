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


// 1. Mostramos los productos y sus precios usando forEach
const mostrarProductos = () => {
    const listaProductos = [];
    productos.forEach(producto => {
        listaProductos.push(
            <div key={producto.nombre}>
                Producto: {producto.nombre} - Precio: ${producto.precio}
            </div>
        );
    });
    return listaProductos;
};

// 3. Creamos un array con productos con el IVA incluido en el precio
const productosConIVA = productos.map(producto => ({
    ...producto, precioConIVA: producto.precio * 1.21
}));


return (
    <div>
        <h2>Lista de Productos</h2>
        {mostrarProductos()}

        <h2>Productos con IVA (21%) incluido</h2>
        {productosConIVA.map(producto => (
            <div key={producto.nombre}>
                Producto: {producto.nombre} - Precio con IVA: ${producto.precioConIVA.toFixed(2)}
            </div>
        ))}
    </div>
);

};

export default Productos;