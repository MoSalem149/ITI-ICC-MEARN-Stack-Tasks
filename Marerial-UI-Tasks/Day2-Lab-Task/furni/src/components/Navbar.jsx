import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Container,
} from "@mui/material";
import cartIcon from "../assets/icons/cart.svg";
import userIcon from "../assets/icons/user.svg";

const navLinks = ["Home", "Shop", "About us", "Services", "Blog", "Contact us"];

export default function Navbar() {
  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: "#3b5d50" }}>
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{ justifyContent: "space-between", py: 0.5 }}
        >
          {/* Logo */}
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              color: "#ffffff",
              fontFamily: "Inter",
              letterSpacing: "-0.5px",
            }}
          >
            Furni<span style={{ color: "#F0A500" }}>.</span>
          </Typography>

          {/* Nav Links */}
          <Box sx={{ display: "flex", gap: 0.5 }}>
            {navLinks.map((link, i) => (
              <Button
                key={link}
                sx={{
                  color: i === 0 ? "#ffffff" : "rgba(255,255,255,0.65)",
                  fontWeight: i === 0 ? 700 : 500,
                  fontSize: "0.88rem",
                  fontFamily: "Inter",
                  textTransform: "none",
                  borderRadius: 0,
                  px: 1.5,
                  pb: "6px",
                  // active Home
                  borderBottom:
                    i === 0 ? "4px solid #F0A500" : "2px solid transparent",
                  "&:hover": {
                    color: "#ffffff",
                    background: "transparent",
                    borderBottom: "4px solid rgba(240,165,0,0.5)",
                  },
                }}
              >
                {link}
              </Button>
            ))}
          </Box>

          {/* Icons */}
          <Box sx={{ display: "flex", gap: 0.5 }}>
            <IconButton sx={{ color: "rgba(255,255,255,0.85)" }}>
              <Box
                component="img"
                src={userIcon}
                sx={{
                  width: 20,
                  height: 20,
                  filter: "brightness(0) invert(1)",
                }}
              />
            </IconButton>
            <IconButton sx={{ color: "rgba(255,255,255,0.85)" }}>
              <Box
                component="img"
                src={cartIcon}
                sx={{
                  width: 20,
                  height: 20,
                  filter: "brightness(0) invert(1)",
                }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
