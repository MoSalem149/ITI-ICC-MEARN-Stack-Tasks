import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SettingsIcon from "@mui/icons-material/Settings";

const IconsTask = () => {
  return (
    <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
      <HomeIcon fontSize="large" color="primary" />
      <FavoriteIcon color="error" />
      <SettingsIcon fontSize="small" />
    </Box>
  );
};

export default IconsTask;
