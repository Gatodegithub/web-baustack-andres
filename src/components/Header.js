// import React from "react";
import imgheader from "../analytics.svg";


export default function Header({handleClick, t, i18n}) {
  return (
    <header className="container">
      <div className="row header min-vh-100">
        <div className="col-lg-6 my-lg-auto text-start pb-lg-5 d-flex">
          <div className="pt-es-4">
            <h1 className="display-2 fw-bold">
              {t('Header.title')}
            </h1>
            <p className="me-5">
              {t('Header.subtitle')}
            </p>
            <a
              href="true"
              className="btn btn-lg btn-primary text-white rounded-pill"
            >
              {t('action')}
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
