import ContactPageIcon from "@mui/icons-material/ContactPage";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import SettingsIcon from "@mui/icons-material/Settings";

export const NavLinkItem = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "Email",
    icon: <EmailIcon />,
    link: "./email",
  },
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "./dashboard",
  },
  {
    title: "Setting",
    icon: <SettingsIcon />,
    link: "./setting",
  },
  {
    title: "Info",
    icon: <InfoIcon />,
    link: "./info",
  },
  {
    title: "Contact",
    icon: <ContactPageIcon />,
    link: "./contact",
  },
];
