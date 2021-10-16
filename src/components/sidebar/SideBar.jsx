import "./sidebar.css";
import { LineStyle, Timeline, TrendingUp } from "@mui/icons-material";

export default function SideBar() {
  return (
    <div className="side-bar">
      <div className="side-bar-wrapper">
        <div className="side-bar-menu">
          <h3 className="side-bar-title">Dashboard</h3>
          <ul className="side-bar-list">
            <li className="side-bar-list-item">
              <LineStyle />
              Home
            </li>
            <li className="side-bar-list-item">
              <Timeline />
              Analytics
            </li>
            <li className="side-bar-list-item">
              <TrendingUp />
              Sales
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
