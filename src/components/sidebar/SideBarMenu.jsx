import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as options from "./sidebarOptions";
import "./sidebar.css";

const SidebarMenu = () => {
  const [active, setActive] = useState(options.dashboardMenu[0]);

  return (
    <>
      <div className="sidebar-menu">
        <h3 className="sidebar-title">Dashboard</h3>
        <ul className="sidebar-list">
          {options.dashboardMenu.map((item, index) => (
            <Link to={item.path} key={`${index}`}>
              <li
                className={`sidebar-list-item ${item === active ? "active" : null}`}
                onClick={() => setActive(item)}
              >
                {item.icon}
                {item.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="sidebar-menu">
        <h3 className="sidebar-title">Quick</h3>
        <ul className="sidebar-list">
          {options.quickMenu.map((item, index) => (
            <Link to={item.path} key={`${index}`}>
              <li
                className={`sidebar-list-item ${item === active ? "active" : null}`}
                onClick={() => setActive(item)}
              >
                {item.icon}
                {item.label}
              </li>
            </Link>

          ))}
        </ul>
      </div>

      <div className="sidebar-menu">
        <h3 className="sidebar-title">Notifications</h3>
        <ul className="sidebar-list">
          {options.notificationsMenu.map((item, index) => (
            <Link to={item.path} key={`${index}`}>
              <li
                className={`sidebar-list-item ${item === active ? "active" : null}`}
                onClick={() => setActive(item)}
              >
                {item.icon}
                {item.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="sidebar-menu">
        <h3 className="sidebar-title">Staff</h3>
        <ul className="sidebar-list">
          {options.staffMenu.map((item, index) => (
            <Link to={item.path} key={`${index}`}>
              <li
                className={`sidebar-list-item ${item === active ? "active" : null}`}
                onClick={() => setActive(item)}
              >
                {item.icon}
                {item.label}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SidebarMenu;