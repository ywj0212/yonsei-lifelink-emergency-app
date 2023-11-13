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
      case "/main":
        title = "Life-Link 구조대원 앱 메인페이지";
        metaDescription = "주변 병원 목록 표시, 메인페이지";
        break;
      case "/hospital-detail":
        title = "Life-Link 병원 상세 정보";
        metaDescription = "병원 병상 현황, 의료진 현황 검색";
        break;
      case "/pati-info":
        title = "Life-Link 환자 정보 입력";
        metaDescription = "환자 인적사항 입력";
        break;
      case "symptom":
        title = "Life-Link 환자 증상 입력";
        metaDescription = "환자 증상, 상태 입력";
        break;
      case "/map":
        title = "Life-Link 위치 입력";
        metaDescription = "시연을 위해서 환자 수송 위치를 지도에서 선택";
        break;
      case "/prektas":
        title = "Life-Link PreKTAS 정보 입력";
        metaDescription = "구조대원이 환자의 상태를 PreKTAS 기준으로 평가";
        break;
      case "/department":
        title = "Life-Link 환자 진료과 입력";
        metaDescription = "필요한 진료과 목록을 입력";
        break;
      case "/recom-hospital":
        title = "Life-Link 병원 추천 목록";
        metaDescription = "알고리즘 기반 병원 추천 목록";
        break;
      case "/transiting":
        title = "Life-Link 환자 이송 중";
        metaDescription = "환자 이송 페이지";
        break;
      default:
        title = "Life-Link";
        metaDescription =
          "응급의료 통합 시스템, Life-Link의 구급구조대원 용 앱";
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
    fetch("https://lifelink-api.mirix.kr/app/gethospitals/", {
      method: "POST",
      body: {
        "latitude": 37.38252,
        "longitude": 126.672303,
        "preKTAS": 2,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
    const timeoutId = setTimeout(() => {
      setShowSplash(false);
    }, 1000);

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
      <Route path="/main" exact element={<Frame6 />} />
      <Route path="/hospital-detail" element={<Frame />} />
      <Route path="/pati-info" element={<Frame4 />} />
      <Route path="/symptom" element={<Frame3 />} />
      <Route path="/map" element={<Map />} />
      <Route path="/prektas" element={<PreKtas />} />
      <Route path="/department" element={<Frame2 />} />
      <Route path="/recom-hospital" element={<Frame1 />} />
      <Route path="/transiting" element={<Transiting />} />
    </Routes>
  );
}

export default App;
