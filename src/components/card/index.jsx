import React from "react";
import { GameCard } from "./style";
import { Fade, Zoom } from "react-reveal";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const navigate = useNavigate();

  return (
    <GameCard>
      <Zoom top>
        <img src={item?.thumbnail} />
      </Zoom>
      <Fade>
        <div className="text">
          <h4 className="name">
            <Fade> {item?.title} </Fade>
          </h4>
          <p>
            <Fade> {item?.genre} </Fade>
          </p>
          <Fade right>
            <button onClick={() => navigate(`/game/${item?.id}`)}>
              <i className="bi bi-steam"> </i> Steam
            </button>
          </Fade>
        </div>
      </Fade>
    </GameCard>
  );
};

export default Card;
