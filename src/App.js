import { useState } from "react";
import "./App.css";

function App() {
  const [horizontal, setHorizontal] = useState(10);
  const [vertical, setVertical] = useState(10);
  const [blur, setBlur] = useState(10);
  const [color, setColor] = useState("black");
  const [checkOn, setCheckOn] = useState(false);

  return (
    <>
      <h1>Box Shadow Generator</h1>
      <div className="App">
        <div className="control">
          <label>Horizontal Shadow</label>
          <input
            type="range"
            className="input"
            min="-200"
            max="200"
            value={horizontal}
            onChange={(e) => {
              setHorizontal(e.target.value);
            }}
          />
          <label>Vertical Shadow</label>
          <input
            type="range"
            className="input"
            min="-200"
            max="200"
            value={vertical}
            onChange={(e) => {
              setVertical(e.target.value);
            }}
          />
          <label>Blur Shadow</label>
          <input
            type="range"
            className="input"
            min="0"
            max="200"
            value={blur}
            onChange={(e) => {
              setBlur(e.target.value);
            }}
          />
          <label>Shadow Color </label>
          <input
            type="color"
            className="colorInput"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
          <div className="switch">
            <label>
              Outline
              <input
                type="checkbox"
                checked={checkOn}
                onChange={() => setCheckOn(!checkOn)}
              />
              <span className="lever"></span>
              inset
            </label>
          </div>
        </div>
        <div className="boxShadow">
          <div
            className="box"
            style={{
              boxShadow: `${
                checkOn ? "inset" : ""
              } ${horizontal}px ${vertical}px ${blur}px ${color}`,
            }}
          >
            <p className="cssOutput">
              box-Shadow{checkOn ? "-inset" : ""} : {horizontal}px {vertical}px{" "}
              {blur}px {color}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
