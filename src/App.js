import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Home from "./components/Home";
import MyAppBar from "./components/MyAppBar";
import Provider from "./Provider";

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
        <Route path="/" element={<Home />} />
      </Routes>
    </Provider>
  );
};

export default App;
