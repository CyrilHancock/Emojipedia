import React from "react";
import Dictonary from "./Dictonary";
import emojipedia from "/src/emojipedia";
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map((emoji) => (
          <Dictonary
            key={emoji.id}
            emoji={emoji.emoji}
            name={emoji.name}
            meaning={emoji.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
