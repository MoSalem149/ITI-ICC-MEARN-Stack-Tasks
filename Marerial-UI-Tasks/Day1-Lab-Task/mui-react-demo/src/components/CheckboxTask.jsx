import { useState } from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const CheckboxTask = () => {
  const [checked, setChecked] = useState(false);
  const [indeterminate] = useState(true);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    console.log("Checked:", e.target.checked);
  };

  const children = (
    <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
      <FormControlLabel
        label="Child 1"
        control={<Checkbox checked={checked[0]} onChange={handleChange} />}
      />
      <FormControlLabel
        label="Child 2"
        control={<Checkbox checked={checked[1]} onChange={handleChange} />}
      />
    </Box>
  );

  return (
    <Box sx={{ padding: 4 }}>
      <FormControlLabel
        control={<Checkbox checked={checked} onChange={handleChange} />}
        label="Accept Terms and Conditions"
      />
      <FormControlLabel
        control={<Checkbox indeterminate={indeterminate} />}
        label="Indeterminate Checkbox"
      />
      {children}
    </Box>
  );
};
export default CheckboxTask;
