import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: ["The technology you use impresses no one. The experience you create with it is everything...", 
        "Technology is best when it brings people together..","You can connect with me there..."],
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
      }}
    />
  );
}

export default Type;
