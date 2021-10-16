import TopBar from "./components/topbar/TopBar";
import SideBar from "./components/sidebar/SideBar";
import "./app.css";

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="main-container">
        <SideBar />
        <div className="others">other pages</div>
      </div>
    </div>
  );
}

export default App; 
