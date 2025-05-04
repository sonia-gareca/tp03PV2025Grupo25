import '../CSS/producto.css';

function Producto() {
    const [productos, setProductos] = useState([
        { nombre: 'Monitor', categoria: 'Electrónica' },
        { nombre: 'Teclado', categoria: 'Electrónica' },
        { nombre: 'Mouse', categoria: 'Electrónica' },
        { nombre: 'Notebook', categoria: 'Electrónica' },
        { nombre: 'Auriculares', categoria: 'Accesorios' },
    ]);
    const [filtro, setFiltro] = useState('todas'); // Estado para el filtro

    const filtrarProductos = () => { //se agrega la función filtrarProductos
        if (filtro === 'Electrónica') {
            return productos.filter((producto) => producto.categoria === 'Electrónica');
        } else if (filtro === 'Accesorios') {
            return productos.filter((producto) => producto.categoria === 'Accesorios');
        }
        return productos; // Si el filtro es "todas", devuelve todos los productos
    };

    return (
        <div className="producto">
            <h2>Lista de Productos</h2>

            <div className="filtros">
                <button onClick={() => setFiltro('todas')}>Todas</button>
                <button onClick={() => setFiltro('Electrónica')}>Electrónica</button>
                <button onClick={() => setFiltro('Accesorios')}>Accesorios</button>
            </div>

            <ul>
                {filtrarProductos().map((prod, index) => (
                    <li key={index}>{prod.nombre}</li>
                ))}
            </ul>
        </div>

    
    );
}

export default Producto;
