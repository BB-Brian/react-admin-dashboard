import { WidgetSmallSC } from "./WidgetSmallSC";
import { Visibility } from "@mui/icons-material";

export default function WidgetSmall({ data }) {

  const userData = data;

  return (
    <WidgetSmallSC>
      <div className="widget-small">
        <span className="widget-small-title">New Members</span>
        <ul className="widget-small-list">
          {userData?.map((user, index) => (
            <li
              key={index}
              className="widget-small-list-item"
            >
              <img
                className="widget-small-image"
                src={user.image}
                alt="widget-small-user"
              />
              <div className="widget-small-user-container">
                <div className="widget-small-user">
                  <span className="widget-small-username">{user.name}</span>
                  <span className="widget-small-user-title">{user.jobTitle}</span>
                </div>
                <button className="widget-small-button">
                  <Visibility className="widget-small-icon" />
                  Display
                </button>
              </div>
            </li>
          )
          )}
        </ul>
      </div>
    </WidgetSmallSC>
  );
};
