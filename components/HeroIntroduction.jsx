import React from 'react'

const HeroIntroduction = () => {
  return (
    <div className="row py-1">
        <div className="col d-flex justify-content-center align-items-start flex-column text-secondary">
          <div className="intro-text">Hi, I'm</div>
          <div className="intro-text text-dark">Priyabrata Munda</div>
          <div className="intro-text typewriter">
            a <span className="text-primary">Web-developer.</span>
          </div>
        </div>
        <div className="col">
          <figure class="figure">
            <img id='profile-image' src="src/assets/profile.jpg" class="img-fluid" alt="..." />
          </figure>
        </div>
      </div>
  )
}

export default HeroIntroduction