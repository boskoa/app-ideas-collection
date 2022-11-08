import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MyAppBar from "./components/MyAppBar";
import Bin2Dec from "./projects/beginner/Bin2Dec";
import BorderRadiusPreviewer from "./projects/beginner/BorderRadiusPreviewer";
import Calculator from "./projects/beginner/Calculator";
import ChristmasLights from "./projects/beginner/ChristmasLights";
import Provider from "./Provider";

const App = () => {
  return (
    <Provider>
      <MyAppBar />
      <Routes>
        <Route path="/bin2Dec" element={<Bin2Dec />} />
        <Route
          path="/border-radius-previewer"
          element={<BorderRadiusPreviewer />}
        />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/christmas-lights" element={<ChristmasLights />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Provider>
  );
};

export default App;
