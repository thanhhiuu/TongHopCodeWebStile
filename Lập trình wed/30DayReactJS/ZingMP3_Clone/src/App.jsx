import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, Public, MyMusic } from "./pages/public/Index";
import path from "./ultis/path";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getHomeApi } from "./store/acction/index";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHomeApi());
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path={path.public} element={<Public />}>
            <Route path={path.home} element={<Home />} />
            <Route path={path.mymusic} element={<MyMusic />} />
            <Route path={path.login} element={<Login />} />
            <Route path={path.static} element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
