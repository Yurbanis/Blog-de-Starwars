import React from 'react' 

const CardB = ({ name, descripcion, propiedades}) => {
    return (
        <div className="card m-3">
              <img
                src="https://media.gettyimages.com/id/539206199/es/foto/yoda-maestros.webp?s=612x612&w=gi&k=20&c=16tvXuNvpanVIIEKjJUV2KLCWePiwy1PRsvXaow0pls="
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                 {name} 
                </h5>
                <p className="card-text">
                {descripcion}  {propiedades?.eye_color}
                </p>
                <a href="#" className="btn btn-primary">
                  learn more
                </a>
                <button type="button" className="btn btn-warning corazon">
                  <i className="far fa fa-heart"></i></button>
              </div>
            </div>
    )
}

export default CardB