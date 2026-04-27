import { useState } from "react";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";

function ToggleButtonTask() {
  const [theme, setTheme] = useState("light");

  return (
    <Box
      sx={{
        padding: 4,
        bgcolor: theme === "dark" ? "#222" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
        transition: "background 0.3s",
        borderRadius: 2,
      }}
    >
      <ToggleButtonGroup
        value={theme}
        exclusive
        onChange={(e, val) => {
          if (val) setTheme(val);
        }}
      >
        <ToggleButton value="light">Light Mode</ToggleButton>
        <ToggleButton value="dark">Dark Mode</ToggleButton>
      </ToggleButtonGroup>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Current Theme: {theme}
      </Typography>
    </Box>
  );
}

export default ToggleButtonTask;
