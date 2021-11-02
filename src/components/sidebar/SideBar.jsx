import "./sidebar.css";
import SidebarMenu from "./SidebarMenu";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <SidebarMenu />
      </div>
    </div>
  )
}
