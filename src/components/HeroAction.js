import React from "react";

export default function HeroAction() {
  return (
    <section className="container-fluid bg-tertiary-color text-white py-5">
      <div className="row text-center py-5">
        <div className="col-lg-12 py-2">
          <h2 className="display-3">
            <b>Prueba Baustack con tu equipo</b>
          </h2>
          <p className="text-white pt-2">
            Prueba gratuita de 14 días | No se requiere tarjeta de crédito
          </p>
          <div className="pt-4">
            <a
              href="true"
              className="btn btn-lg bg-fifth-color text-white rounded-pill"
            >
              Empezar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
