import { BottomNavigation, BottomNavigationAction, Badge } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";
import Link from "next/link";

export default function Footer() {
  return (
    <BottomNavigation
      showLabels
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <BottomNavigationAction
        label="ホーム"
        icon={<HomeIcon />}
        component={Link}
        href="/"
      />
      <BottomNavigationAction
        label="検索"
        icon={<SearchIcon />}
        component={Link}
        href="/search"
      />
      <BottomNavigationAction
        label="通知"
        icon={<Badge color="error" variant="dot">
          <NotificationsIcon />
        </Badge>
        }
        component={Link}
        href="/alert"
      />
      <BottomNavigationAction
        label="メッセージ"
        icon={<Badge color="error" max={99}>
          <MailIcon />
        </Badge>}
        component={Link}
        href="/message"
      />
    </BottomNavigation>
  )
}
