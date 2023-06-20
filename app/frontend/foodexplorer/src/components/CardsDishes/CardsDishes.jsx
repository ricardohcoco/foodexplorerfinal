import React from 'react';
import { ContainerHome } from './styles';

function CardsDishes({ dishes }) {
  return (
    <ContainerHome>
      {dishes && dishes.length > 0 && (
        <div className="refeições">
          {dishes.map((e, i) => (
            <div key={i} className="card1">
              <img
                src={`http://localhost:3000/uploads/${e.image}`}
                alt="image-teste"
              />
              <h2>{e.name}</h2>
              <p>{e.ingredients}</p>
              <span>{`R$ ${Number(e.price)
                .toFixed(2)
                .replace('.', ',')}`}</span>
            </div>
          ))}
        </div>
      )}
    </ContainerHome>
  );
}

export default CardsDishes;
