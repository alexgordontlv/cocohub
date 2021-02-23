import React from "react";
import "./app.css";
import ImageGallery from "./components/ImageGallery";
function App() {
  return (
    <div className="app">
      <ImageGallery imageNumber={20} />
    </div>
  );
}

export default App;
