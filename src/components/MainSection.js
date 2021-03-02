import React from "react";
import image from "../data.svg";

export default function MainSection() {
  return (
    <main className="container py-5">
      <div className="row pb-sm-5">
        <div className="col-lg-6 text-center text-lg-right">
          <img src={image} className="img-fluid w-100" alt="img"></img>
        </div>
        <div className="col-lg-6 text-center text-lg-left my-auto">
          <h2 className="display-4">
            <b className="tertiary-color">Comienza en segundos</b>
          </h2>
          <p className="pr-lg-5">
            Tu equipo amará la similitud con las planillas Excel, con la
            potencia de una base de datos
          </p>
          <a
            href="true"
            className="btn btn-lg btn-outline-secondary secondary-color rounded-pill"
          >
            Empezar ahora
          </a>
        </div>
      </div>

      <div className="row py-sm-5">
        <div className="col-lg-6 text-center text-lg-right my-auto">
          <h2 className="display-4 mt-5">
            <b className="secondary-color">
              Soporte al<br></br> cliente en Chile
            </b>
          </h2>
          <p className="pl-lg-5">
            Tenemos presencia local en Chile, y podemos resolver todas tus dudas
            con nuestro soporte telefónico
          </p>
          <a
            href="true"
            className="btn btn-lg btn-outline-tertiary tertiary-color rounded-pill"
          >
            Empezar ahora
          </a>
        </div>
        <div className="col-lg-6 text-center text-lg-left">
          <img src={image} className="img-fluid w-100" alt="img"></img>
        </div>
      </div>

      <div className="row pt-5">
        <div className="col-lg-6 text-center text-lg-right">
          <img src={image} className="img-fluid w-100" alt="img"></img>
        </div>
        <div className="col-lg-6 text-center text-lg-left my-auto order-first order-sm-last">
          <h2 className="display-4">
            <b className="fourth-color">Gestiona tus documentos</b>
          </h2>
          <p className="pr-lg-5">
            Crea alertas automáticas para el vencimiento de tus documentos.
            Nunca más se te pasará una fecha importante
          </p>
          <a
            href="true"
            className="btn btn-lg btn-outline-secondary secondary-color rounded-pill"
          >
            Empezar ahora
          </a>
        </div>
      </div>

      <div className="row py-sm-5">
        <div className="col-lg-6 text-center text-lg-right my-auto">
          <h2 className="display-4 mt-5">
            <b className="secondary-color">Una sola fuente de información</b>
          </h2>
          <p className="pl-lg-5">
            Centralizar la información permite agilizar el trabajo en equipo,
            optimizando el uso de recursos
          </p>
          <a
            href="true"
            className="btn btn-lg btn-outline-tertiary tertiary-color rounded-pill"
          >
            Empezar ahora
          </a>
        </div>
        <div className="col-lg-6 text-center text-lg-left">
          <img src={image} className="img-fluid w-100" alt="img"></img>
        </div>
      </div>

      <div className="row pt-5">
        <div className="col-lg-6 text-center text-lg-right">
          <img src={image} className="img-fluid w-100" alt="img"></img>
        </div>
        <div className="col-lg-6 text-center text-lg-left my-auto order-first order-sm-last">
          <h2 className="display-4">
            <b className="fourth-color">Trazabilidad de cambios</b>
          </h2>
          <p className="pr-lg-5">
            Toda la información que necesitas al alcance tu mano. Cada cambio
            realizado queda registrado con nombre y apellido.
          </p>
          <a
            href="true"
            className="btn btn-lg btn-outline-secondary secondary-color rounded-pill"
          >
            Empezar ahora
          </a>
        </div>
      </div>
    </main>
  );
}
