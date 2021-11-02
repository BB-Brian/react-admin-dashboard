import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  WorkOutline,
  DynamicFeed,
  ChatBubbleOutline,
  Report
} from "@mui/icons-material";


export const dashboardMenuOptions = [
  {
    label: "Home",
    icon: <LineStyle className="sidebar-icon" />
  },
  {
    label: "Analytics",
    icon: <Timeline className="sidebar-icon" />
  },
  {
    label: "Sales",
    icon: <TrendingUp className="sidebar-icon" />
  }
];

export const quickMenuOptions = [
  {
    label: "Users",
    icon: <PermIdentity className="sidebar-icon" />
  },
  {
    label: "Products",
    icon: <Storefront className="sidebar-icon" />
  },
  {
    label: "Transactions",
    icon: <AttachMoney className="sidebar-icon" />
  },
  {
    label: "Reports",
    icon: <BarChart className="sidebar-icon" />
  }
];

export const notificationsMenuOptions = [
  {
    label: "Mail",
    icon: <MailOutline className="sidebar-icon" />
  },
  {
    label: "Feedback",
    icon: <DynamicFeed className="sidebar-icon" />
  },
  {
    label: "Labels",
    icon: <ChatBubbleOutline className="sidebar-icon"/>
  }
];

export const staffMenuOptions = [
  {
    label: "Manage",
    icon: <WorkOutline className="sidebar-icon" />
  },
  {
    label: "Analytics",
    icon: <Timeline className="sidebar-icon" />
  },
  {
    label: "Report",
    icon: <Report className="sidebar-icon" />
  }
];