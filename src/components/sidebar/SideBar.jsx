import "./sidebar.css";
import SideBarMenu from "./SideBarMenu";

export default function SideBar() {
  return (
    <div className="side-bar">
      <div className="side-bar-wrapper">
        <SideBarMenu />
      </div>
    </div>
  )
}
