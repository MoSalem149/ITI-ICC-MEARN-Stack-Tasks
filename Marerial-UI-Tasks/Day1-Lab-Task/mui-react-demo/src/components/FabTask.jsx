import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

function FabTask() {
  return (
    <Box sx={{ padding: 4, position: "relative", minHeight: 100 }}>
      <Fab
        color="primary"
        aria-label="add"
        sx={{
          position: "fixed",
          bottom: 32,
          right: 32,
          "&:hover": { bgcolor: "secondary.main" },
        }}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
}

export default FabTask;
