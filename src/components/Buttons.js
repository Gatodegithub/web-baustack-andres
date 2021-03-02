import React from "react";

export default function Buttons() {
  const projects = [
    "CRM",
    "Control de proyectos",
    "Control de gastos",
    "Gestión de flota",
    "Gestión de inventario",
    "Gestión de tareas",
    "Gestión de eventos",
    "Planes de marketing",
    "Causas judiciales",
    "Directorio de RRHH",
    "Testimonios clientes",
    "Gestión obras arte",
    "Feedback usuarios",
    "Ordenes de trabajo",
    "Planificación cursos",
    "Gestion contratos",
    "Pólizas de seguros",
    "Calendario editorial",
  ];
  return (
    <>
      {projects.map((el) => {
        return (
          <a className="btn btn-outline-dark m-1 rounded-pill" href="true" key={el}>
            <b>{el}</b>
          </a>
        );
      })}
    </>
  );
}
