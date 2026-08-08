import AnnouncementBar from "./components/layout/AnnouncementBar";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";

import "./App.css";

function App() {
  return (
    <div className="app">
      <AnnouncementBar />
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;