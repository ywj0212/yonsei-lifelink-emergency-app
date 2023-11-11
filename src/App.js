import { useState } from "react";

function App() {
  const [localXY, setLocalXY] = useState({x: 100, y: 100});
  const [xy, setXY] = useState({x: 100, y: 100});
  const [size, setSize] = useState({x: 0, y: 0});

  const lt = {x: 37.49397985177132, y: 126.57011010000026}
  const rb = {x: 37.32058255099964, y: 126.78518280000175}

  const lerp = (x, y, t) => {
    return (y * t + x * (1-t));
  }

  return (<>
    <img
      src="map.png"
      alt="map"
      onClick={(e) => {
        setSize({x: e.target.width, y: e.target.height});
        setXY({x:e.clientX,y:e.clientY});
        setLocalXY({x: e.clientX - e.target.offsetLeft, y: e.clientY - e.target.offsetTop});
        }
      }
      style={{position: "absolute", left: 10, top: 150, width: "80%", height: "auto"}}
      />

    <div style={{width: '15px', height: '15px', display: "inline", borderRadius: '7.5px', backgroundColor: "red", position: "absolute", left: xy.x - 7.5, top: xy.y - 7.5}}></div>

    <p>x: {localXY.x}, {xy.x}, ({(localXY.x / size.x)*100}%)</p>
    <p>y: {localXY.y}, {xy.y}, ({(localXY.y / size.y)*100}%)</p>
    <p>lat: {lerp(lt.x, rb.x, (localXY.x / size.x))}</p>
    <p>lon: {lerp(lt.y, rb.y, (localXY.y / size.y))}</p>
  </>)
}

export default App;
