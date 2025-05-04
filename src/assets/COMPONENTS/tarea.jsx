import { useState } from 'react';
import '../CSS/tarea.css';

/*
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
*/

//SEGUNDA PARTE DEL TRABAJO PRACTICO NODIFICADO

function Tareas (){
    //estado para manejar el formulario
    const [descripcion , setDescripcion] = useState ('');
    const [fecha, setFecha]= useState('');

    //estado para almacenar la lista de tarea
    const [tareas, setTareas]= useState ([]);

    let idCounter = 0;
    const mensajeSubmit = (evento) =>{
        evento.preventDefault ();

        //crear tarea
        const nuevaTarea = {
            id: Date.now(), // ID único
            descripcion,
            fecha,
            realizada: false, // nuevo estado de realizacion
          };
    
        //agregar nueva tarea al array
        setTareas([...tareas,nuevaTarea]);
        
        //limpiar el formulario
        setDescripcion('');
        setFecha('');
       
    };
    //eliminar un elemento
    const eliminarTarea = (id) => {
        setTareas(tareas.filter((tarea) => tarea.id !== id));
      };

     // NUEVO: Marcar tarea como realizada
  const marcarComoRealizada = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, realizada: !tarea.realizada  } : tarea
      )
    );
  };

    // AQUI VA EL RETURN 
};

export default Tareas;