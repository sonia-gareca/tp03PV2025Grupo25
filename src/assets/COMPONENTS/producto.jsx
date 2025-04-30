import '../CSS/producto.css';

function Producto() {
    const productos = ['Monitor', 'Teclado', 'Mouse', 'Notebook', 'Auriculares'];

    return (
        <div className="producto">
            <h2>Lista de Productos</h2>
            <ul>
                {productos.map((prod, index) => (
                    <li key={index}>{prod}</li>
                ))}
            </ul>
        </div>

    
    );
}
export default Producto;
