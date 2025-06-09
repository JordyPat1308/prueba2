import React from 'react';

const Curso = ({cursoID,nombre,nivel,duracion,eliminarCurso}) => {
    const handlerEliminar = (e) => {
        e.preventDefault();
        eliminarCurso(cursoID);
    }
     return (
        <div class="Titulos">
   
            <h1>{cursoID}. {nombre}</h1>
            <h3>{nivel}</h3>
            <h4>{duracion} horas</h4>
            
            <div>
                <button id="btn-eliminar" onClick={handlerEliminar}>
                Eliminar
                </button>
            </div>
        </div>
    )
}
export default Curso;