import TopBar from "./components/topbar/TopBar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import "./app.css";

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="main-container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App; 
