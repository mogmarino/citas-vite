import { useState } from "react";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
import { Formulario } from "./components/Formulario";

function App() {
  // funciones, validaciones, vanilla js

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

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
        />
        <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente} />
      </div>
    </div>
  );
}

export default App;
