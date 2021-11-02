import TopBar from "./components/topbar/TopBar";
import SideBar from "./components/sidebar/SideBar";
import Home from "./pages/home/Home";
import "./app.css";

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="main-container">
        <SideBar />
        <Home />
      </div>
    </div>
  );
}

export default App; 
