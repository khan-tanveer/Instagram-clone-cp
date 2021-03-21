import React from "react";
import "./App.css";
import Post from "./Post";

function App() {
  return (
    <div className="App">
      {/* Header  */}
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>
      <h1>hello khan programmer so let's build instagram clone with react</h1>

      <Post />

      {/*  posts */}
      {/*  posts */}
    </div>
  );
}

export default App;
