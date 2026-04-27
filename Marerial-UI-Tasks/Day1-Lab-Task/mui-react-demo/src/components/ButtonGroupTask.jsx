import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

const ButtonGroupTask = () => {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <ButtonGroup variant="contained" orientation="horizontal">
        <Button>Option 1</Button>
        <Button>Option 2</Button>
        <Button>Option 3</Button>
      </ButtonGroup>
    </Box>
  );
};
export default ButtonGroupTask;
