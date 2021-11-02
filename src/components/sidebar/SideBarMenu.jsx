import { dashboardMenuOptions, quickMenuOptions, notificationsMenuOptions, staffMenuOptions } from "./sideBarOptions";
import "./sidebar.css";

const SideBarMenu = () => {
  return (
    <>
      <div className="side-bar-menu">
        <h3 className="side-bar-title">Dashboard</h3>
        <ul className="side-bar-list">
        {dashboardMenuOptions.map((item, index) => (
          <li key={`${index}`} className="side-bar-list-item">
            {item.icon}
            {item.label}
          </li>
        ))}
        </ul>
      </div>

      <div className="side-bar-menu">
      <h3 className="side-bar-title">Quick</h3>
      <ul className="side-bar-list">
        {quickMenuOptions.map((item, index) => (
          <li key={`${index}`} className="side-bar-list-item">
            {item.icon}
            {item.label}
          </li>
        ))}
      </ul>
      </div>

      <div className="side-bar-menu">
      <h3 className="side-bar-title">Notifications</h3>
      <ul className="side-bar-list">
        {notificationsMenuOptions.map((item, index) => (
          <li key={`${index}`} className="side-bar-list-item">
            {item.icon}
            {item.label}
          </li>
        ))}
      </ul>
      </div>
      
      <div className="side-bar-menu">
      <h3 className="side-bar-title">Staff</h3>
      <ul className="side-bar-list">
        {staffMenuOptions.map((item, index) => (
          <li key={`${index}`} className="side-bar-list-item">
            {item.icon}
            {item.label}
          </li>
        ))}
      </ul>
      </div>
    </>
  );
};

export default SideBarMenu;