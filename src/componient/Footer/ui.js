import { Grid, styled } from "@mui/material";

export const StyledGrid = styled(Grid)({
  display: "flex",
  "& p": {
    textAlign: { xs: "center", md: "left", sm: "center" },
    alignItem: { xs: "center", md: "left", sm: "center" },
  },
  "& h2": {
    textAlign: { xs: "center", md: "left", sm: "center" },
    alignItem: { xs: "center", md: "left", sm: "center" },
  },
});

export const StyledText = styled("p")({
  fontSize: "15px",
  fontWeight: 'bold',
});
