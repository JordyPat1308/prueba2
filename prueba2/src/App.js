import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListaCurso from './Componentes/ListaCurso';
import CrearCurso from './Componentes/CrearCurso';

import './App.css';

const cursos = [
  { id: 1, nombre: "Curso de React", nivel: "Intermedio", duracion: "30 horas" },
  { id: 2, nombre: "Curso de JavaScript", nivel: "Básico", duracion: "20 horas" },
];

function App() {
  const [lcursos, setlCursos] = useState(cursos);
  const addCurso = (nuevoCurso) => {
   setlCursos((prevState) => [...prevState, nuevoCurso]);
  }
  const eliminarCurso= (id) => {
  setlCursos(prevState =>
    prevState.filter((course) => course.id !== id)
  );
};
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/listar"} element={<ListaCurso cursos={lcursos} deleteCurso={eliminarCurso}/>} />
          <Route path={"/crear"} element={<CrearCurso handlerAgregar={addCurso} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
