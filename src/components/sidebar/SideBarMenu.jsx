import { dashboardMenuOptions, quickMenuOptions, notificationsMenuOptions, staffMenuOptions } from "./sidebarOptions";
import "./sidebar.css";

const SidebarMenu = () => {
  return (
    <>
      <div className="sidebar-menu">
        <h3 className="sidebar-title">Dashboard</h3>
        <ul className="sidebar-list">
        {dashboardMenuOptions.map((item, index) => (
          <li key={`${index}`} className="sidebar-list-item">
            {item.icon}
            {item.label}
          </li>
        ))}
        </ul>
      </div>

      <div className="sidebar-menu">
      <h3 className="sidebar-title">Quick</h3>
      <ul className="sidebar-list">
        {quickMenuOptions.map((item, index) => (
          <li key={`${index}`} className="sidebar-list-item">
            {item.icon}
            {item.label}
          </li>
        ))}
      </ul>
      </div>

      <div className="sidebar-menu">
      <h3 className="sidebar-title">Notifications</h3>
      <ul className="sidebar-list">
        {notificationsMenuOptions.map((item, index) => (
          <li key={`${index}`} className="sidebar-list-item">
            {item.icon}
            {item.label}
          </li>
        ))}
      </ul>
      </div>
      
      <div className="sidebar-menu">
      <h3 className="sidebar-title">Staff</h3>
      <ul className="sidebar-list">
        {staffMenuOptions.map((item, index) => (
          <li key={`${index}`} className="sidebar-list-item">
            {item.icon}
            {item.label}
          </li>
        ))}
      </ul>
      </div>
    </>
  );
};

export default SidebarMenu;