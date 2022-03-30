import { useState, useEffect } from "react";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
import { Formulario } from "./components/Formulario";

function App() {
  // funciones, validaciones, vanilla js

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  /**
   * se ejecuta una sola vez cuando se carga el componente, tmb los useEffect se ejecutan en orden definido
   */
  useEffect(() => {
    const obtenerLS = () => {
      // pone un arreglo vacio en localstorage
      const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];
      setPacientes(pacientesLS);
      console.log(pacientesLS);
    };

    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacientesActualizados);
  };

  return (
    // solo un elemento en el nivel mas alto
    // en esta parte solo se pueden poner expresiones de js {}
    // lo que se ve en pantalla, renderiza
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
