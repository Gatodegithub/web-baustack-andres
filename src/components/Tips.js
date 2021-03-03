import React from "react";
import reduccion from "../Icons/reduccion.svg";
import people3 from "../Icons/people3h.svg";
import worldh from "../Icons/mundihoras.svg";
import calendarh from "../Icons/calendarh.svg";
import peoplecalendar from "../Icons/peoplecalendar.svg";
import twocircle from "../Icons/twocircle.svg";

export default function Tips({handleClick, t, i18n}) {
  return (
    <section className="container-fluid bg-light">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="text-center pt-5">{t('Tips.title')}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="d-flex mt-md-5 justify-content-center justify-content-lg-end">
            <div className="tip d-flex">
              <img src={people3} alt="people3"></img>
              <div className="mt-3 pl-3">
                <p className="">
                  <h4 className="tips-green">
                    <b>{t('Tips.tips1.subtitle')}</b></h4> 
                    {t('Tips.tips1.text')}
                </p>
            </div>
          </div>
            
          </div>
          <div className="d-flex mt-md-2 justify-content-center justify-content-lg-end">
            <div className="tip d-flex">
              <img src={worldh} alt="worldh"></img>
              <div className="mt-3 pl-3">
                <p className=""><h4 className="tips-green"><b>{t('Tips.tips2.subtitle')}
                  </b></h4>{t('Tips.tips2.text')}</p>
              </div>
            </div>
          </div>
          <div className="d-flex mt-md-2 justify-content-center justify-content-lg-end">
            <div className="tip d-flex">
              <img src={calendarh} alt="calendarh"></img>
              <div className="mt-3 pl-3">
                <p className=""><h4 className="tips-green"><b>Payback time</b></h4> menor a 3   meses</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
        <div className="d-flex mt-md-5 justify-content-center justify-content-lg-start">
            <div className="tip d-flex">
              <img src={reduccion} alt="reduccion"></img>
              <div className="mt-3 pl-3">
                <p className=""><h4 className="tips-green"><b>50% de reducción</b></h4> en tiempos de reuniones de coordinación</p>
            </div>
          </div>
            
          </div>
          <div className="d-flex mt-md-2 justify-content-center justify-content-lg-start">
            <div className="tip d-flex">
              <img src={peoplecalendar} alt="peoplecalendar"></img>
              <div className="mt-3 pl-3">
                <p className=""><h4 className="tips-green"><b>27% de reducción</b></h4> en tiempo de presentaciones para seguimiento a proyectos</p>
              </div>
            </div>
          </div>
          <div className="d-flex mt-md-2 justify-content-center justify-content-lg-start">
            <div className="tip d-flex">
              <img src={twocircle} alt="twocircle"></img>
              <div className="mt-3 pl-3">
                <p className=""><h4 className="tips-green"><b>Mayor transparencia y responsabilidad</b></h4> mayor nivel de participación de empleados y feedback positivo de clientes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
