import React from "react";

const HeroIntroduction = () => {
  return (
    <div className="row py-1">
      <div className="col-6 row d-flex flex-column justify-content-center text-secondary">
        <div className="col-12 d-flex justify-content-center align-items-start flex-column text-secondary">
          <div className="intro-text">Hello, I'm</div>
          <div className="intro-text text-dark">Priyabrata Munda</div>
          <div className="intro-text typewriter">
            a <span className="text-primary">Web-developer.</span>
          </div>
        </div>
        <div className="col-12">
          <p className="h6 intro-description font-monospace">
            Hi, i'm Priyabrata Munda, a freelance web-developer from India.I help brands
            design their high quality products.
          </p>
        </div>
        <div className="col-12 row row-cols-2 g-2">
        <button type="button" class="col-5 me-2 btn btn-outline-dark">View Projects</button>
        <button type="button" class="col-5 btn btn-dark">Contact</button>
        </div>
      </div>
      <div className="col-6">
        <figure class="figure">
          <img
            id="profile-image"
            src="src/assets/profile.jpg"
            class="img-fluid"
            alt="..."
          />
        </figure>
      </div>
    </div>
  );
};

export default HeroIntroduction;
