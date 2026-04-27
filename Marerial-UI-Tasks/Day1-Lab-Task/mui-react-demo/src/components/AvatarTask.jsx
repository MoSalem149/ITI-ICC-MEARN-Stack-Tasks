import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

const AvatarTask = () => {
  return (
    <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
      <Avatar
        src="https://i.pravatar.cc/150?img=3"
        alt="User"
        variant="circular"
        sx={{ width: 56, height: 56 }}
      />
      <Avatar
        variant="rounded"
        sx={{ bgcolor: "primary.main", width: 56, height: 56 }}
      >
        JS
      </Avatar>
      <Avatar
        variant="square"
        sx={{ bgcolor: "secondary.main", width: 56, height: 56 }}
      >
        AB
      </Avatar>
    </Box>
  );
};

export default AvatarTask;
