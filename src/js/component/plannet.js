import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalCartContext } from '../context/CartContext';

function Planets() {
  const { addToCart } = useContext(GlobalCartContext);

  const [url] = useState("https://www.swapi.tech/api");
  const [planets, setPlanets] = useState([]);

  const fetchPlanetsData = async (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const planetsData = data.results;

        const fetchPlanetsProperties = planetsData.map((planet) =>
          fetch(planet.url).then((response) => response.json())
        );

        Promise.all(fetchPlanetsProperties)
          .then((planetsProperties) => {
            const planetsData1 = planetsData.map((planet, index) => ({
              ...planet,
              properties: planetsProperties[index].result.properties,
            }));
            setPlanets(planetsData1);
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchPlanetsData(`${url}/planets`);
  }, []);

  return (
    <div className="container">
      <div className="row m-5">
        <h1>Planets</h1>
        <div className="d-flex flex-nowrap overflow-auto">
          {planets.map(({ uid, name, properties }) => (
            <div className="col-md-4" key={uid}>
              <div className="card m-3">
                <div className="card-body">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqzgdcQrWQoScQd9aC5YVh-BesZ2XYggcHZ-YQP38BpPcKNKhFgY4MZnb6bvHAUTya-dY&usqp=CAU"
                    className="card-img-top"
                    alt="..."
                  />
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">
                    Terrain: {properties.terrain} <br></br>
                    Population: {properties.population} <br></br>
                    Diameter: {properties.diameter}
                  </p>
                  <Link to={`/planets/${uid}`}>
                    <a href="#" className="btn btn-primary">
                      learn more
                    </a>
                  </Link>

                  <button type="button" className="btn btn-warning corazon" onClick={() => addToCart({ uid, name })}>
                    <i className="far fa fa-heart"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Planets;
