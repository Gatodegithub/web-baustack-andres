// import React from "react";
import imgheader from "../analytics.svg";

export default function Header() {
  return (
    <header className="container">
      <div className="row header min-vh-100">
        <div className="col-lg-6 my-lg-auto text-start pb-lg-5 d-flex">
          <div className="pt-es-4">
            <h1 className="display-2 fw-bold">
              Una sola fuente de información
            </h1>
            <p className="me-5">
              Aprovecha las ventajas de trabajar en una base de datos, con la
              simpleza de una planilla Excel
            </p>
            <a
              href="true"
              className="btn btn-lg btn-primary text-white rounded-pill"
            >
              Empezar ahora
            </a>
          </div>
        </div>
        <div className="col-lg-6 align-self-center pb-lg-5 img-header">
          <img
            src={imgheader}
            className="img-fluid w-auto"
            alt="img-header"
          ></img>
        </div>
      </div>
    </header>
  );
}
