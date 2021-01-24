import React, { useState, useEffect } from "react";

import "./styles.scss";

export const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className="Characters">
      {characters.map((character) => (
          <div className="card">
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
            <h3>Estado: {character.status}</h3>
            <h3>Genero: {character.gender}</h3>
            <h3>Especie: {character.species}</h3>
            <h3>Location: {character.location.name}</h3>
        </div>
      ))}
    </div>
  );
};
