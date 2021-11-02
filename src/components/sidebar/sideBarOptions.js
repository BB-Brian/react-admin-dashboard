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
    icon: <LineStyle className="side-bar-icon" />
  },
  {
    label: "Analytics",
    icon: <Timeline className="side-bar-icon" />
  },
  {
    label: "Sales",
    icon: <TrendingUp className="side-bar-icon" />
  }
];

export const quickMenuOptions = [
  {
    label: "Users",
    icon: <PermIdentity className="side-bar-icon" />
  },
  {
    label: "Products",
    icon: <Storefront className="side-bar-icon" />
  },
  {
    label: "Transactions",
    icon: <AttachMoney className="side-bar-icon" />
  },
  {
    label: "Reports",
    icon: <BarChart className="side-bar-icon" />
  }
];

export const notificationsMenuOptions = [
  {
    label: "Mail",
    icon: <MailOutline className="side-bar-icon" />
  },
  {
    label: "Feedback",
    icon: <DynamicFeed className="side-bar-icon" />
  },
  {
    label: "Labels",
    icon: <ChatBubbleOutline className="side-bar-icon"/>
  }
];

export const staffMenuOptions = [
  {
    label: "Manage",
    icon: <WorkOutline className="side-bar-icon" />
  },
  {
    label: "Analytics",
    icon: <Timeline className="side-bar-icon" />
  },
  {
    label: "Report",
    icon: <Report className="side-bar-icon" />
  }
];