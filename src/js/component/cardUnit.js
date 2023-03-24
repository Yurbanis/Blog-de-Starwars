import React, { useEffect, useState } from "react";

const CardUnit = () => {
  const nameUrl = window.location.href;
  const [urlCorta, setUrlCorta] = useState("people");
  const [imagen, setImagen] = useState(
    "https://media.gettyimages.com/id/539206199/es/foto/yoda-maestros.webp?s=612x612&w=gi&k=20&c=16tvXuNvpanVIIEKjJUV2KLCWePiwy1PRsvXaow0pls="
  );
  const urCorta = nameUrl.split("/");
  
  const [url] = useState("https://www.swapi.tech/api");

  const [card, setCard] = useState([]);

  const getCharacters = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((people) => setCard(people.result))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (urCorta[3] === "planets") {
      setUrlCorta("planets")
      setImagen("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqzgdcQrWQoScQd9aC5YVh-BesZ2XYggcHZ-YQP38BpPcKNKhFgY4MZnb6bvHAUTya-dY&usqp=CAU")
    }

    getCharacters(`${url}/${urlCorta}/${urCorta[4]}`);
  }, []);
  return (
    <div className="card m-3">
      <div className="card-body">
        <div className="row">
          <div className="col-md-5">
            <img src={imagen} className="card-img-top" alt="..." />
          </div>
          <div className="col-md-6">
            <h2 className="card-title">{card?.properties?.name}</h2>
            <h3 className="card-title">{card?.description}</h3>
            <p className="card-text text-danger">
              <strong>birth_year:</strong> {card?.properties?.birth_year}
            </p>
            <p className="card-text text-danger">
              <strong>eye_color:</strong> {card?.properties?.eye_color}
            </p>
            <p className="card-text text-danger">
              <strong>gender:</strong> {card?.properties?.gender}
            </p>
            <p className="card-text text-danger">
              <strong>hair_color:</strong> {card?.properties?.hair_color}
            </p>
            <p className="card-text text-danger">
              <strong>skin_color:</strong> {card?.properties?.skin_color}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardUnit;
