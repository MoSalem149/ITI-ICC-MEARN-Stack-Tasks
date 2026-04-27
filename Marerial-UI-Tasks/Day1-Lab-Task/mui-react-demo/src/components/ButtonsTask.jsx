import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const ButtonsTask = () => {
  const handleClick = () => alert("clicked");

  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Button variant="contained" onClick={handleClick}>
        Click Me
      </Button>
      <Button variant="outlined" onClick={handleClick}>
        Outlined Button
      </Button>
      <Button variant="text" onClick={handleClick}>
        Text Button
      </Button>
    </Box>
  );
};

export default ButtonsTask;
