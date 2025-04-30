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

