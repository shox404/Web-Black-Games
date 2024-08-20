import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GameBlock, InfoPageStyle, Infos, Games } from "./style";
import { Image } from "antd";
import { Fade, Zoom } from "react-reveal";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader";

function Game() {
  const [game, setGame] = useState({});
  const [lastGame, setLastGame] = useState([]);
  const { id } = useParams();

  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/game",
      params: { id },
      headers: {
        "X-RapidAPI-Key": "9f27e906e8mshabca372a9752f73p1d8303jsnf1758946632e",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    }).then((res) => {
      setGame(res.data);
      getLastGame();
    });
  }, []);

  const getLastGame = () => {
    axios({
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
      headers: {
        "X-RapidAPI-Key": "a6ad1be522msh49c1bd35fce0391p169fc8jsn13f72f6ca374",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    }).then((res) => {
      let arr = res.data.sort((a, b) => 0.5 - Math.random());
      setLastGame([res.data[0], res.data[1], res.data[2]]);
    });
  };

  return (
    <div>
      {game.screenshots === undefined ? (
        <Loader />
      ) : (
        <InfoPageStyle backImg={game?.thumbnail}>
          <kbd></kbd>
          <GameBlock>
            <img src={game?.thumbnail} />
            <div className="btns">
              <button className="free">Free</button>
              <a href={game?.game_url}>
                <button className="now">Play Now</button>
              </a>
            </div>
            <p>
              <i className="bi bi-person"></i> Requires 3rd-Party Account
            </p>
          </GameBlock>
          <Infos>
            <Fade bottom>
              <h2>{game?.title}</h2>
              <div className="title">
                <span>
                  <i className="bi bi-mortarboard-fill"></i>
                  <p>Very Positive</p>
                </span>
                <span>
                  <p>Member Ratings</p>
                </span>
                <span>
                  <i className="bi bi-person"></i>
                  <p>Members have this game in their library!</p>
                </span>
                <span>
                  <div>
                    <i className="bi bi-chat-square"></i>
                    <p>Reviews</p>
                  </div>
                  <div>
                    <i className="bi bi-arrow-up"></i>
                    <p>Popularity</p>
                  </div>
                </span>
              </div>
              <hr />
              <div className="about">
                <h2>About {game?.title}</h2>
                <br />
                <hr />
                <span>{game?.description}</span>
              </div>
              <hr />
              <div className="blogs">
                <div className="box">
                  <p>Title</p>
                  <span>{game?.title}</span>
                </div>
                <div className="box">
                  <p>Developer</p>
                  <span>{game?.developer}</span>
                </div>
                <div className="box">
                  <p>Publisher</p>
                  <span>{game?.publisher}</span>
                </div>
                <div className="box">
                  <p>Release Date</p>
                  <span>{game?.release_date}</span>
                </div>
                <div className="box">
                  <p>Genre</p>
                  <span>{game?.genre}</span>
                </div>
                <div className="box">
                  <p>Platform</p>
                  <span>{game?.platform}</span>
                </div>
              </div>
              <hr />
              <h4>{game?.title} Screenshots</h4>
              <div className="screens">
                <Image.PreviewGroup>
                  {game?.screenshots.map((item, index) => (
                    <Image key={index} src={item.image} />
                  ))}
                </Image.PreviewGroup>
              </div>
              <div className="systeam">
                <h2>Minimum System Requirements ({game?.platform})</h2>
                <hr />
              </div>
              <div className="block">
                <div className="box">
                  <p>OS</p>
                  <span>{game?.minimum_system_requirements?.os}</span>
                </div>
                <div className="box">
                  <p>Processor</p>
                  <span>{game?.minimum_system_requirements?.processor}</span>
                </div>
                <div className="box">
                  <p>Memory</p>
                  <span>{game?.minimum_system_requirements?.memory}</span>
                </div>
                <div className="box">
                  <p>Graphics</p>
                  <span>{game?.minimum_system_requirements?.graphics}</span>
                </div>
                <div className="box">
                  <p>Storage</p>
                  <span>{game?.minimum_system_requirements?.storage}</span>
                </div>
                <div className="box">
                  <p>Additional Notes</p>
                  <span>Specifications may change during development</span>
                </div>
              </div>
              <hr />
              <q>
                All material on this page is copyrighted by ©KRAFTON, Inc. and
                their respective licensors. All other trademarks are the
                property of their respective owners.
              </q>
              <h2>Games like {game?.title}</h2>
              <hr />
              <Games>
                {lastGame.map((item, index) => (
                  <Fade bottom key={index}>
                    <div
                      className="card"
                      onClick={() => navigate(`/game/${item?.id}`)}
                    >
                      <Zoom top>
                        <img src={item?.thumbnail} />
                      </Zoom>
                      <h6>
                        <Fade> {item?.title} </Fade>{" "}
                      </h6>
                    </div>
                  </Fade>
                ))}
              </Games>
            </Fade>
          </Infos>
        </InfoPageStyle>
      )}
    </div>
  );
}
export default Game;
