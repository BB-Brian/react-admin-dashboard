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


export const dashboardMenu = [
  {
    label: "Home",
    icon: <LineStyle className="sidebar-icon" />,
    path: "/"
  },
  {
    label: "Analytics",
    icon: <Timeline className="sidebar-icon" />,
    path: "/"
  },
  {
    label: "Sales",
    icon: <TrendingUp className="sidebar-icon" />,
    path: "/"
  }
];

export const quickMenu = [
  {
    label: "Users",
    icon: <PermIdentity className="sidebar-icon" />,
    path: "users"
  },
  {
    label: "Products",
    icon: <Storefront className="sidebar-icon" />,
    path: "/"
  },
  {
    label: "Transactions",
    icon: <AttachMoney className="sidebar-icon" />,
    path: "/"
  },
  {
    label: "Reports",
    icon: <BarChart className="sidebar-icon" />,
    path: "/"
  }
];

export const notificationsMenu = [
  {
    label: "Mail",
    icon: <MailOutline className="sidebar-icon" />,
    path: "/"
  },
  {
    label: "Feedback",
    icon: <DynamicFeed className="sidebar-icon" />,
    path: "/"
  },
  {
    label: "Labels",
    icon: <ChatBubbleOutline className="sidebar-icon"/>,
    path: "/"
  }
];

export const staffMenu = [
  {
    label: "Manage",
    icon: <WorkOutline className="sidebar-icon" />,
    path: "/"
  },
  {
    label: "Analytics",
    icon: <Timeline className="sidebar-icon" />,
    path: "/"
  },
  {
    label: "Report",
    icon: <Report className="sidebar-icon" />,
    path: "/"
  }
];

