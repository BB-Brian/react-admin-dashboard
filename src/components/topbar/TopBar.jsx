import React from "react"
import "./topbar.css";
import { NotificationsNone, Language, Settings } from '@mui/icons-material';
export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-wrapper">
        <div className="top-left">
          <span className="logo">TheAdminPanel</span>
        </div>
        <div className="top-right">
          <div className="top-bar-icon-container">
            <NotificationsNone />
            <span className="top-icon-badge">2</span>
          </div>
          <div className="top-bar-icon-container">
            <Language />
            <span className="top-icon-badge">2</span>
          </div>
          <div className="top-bar-icon-container">
            <Settings />
            <span className="top-icon-badge">2</span>
          </div>
        </div>
      </div>
    </div>
  )
};
