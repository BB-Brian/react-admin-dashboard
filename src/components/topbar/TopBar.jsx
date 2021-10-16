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
          </div>
          <img src="https://media-exp1.licdn.com/dms/image/C5603AQEvo56xcyw2dw/profile-displayphoto-shrink_200_200/0/1576117536537?e=1639612800&v=beta&t=jDIicRXu3DkLiW2tA5MQXMuNfL5eFMz7d8qeCU0bj7A" alt="avatar" className="top-avatar" />
        </div>
      </div>
    </div>
  )
};
