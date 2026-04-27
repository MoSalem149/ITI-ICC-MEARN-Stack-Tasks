import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const TypographyTask = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h1" gutterBottom>
        Material UI Lab Assignments
      </Typography>
      <Typography variant="h4" gutterBottom>
        Day 1: Data Display and Inputs
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        subtitle1
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1
      </Typography>
      <Typography variant="body2" color="text.secondary">
        body2
      </Typography>
    </Box>
  );
};

export default TypographyTask;
