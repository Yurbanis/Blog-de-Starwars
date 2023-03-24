import React, { useState, useEffect } from "react";
import "../../styles/home.css";
import CardB from "./cardb";
import Planets from "../component/plannet";

export const Home = () => {
  const [url] = useState("https://www.swapi.tech/api");

  const [cards, setCards] = useState(null);

  useEffect(() => {
    getCharacters(`${url}/people`);
  }, []);

  const getCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const peopleData = data.results;

        const peopleProperties = peopleData.map((people) =>
          fetch(people.url).then((response) => response.json())
        );

        Promise.all(peopleProperties)
          .then((peopleProperties1) => {
            const peopleData1 = peopleData.map((people, index) => ({
              ...people,
              properties: peopleProperties1[index].result.properties,
              description: peopleProperties1[index].result.description,
            }));

            setCards(peopleData1);
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="container">
      <div>
        <div className="row m-5">
          <h1>Characters</h1>
          <div className="d-flex flex-nowrap overflow-auto">
            {!!cards &&
              cards.map(({ uid, name, properties, description }) => {
                return (
                  <div className="col-md-4" key={uid}>
                    <CardB
                      uid={uid}
                      name={name}
                      propiedades={properties}
                      description={description}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <Planets />
      </div>
    </div>
  );
};
