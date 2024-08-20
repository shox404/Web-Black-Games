import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { HomePageStyle, GameBlock, Category, Search } from "./style";
import { memo } from "react";
import Header from "../header";
import Cards from "../../components/card";
import Loader from "../../components/loader";

function Home() {
  const [game, setGame] = useState([]);
  const [showGame, setShowGame] = useState([]);
  const [backImg, setBackImg] = useState("");
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState("");
  const [activeCard, setActiveCard] = useState(0);
  const [selectCategory, setSelectCategory] = useState("");

  useEffect(() => {
    getAllGame();
  }, []);

  const getAllGame = () => {
    axios({
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
      headers: {
        "X-RapidAPI-Key": "a6ad1be522msh49c1bd35fce0391p169fc8jsn13f72f6ca374",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    }).then((res) => {
      let number = parseInt(Math.random() * res.data.length);
      let result = res.data.slice(number - 5, number);
      setShowGame(result);
      setBackImg(result[0]?.thumbnail);
      let categorys = res.data.map((e) => e.genre);
      setCategory([...new Set(categorys)]);
      setGame(res.data);
    });
  };

  useMemo(() => {
    if (showGame.length !== 0) {
      setInterval(() => {
        setActiveCard((p) => {
          setBackImg(showGame[p]);
          p = p + 1;
          if (p === 5) p = 0;
          return p;
        });
      }, 5000);
    }
  }, [showGame]);

  return (
    <div>
      {backImg === "" ? (
        <Loader />
      ) : (
        <HomePageStyle>
          <Header
            showGame={showGame}
            backImg={backImg}
            setActiveCard={setActiveCard}
            setBackImg={setBackImg}
          />
          <GameBlock>
            <Search className="line">
              <h2>Games In Trend</h2>
              <input
                type="search"
                placeholder="Search"
                className="form-control"
                onKeyUp={(e) => setSearch(e.target.value)}
              />
            </Search>
            <Category className="category">
              <button onClick={() => setSelectCategory("")}>All</button>
              {category.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSelectCategory(item === "" ? "" : item)}
                >
                  {item}
                </button>
              ))}
            </Category>
            {(selectCategory
              ? game.filter((e) => e.genre === selectCategory)
              : game
            )
              .filter((item) =>
                item.title
                  ? item.title.toLowerCase().indexOf(search.toLowerCase()) > -1
                  : item
              )
              .map((item, index) => (
                <Cards item={item} key={index} />
              ))}
          </GameBlock>
        </HomePageStyle>
      )}
    </div>
  );
}

export default memo(Home);
