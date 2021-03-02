// import React from "react";

export default function Contact() {
  return (
    <div className="section container pb-5">
      <div className="row">
        <div className="col-lg-12">
          <h2 className="text-center py-5">Contacto</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <form id="form" className="pb-3 px-5">
            <div className="mb-3">
              <label htmlFor="to_name" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control shadow"
                id="to_name"
                name="to_name"
                required=""
                pattern="[A-Za-z ]{4,15}"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="telefono" className="form-label">
                Telefono
              </label>
              <input
                type="text"
                className="form-control shadow"
                id="telefono"
                name="telefono"
                required=""
                pattern="[A-Za-z ]{4,15}"
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="cc_to" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control shadow"
                id="cc_to"
                name="cc_to"
                pattern="^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$"
                required=""
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Mensaje
              </label>
              <textarea
                className="form-control shadow"
                id="message"
                name="message"
                maxLength="200"
                placeholder="Escríbenos..."
              ></textarea>
            </div>

            <input
              className="btn btn-primary w-100 rounded-pill py-2"
              type="submit"
              id="button"
              value="Enviar"
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
}
