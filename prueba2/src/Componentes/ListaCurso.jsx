import React from 'react';
import Curso from './Curso';
import { useNavigate } from 'react-router-dom';
const ListaCurso = ({cursos,deleteCurso})=> {
    const navegate = useNavigate();
    const handlercrear = () => {
        navegate("/crear");
    }
    const handlerEliminar = (id) => {
     deleteCurso(id);
    }
    return (
    <div>
        <h1>Lista de Cursos</h1>
        <div>
            <button onClick={handlercrear}>Crear</button>
        </div>
        <div>
            {cursos.map((course,index) => (
        <Curso
            key={index}
          cursoID={course.id}
          nombre={course.nombre}
          nivel={course.nivel}
          duracion={course.duracion}
          eliminarCurso={handlerEliminar}
        />
      ))}
        </div>
        
      
    </div>
  );
}
export default ListaCurso;