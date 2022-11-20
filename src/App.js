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
const CauseEffect = lazy(() => import("./projects/beginner/CauseEffect"));
const JSON2CSV = lazy(() => import("./projects/beginner/JSON2CSV"));
const CSV2JSON = lazy(() => import("./projects/beginner/CSV2JSON"));
const MyCalendar = lazy(() => import("./projects/beginner/MyCalendar"));

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
        <Route
          path="/causeeffect"
          element={
            <Suspense fallback="Loading...">
              <CauseEffect />
            </Suspense>
          }
        />
        <Route
          path="/json2csv"
          element={
            <Suspense fallback="Loading...">
              <JSON2CSV />
            </Suspense>
          }
        />
        <Route
          path="/csv2json"
          element={
            <Suspense fallback="Loading...">
              <CSV2JSON />
            </Suspense>
          }
        />
        <Route
          path="/my-calendar"
          element={
            <Suspense fallback="Loading...">
              <MyCalendar />
            </Suspense>
          }
        />
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
