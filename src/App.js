import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Home from "./components/Home";
import MyAppBar from "./components/MyAppBar";
import Provider from "./Provider";
import CauseEffect from "./projects/beginner/CauseEffect";
import JSON2CSV from "./projects/beginner/JSON2CSV";
import CSV2JSON from "./projects/beginner/CSV2JSON";

const Bin2Dec = lazy(() => import("./projects/beginner/Bin2Dec"));
const BorderRadiusPreviewer = lazy(() =>
  import("./projects/beginner/BorderRadiusPreviewer")
);
const Calculator = lazy(() => import("./projects/beginner/Calculator"));
const ChristmasLights = lazy(() =>
  import("./projects/beginner/ChristmasLights")
);

const App = () => {
  return (
    <Provider>
      <MyAppBar />
      <Routes>
        <Route
          path="/bin2Dec"
          element={
            <Suspense fallback="Loading...">
              <Bin2Dec />
            </Suspense>
          }
        />
        <Route
          path="/border-radius-previewer"
          element={
            <Suspense fallback="Loading...">
              <BorderRadiusPreviewer />
            </Suspense>
          }
        />
        <Route
          path="/calculator"
          element={
            <Suspense fallback="Loading...">
              <Calculator />
            </Suspense>
          }
        />
        <Route
          path="/christmas-lights"
          element={
            <Suspense fallback="Loading...">
              <ChristmasLights />
            </Suspense>
          }
        />
        <Route path="/causeeffect" element={<CauseEffect />} />
        <Route path="/json2csv" element={<JSON2CSV />} />
        <Route path="/csv2json" element={<CSV2JSON />} />
        <Route path="/" element={<Home />} />
        <Route
          path="*"
          element={<div style={{ margin: 5 }}>Page not found</div>}
        />
      </Routes>
    </Provider>
  );
};

export default App;
