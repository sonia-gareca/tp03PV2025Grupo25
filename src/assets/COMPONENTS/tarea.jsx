import { useState } from 'react';
import '../CSS/estilos.css';

function Tarea() {
    const [tareas, setTareas] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState('');

    const agregarTarea = () => {
        if (nuevaTarea.trim() !== '') {
            setTareas([...tareas, { texto: nuevaTarea, completada: false }]);
            setNuevaTarea('');
        }
       
    };

    const eliminarTarea = (index) => {
        const nuevasTareas = tareas.filter((_, i) => i !== index);
        setTareas(nuevasTareas);
        
    };

    const completarTarea = (index) => {
        const nuevasTareas = tareas.map((tarea, i) =>
            i === index ? { ...tarea, completada: !tarea.completada } : tarea
        );
        setTareas(nuevasTareas);
    };

    return (
        <div className="tarea">
            <h2>Lista de Tareas</h2>
            <input
                type="text"
                value={nuevaTarea}
                onChange={(e) => setNuevaTarea(e.target.value)}
                placeholder="Nueva tarea"
            />
            <button onClick={agregarTarea}>Agregar</button>

            <ul>
                {tareas.map((tarea, index) => (
                    <li key={index}>
                        <span
                            style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}
                            onClick={() => completarTarea(index)}
                        >
                            {tarea.texto}
                        </span>
                        <button onClick={() => eliminarTarea(index)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
} // Cierra correctamente la función Tarea

export default Tarea;