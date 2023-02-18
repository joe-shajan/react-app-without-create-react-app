import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(1);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "cursive",
        backgroundImage: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        gap: "50px",
      }}
    >
      <h1>
        This react app was made from scratch wilthout using create react app.
      </h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2>Count: {count}</h2>
        <button
          style={{
            backgroundImage:
              "linear-gradient(to top, #accbee 0%, #e7f0fd 100%)",
            borderRadius: "5px",
            border: 0,
            fontWeight: 500,
            padding: "8px",
          }}
          onClick={() => setCount((prev) => prev + 1)}
        >
          Add count
        </button>
      </div>
    </div>
  );
};

export default App;
