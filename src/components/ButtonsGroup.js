import React from "react";
import Buttons from "./Buttons";

export default function ButtonsGroup({handleClick, t, i18n}) {
  return (
    <section className="container py-5">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="text-center secondary-color">{t('Buttonsgroup.title')}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div
            className="btn-group btn-group-md d-flex flex-wrap py-5"
            role="group"
            aria-label="Large button group">
              <Buttons />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12"><h5 className="text-center secondary-color">{t('Buttonsgroup.subtitle')}</h5></div>
      </div>
    </section>
  );
}
