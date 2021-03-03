import React from "react";
import image from "../data.svg";

export default function MainSection({handleClick, t, i18n}) {
  return (
    <main className="container py-5">
      <div className="row pb-sm-5">
        <div className="col-lg-6 text-center text-lg-right">
          <img src={image} className="img-fluid w-100" alt="img"></img>
        </div>
        <div className="col-lg-6 text-center text-lg-left my-auto">
          <h2 className="display-4">
            <b>{t('Mainsection.row1.title')}</b>
          </h2>
          <p className="pr-lg-5">
            {t('Mainsection.row1.subtitle')}
          </p>
          <a
            href="true"
            className="btn btn-lg btn-outline-secondary secondary-color rounded-pill"
          >
            {t('action')}
          </a>
        </div>
      </div>

      <div className="row py-sm-5">
        <div className="col-lg-6 text-center text-lg-right my-auto">
          <h2 className="display-4 mt-5">
            <b className="secondary-color">
              {t('Mainsection.row2.title')}
            </b>
          </h2>
          <p className="pl-lg-5">
          {t('Mainsection.row2.subtitle')}
          </p>
          <a
            href="true"
            className="btn btn-lg btn-outline-tertiary tertiary-color rounded-pill"
          >
            {t('action')}
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
            <b className="fourth-color">{t('Mainsection.row3.title')}</b>
          </h2>
          <p className="pr-lg-5">
            {t('Mainsection.row3.subtitle')}
          </p>
          <a
            href="true"
            className="btn btn-lg btn-outline-secondary secondary-color rounded-pill"
          >
            {t('action')}
          </a>
        </div>
      </div>

      <div className="row py-sm-5">
        <div className="col-lg-6 text-center text-lg-right my-auto">
          <h2 className="display-4 mt-5">
            <b className="secondary-color">{t('Mainsection.row4.title')}</b>
          </h2>
          <p className="pl-lg-5">
            {t('Mainsection.row4.subtitle')}
          </p>
          <a
            href="true"
            className="btn btn-lg btn-outline-tertiary tertiary-color rounded-pill"
          >
            {t('action')}
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
            <b className="fourth-color">{t('Mainsection.row5.title')}</b>
          </h2>
          <p className="pr-lg-5">
            {t('Mainsection.row5.subtitle')}
          </p>
          <a
            href="true"
            className="btn btn-lg btn-outline-secondary secondary-color rounded-pill"
          >
            {t('action')}
          </a>
        </div>
      </div>
    </main>
  );
}
