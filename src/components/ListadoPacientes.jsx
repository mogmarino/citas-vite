import { useEffect } from "react";
import Paciente from "./Paciente";

function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {
  // useEffect que imprime por console nuevo paciente cada vez que se agrega un paciente
  useEffect(() => {
    if (pacientes.length > 0) {
      console.log("nuevo paciente");
    }
  }, [pacientes]);
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
      {pacientes && pacientes.length === 0 ? (
        <>
          {/* Cuando no hay pacientes */}
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Agrega pacientes{" "}
            <span className="text-indigo-600 font-bold">
              y se veran de este lado
            </span>
          </p>
        </>
      ) : (
        <>
          {/* cuando si hay pacientes */}
          <h2 className="font-black text-3xl text-center">
            Listado de pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default ListadoPacientes;
