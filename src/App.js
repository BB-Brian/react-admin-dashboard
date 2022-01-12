import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/topbar/TopBar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import { AppSC } from "./AppSC.js";

function App() {
  return (
    <Router>
      <AppSC>
        <TopBar />
        <div className="main-container">
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
          </Routes>
        </div>
      </AppSC>
    </Router>
  );
}

export default App;
