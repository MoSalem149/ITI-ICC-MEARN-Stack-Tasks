import { useState } from "react";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Typography from "@mui/material/Typography";

function RadioGroupTask() {
  const [value, setValue] = useState("");

  return (
    <Box sx={{ padding: 4 }}>
      <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup value={value} onChange={(e) => setValue(e.target.value)}>
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
        </RadioGroup>
      </FormControl>
      {value && (
        <Typography variant="h6" sx={{ mt: 2 }}>
          Selected: {value}
        </Typography>
      )}
    </Box>
  );
}

export default RadioGroupTask;
