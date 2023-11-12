import { useState } from "react";

function Map() {
  const [localXY, setLocalXY] = useState({ x: 100, y: 100 });
  const [xy, setXY] = useState({ x: 100, y: 100 });
  const [size, setSize] = useState({ x: 0, y: 0 });

  const lt = { x: 37.49397985177132, y: 126.57011010000026 };
  const rb = { x: 37.32058255099964, y: 126.78518280000175 };

  const lerp = (x, y, t) => {
    return y * t + x * (1 - t);
  };

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          fontSize: 15,
          color: "white",
          backgroundColor: "#202",
          margin: 0,
          zIndex: 2,
        }}
      >
        <pre>
          <p>
            x: {localXY.x.toFixed(2)} | {xy.x.toFixed(2)} | (
            {((localXY.x / size.x) * 100).toFixed(2)}%)
          </p>
          <p>
            y: {localXY.y.toFixed(2)} | {xy.y.toFixed(2)} | (
            {((localXY.y / size.y) * 100).toFixed(2)}%)
          </p>
        </pre>
      </header>
      <img
        src="map.png"
        alt="map"
        onClick={(e) => {
          setSize({ x: e.target.width, y: e.target.height });
          setXY({ x: e.pageX, y: e.pageY });
          setLocalXY({
            x: e.pageX - e.target.offsetLeft,
            y: e.pageY - e.target.offsetTop,
          });
        }}
        style={{ width: "100%", height: "auto" }}
      />

      <div
        style={{
          width: "15px",
          height: "15px",
          display: "inline",
          borderRadius: "7.5px",
          backgroundColor: "red",
          position: "absolute",
          left: xy.x - 7.5,
          top: xy.y - 7.5,
        }}
      ></div>

      <p>lat: {lerp(lt.x, rb.x, localXY.x / size.x)}</p>
      <p>lon: {lerp(lt.y, rb.y, localXY.y / size.y)}</p>
    </>
  );
}

export default Map;
