import { useState } from 'react';
import '../CSS/tarea.css';

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

    return(
        <div>
            <h2>Agregar Nueva Tarea</h2>

            <form onSubmit={mensajeSubmit}>
                <div>
                    <label>Descripcion: </label>
                    <input type="text"
                    value = {descripcion}
                    onChange = {(evento) => setDescripcion (evento.target.value)}
                    required />
                </div>

                <div>
                    <label>Fecha de Finalizacion: </label>
                    <input type="date"
                    value={fecha}
                    onChange={(evento) => setFecha(evento.target.value)} />
                </div>
                
                <button type="submit">Agregar Tarea</button>
            </form>

            <h3>Lista de Tarea:</h3>
            <ul>
                {tareas.map((tarea) => (
                    <li key={tarea.id}>
                        <span style={{ textDecoration: tarea.realizada ? 'line-through' : 'none' }}>
                            {tarea.descripcion}
                        </span>{' - '}
                        <span>{tarea.fecha}</span>{' '}
                        <button onClick={() => marcarComoRealizada(tarea.id)}>
                            {tarea.realizada ? 'Desmarcar' : 'Realizada'}
                        </button>{' '}
                        <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    )
} // Cierra correctamente la función Tarea

export default Tarea;