import React from "react";
import { Zoom, Fade } from "react-reveal";
import { Block, BlockItem } from "./style";

const Header = (prop) => {
  const { showGame, backImg, setActiveCard, setBackImg } = prop;

  const active = (index) => {
    setActiveCard((p) => {
      p = index;
      setBackImg(showGame[index]);
      if (p === 4) p = index;
      return p;
    });
  };

  return (
    <Block backImg={backImg.thumbnail}>
      <div className="infos">
        <Fade>
          <h1>{backImg?.title}</h1>
          <h4>{backImg?.publisher}</h4>
          <a href={backImg?.game_url}>
            <button>See Detalis</button>
          </a>
        </Fade>
      </div>
      <BlockItem>
        {showGame.map((item, index) => (
          <div
            key={index}
            className={
              backImg?.id == item.id ? "active game-card" : "game-card"
            }
            onClick={() => active(index)}
          >
            <img src={item?.thumbnail} />
            <span> {item?.title} </span>
          </div>
        ))}
      </BlockItem>
    </Block>
  );
};

export default Header;
