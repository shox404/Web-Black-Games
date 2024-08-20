import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Game from "./pages/game";
import { Block } from "./style";

const App = () => {
  return (
    <Block>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:id" element={<Game />} />
      </Routes>
    </Block>
  );
};

export default App;
