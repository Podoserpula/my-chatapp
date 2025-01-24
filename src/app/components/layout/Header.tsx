import { useAuth } from "@/app/contexts/AuthContext";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function Header() {
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
  };
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h4" component="h1" sx={{ flexGrow: 1 }}>
          Chat App
        </Typography>
        <Button onClick={handleLogout}>Logout</Button>
      </Toolbar>
    </AppBar>
  );
}
