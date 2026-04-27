import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

function TextFieldTask() {
  const [name, setName] = useState("");

  return (
    <Box sx={{ padding: 4 }}>
      <TextField
        label="Enter your name"
        variant="outlined"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {name && (
        <Typography variant="h6" sx={{ mt: 2 }}>
          Hello, {name}!
        </Typography>
      )}
    </Box>
  );
}

export default TextFieldTask;
