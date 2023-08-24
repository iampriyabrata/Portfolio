import React from 'react'

const AchivementsCard = () => {
  return (
    <div className="row ">
        <div className="col-12 row row-cols-2 g-2 justify-content-around pb-2">
          <div className="col-5 bg-light cards border rounded me-2">
            <p className="card-title h3">2+</p>
            <p className="card-subtitle">Certifications</p>
          </div>
          <div className="col-5 bg-light cards border rounded me-2">
            <p className="card-title h3">10+</p>
            <p lassName="card-subtitle">Projects</p>
          </div>
          <div className="col-5 bg-light cards border rounded me-2">
            <p className="card-title h3">2yr+</p>
            <p lassName="card-subtitle">Experience</p>
          </div>
          <div className="col-5 bg-light cards border rounded me-2">
            <p className="card-title h3">12+</p>
            <p lassName="card-subtitle">Skills</p>
          </div>
        </div>
      </div>
  )
}

export default AchivementsCard