import React from "react";

const Servicess = () => {
  return (
    <div id="Servicess">
      <div className="container-fluid p-0 width-100wh height-100wh">
        <div className="row g-0 fixed-img">
          <div className="col-lg-4 col-sm-6">
            <a className="Servicess-box" href="/services">
              <img
                className="img-fluid"
                src="/img/services/istockphoto-1306107766-612x612.jpg"  // Correct image path relative to public
                alt="Data Entry"
              />
              <div className="Servicess-box-caption">
                <div className="project-category text-white-50">Data Entry</div>
                <div className="project-name">DATA ENTRY</div>
              </div>
            </a>
          </div>

          <div className="col-lg-4 col-sm-6">
            <a className="Servicess-box" href="/services">
              <img
                className="img-fluid"
                src="/img/services/2 ct bg.jpeg"  // Correct image path relative to public
                alt="Typesetting"
              />
              <div className="Servicess-box-caption">
                <div className="project-category text-white-50">Typesetting</div>
                <div className="project-name">TYPESETTING</div>
              </div>
            </a>
          </div>

          <div className="col-lg-4 col-sm-6">
            <a className="Servicess-box" href="/services">
              <img
                className="img-fluid"
                src="/img/services/AdobeStock_297543660-scaled.jpeg"  // Correct image path relative to public
                alt="DTP"
              />
              <div className="Servicess-box-caption">
                <div className="project-category text-white-50">DTP</div>
                <div className="project-name">DTP</div>
              </div>
            </a>
          </div>

          <div className="col-lg-4 col-sm-6">
            <a
              className="Servicess-box"
              href="/services"
              title="Project Name"
            >
              <img
                className="img-fluid"
                src="/img/services/4ct bg.jpeg"  // Correct image path relative to public
                alt="Image Editing"
              />
              <div className="Servicess-box-caption">
                <div className="project-category text-white-50">Image Editing</div>
                <div className="project-name">IMAGE EDITING</div>
              </div>
            </a>
          </div>

          <div className="col-lg-4 col-sm-6">
            <a
              className="Servicess-box"
              href="/services"
              title="Project Name"
            >
              <img
                className="img-fluid"
                src="/img/services/5 ct bg.jpeg"  // Correct image path relative to public
                alt="Transcribing Handwritten Document"
              />
              <div className="Servicess-box-caption">
                <div className="project-category text-white-50">THD</div>
                <div className="project-name">TRANSCRIBING HANDWRITTEN DOCUMENT</div>
              </div>
            </a>
          </div>

          <div className="col-lg-4 col-sm-6">
            <a
              className="Servicess-box"
              href="/services"
              title="Project Name"
            >
              <img
                className="img-fluid"
                src="/img/services/6ct bg.jpeg"  // Correct image path relative to public
                alt="Data Mining"
              />
              <div className="Servicess-box-caption p-3">
                <div className="project-category text-white-50">Data Mining</div>
                <div className="project-name">DATA MINING</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicess;
