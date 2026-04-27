import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";

const ChipTask = () => {
  const handleDelete = () => console.log("Chip deleted");
  const handleClick = () => console.log("Chip clicked");

  return (
    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
      <Chip label="Basic Chip" />
      <Chip
        label="Clickable Chip"
        onClick={handleClick}
        color="primary"
        clickable
      />
      <Chip label="Deletable Chip" onDelete={handleDelete} color="secondary" />
      <Chip
        label="Avatar Chip"
        avatar={<Avatar>A</Avatar>}
        variant="outlined"
      />
    </Box>
  );
};

export default ChipTask;
