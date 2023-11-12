import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
  Navigate,
} from "react-router-dom";
import Frame from "./pages/Frame";
import Frame1 from "./pages/Frame1";
import Frame2 from "./pages/Frame2";
import PreKtas from "./pages/PreKtas";
import Frame3 from "./pages/Frame3";
import Frame4 from "./pages/Frame4";
import Frame5 from "./pages/Frame5";
import Frame6 from "./pages/Frame6";
import Frame7 from "./pages/Frame7";
import Transiting from "./pages/Transiting";
import Map from "./pages/Map";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/1":
        title = "";
        metaDescription = "";
        break;
      case "/prektas":
        title = "";
        metaDescription = "";
        break;
      case "/2":
        title = "";
        metaDescription = "";
        break;
      case "/3":
        title = "";
        metaDescription = "";
        break;
      case "/4":
        title = "";
        metaDescription = "";
        break;
      case "/5":
        title = "";
        metaDescription = "";
        break;
      case "/6":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  useEffect(() => {
    // Hide splash screen after a delay (e.g., 2000 milliseconds)
    const timeoutId = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    // Clear the timeout when the component unmounts or when navigating away
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          showSplash ? <Frame7 /> : <Navigate to="/main" replace={true} />
        }
      />
      <Route path="/hospital-detail" element={<Frame />} />
      <Route path="/8" element={<Frame1 />} />
      <Route path="/department" element={<Frame2 />} />
      <Route path="/prektas" element={<PreKtas />} />
      <Route path="/symptom" element={<Frame3 />} />
      <Route path="/pati-info" element={<Frame4 />} />
      <Route path="/main" exact element={<Frame6 />} />
      <Route path="/transiting" element={<Transiting />} />
      <Route path="/map" element={<Map />} />
    </Routes>
  );
}
export default App;
