import { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

function RatingTask() {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ padding: 4 }}>
      <Rating
        value={value}
        precision={0.5}
        onChange={(e, newValue) => setValue(newValue)}
      />
      <Typography variant="body1" sx={{ mt: 1 }}>
        Selected Rating: {value}
      </Typography>
    </Box>
  );
}

export default RatingTask;
