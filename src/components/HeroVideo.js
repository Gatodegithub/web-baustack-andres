import React from "react";

export default function HeroVideo() {
  return (
    <section className="container-fluid bg-light hero-video">
      <div className="row">
        <div className="col-lg-12 px-md-5">
          <h2 className="text-center px-lg-5">
            Crear tu propia aplicación nunca fue tan fácil, no necesitas
            conocimientos técnicos!
          </h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center py-5">
          <div className="ratio ratio-1x1">
            <iframe
              src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
