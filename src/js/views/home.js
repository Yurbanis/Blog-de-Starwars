import React, { useState, useEffect } from "react";
import "../../styles/home.css";
import CardB from "./cardb";


export const Home = () => {
  const [url] = useState("https://www.swapi.tech/api");

  const [cards, setCards] = useState(null);

  useEffect(() => {
    getCharacters(`${url}/people`);
  }, []);

  const getCharacters = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      //console.log(data);
      
      const { results } = data;

      results.forEach(async ({ url }, i) => {
        if (url) {
          const resp = await fetch(url);
          const info = await resp.json();
          data.results[i].description = info.result.description;
          data.results[i].propiedades = info.result.properties;
        }
      }); 

      setCards(data);
      console.log("********* Paso 2 ************");
      console.log(data);
      console.log("*********************");
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
    <div className="container">
      <div className="row m-5">
        <h1>Characters</h1>
        <div className="d-flex flex-nowrap overflow-auto">
          {!!cards && cards.results.map(({ uid, name, descripcion, propiedades }) => {
              console.log(descripcion);
              return (
                <div className="col-md-4" key={uid}>
                  <CardB
                    name={name}
                    descripcion={descripcion}
                    propiedades={propiedades}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
