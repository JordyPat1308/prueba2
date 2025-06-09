import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CrearCurso = ({handlerAgregar}) => {
    const [cursos, setCursos] = useState({
        id: 0,
        nombre: "",
        nivel: "",
        duracion: ""

    });
    const [errorId, setErrorId] = useState('');
    const [errorNombre, setErrorNombre] = useState('');
    const [errorNivel, setErrorNivel] = useState('');
    const [errorDuracion, setErrorDuracion] = useState('');

    const validateId = (value) => {
        if (!value || parseInt(value, 10) <= 0) {
            setErrorId('El ID debe ser mayor a 0');
            return false;
        }
        setErrorId('');
        return true;
    };

    const validateNombre = (value) => {
        if (!value.trim() ) {
            setErrorNombre('El nombre es obligatorio');
            return false;
        }
        if (value.length < 5) {
            setErrorNombre('El nombre debe tener al menos 5 caracteres');
            return false;
        }
        setErrorNombre('');
        return true;
    };

    const validateNivel = (value) => {
        if (!value) {
            setErrorNivel('Debe seleccionar un nivel');
            return false;
        }
        setErrorNivel('');
        return true;
    };

    const validateDuracion = (value) => {
        const num = parseInt(value, 10);
        if (!value || isNaN(num) || num < 10 || num > 100) {
            setErrorDuracion('La duración debe estar entre 10 y 100');
            return false;
        }
        setErrorDuracion('');
        return true;
    };



    const enviarCurso = (e) => {
        if (cursos.id <= 0 || cursos.nombre === "" || cursos.nivel === "" || cursos.duracion === "" || cursos.duracion < 10 || cursos.duracion > 100) {
            e.preventDefault();
            alert("Por favor, complete todos los campos correctamente.");
        } else{
            e.preventDefault();
        handlerAgregar(cursos);
        setCursos({
            id: 0,
            nombre: "",
            nivel: "",
            duracion: ""
        }
        );

        }
        
    }
    /*const onChangeDatos =(e) => {
        const {name, value} = e.target;
        setCursos(prevState => ({
            ...prevState,
            [name]: value
        }));
    }*/
    const onChangeId = (e) => {
        const { value } = e.target;
        setCursos(prevState => ({
            ...prevState,
            id: parseInt(value, 10) // Convertir a número entero
        }));
        validateId(value); // Validar ID al cambiar
    }
    const onChangeNombre = (e) => {
        const { value } = e.target;
        setCursos(prevState => ({
            ...prevState,
            nombre: value
        }));
        validateNombre(value); // Validar nombre al cambiar
    }
    const onChangeNivel = (e) => {
        const { value } = e.target;
        setCursos(prevState => ({
            ...prevState,
            nivel: value
        }));
        validateNivel(value); // Validar nivel al cambiar
    }
    const onChangeDuracion = (e) => {
        const { value } = e.target;
        setCursos(prevState => ({
            ...prevState,
            duracion: value
        }));
        validateDuracion(value); // Validar duración al cambiar
    }
    const navegate = useNavigate();
    const handler = () => {
        navegate("/listar");
    }
    


  return (
      
      <form onSubmit={enviarCurso}>
        <h1>Crear Curso</h1>
        <div>
          <label htmlFor="courseDescription">Id:</label>
          <input type="number" id="courseDescription" name="courseDescription" required value={cursos.id} onChange={onChangeId}></input>
            {errorId && <span style={{ color: 'red' }}>{errorId}</span>}
        </div>
        <div>
          <label htmlFor="courseName">Nombre del Curso:</label>
          <input type="text" id="courseName" name="courseName" required value={cursos.nombre} onChange={onChangeNombre}/>
            {errorNombre && <span style={{ color: 'red' }}>{errorNombre}</span>}
        </div>
        <div>
            <label htmlFor="courseCategory">Nivel:</label>
            <select id="courseCategory" name="courseCategory" required value={cursos.nivel} onChange={onChangeNivel}>
                <option value="">Seleccione una categoría</option>
                <option value="basico">Basico</option>
                <option value="intermedio">Intermedio</option>
                <option value="avanzado">Avanzado</option>

            </select>
            {errorNivel && <span style={{ color: 'red' }}>{errorNivel}</span>}
        </div>
        <div>
            <label htmlFor="courseNumber">Número (10-100):</label>
            <input
                type="number"
                id="courseNumber"
                name="courseNumber"
                min="10"
                max="100"
                required
                value={cursos.duracion} 
                onChange={onChangeDuracion}
            />
            {errorDuracion && <span style={{ color: 'red' }}>{errorDuracion}</span>}
        </div>
        <button type="submit" onClick={handler}>Crear Curso</button>
      </form>

  );
}
export default CrearCurso;