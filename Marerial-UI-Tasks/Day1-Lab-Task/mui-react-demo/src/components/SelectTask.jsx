import { useState } from "react";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";

function SelectTask() {
  const [value, setValue] = useState("");

  return (
    <Box sx={{ padding: 4 }}>
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Framework</InputLabel>
        <Select
          value={value}
          label="Framework"
          onChange={(e) => setValue(e.target.value)}
        >
          <MenuItem value="React">React</MenuItem>
          <MenuItem value="Angular">Angular</MenuItem>
          <MenuItem value="Vue">Vue</MenuItem>
        </Select>
      </FormControl>
      {value && (
        <Typography variant="body1" sx={{ mt: 2 }}>
          Selected: {value}
        </Typography>
      )}
    </Box>
  );
}

export default SelectTask;
