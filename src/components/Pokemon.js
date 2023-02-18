import React from 'react'

export const Pokemon = ({pokemonName}) => {
    const { img, name, type, num } = pokemonName;
    const words = type.toString().split(",").map(str => str.trim()).join(", ");
  return (
    <div>
    <h2>{num}</h2>
    <img src={img} alt={name} />
     <h4>{name}</h4>
    <p className="bold">{words}</p>
     </div>
  );
}
