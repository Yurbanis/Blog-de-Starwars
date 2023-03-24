import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { GlobalCartContext } from '../context/CartContext';

const CardB = ({ uid, name, description, propiedades }) => {

  const { addToCart } = useContext(GlobalCartContext);

  return (
    <div className="card m-3">
      <img
        src="https://media.gettyimages.com/id/539206199/es/foto/yoda-maestros.webp?s=612x612&w=gi&k=20&c=16tvXuNvpanVIIEKjJUV2KLCWePiwy1PRsvXaow0pls="
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          {description} <br></br>
          birth_year: {propiedades?.birth_year} <br></br>
          eye_color: {propiedades?.eye_color} <br></br>
          skin_color: {propiedades?.skin_color}
        </p>
        <Link to={`/cardb/${uid}`}>
          <a className="btn btn-primary">
            learn more
          </a>
        </Link>
        <button type="button" className="btn btn-warning corazon" onClick={() => addToCart({ uid, name })}>
          <i className="far fa fa-heart"></i>
        </button>
      </div>
    </div>
  );
};

export default CardB;
