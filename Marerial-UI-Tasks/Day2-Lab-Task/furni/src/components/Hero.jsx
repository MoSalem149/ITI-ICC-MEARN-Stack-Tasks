import { Box, Container, Typography, Button } from "@mui/material";
import couchImg from "../assets/images/couch.png";
import dotsLight from "../assets/icons/dots-light.svg";

export default function Hero() {
  return (
    <Box
      sx={{
        backgroundColor: "#3b5d50",
        minHeight: { xs: "auto", md: "480px" },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
        py: { xs: 6, md: 0 },
      }}
    >
      {/* Dots decoration */}
      <Box
        component="img"
        src={dotsLight}
        alt=""
        sx={{
          position: "absolute",
          top: 44,
          right: 124,
          opacity: 0.6,
          width: 240,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          {/* Left Text */}
          <Box sx={{ flex: "0 0 auto", maxWidth: 520 }}>
            <Typography
              sx={{
                color: "#fff",
                fontWeight: 800,
                fontSize: { xs: "2rem", md: "3rem" },
                lineHeight: 1.15,
                mb: 2.5,
                fontFamily: "Inter",
                letterSpacing: "-0.5px",
              }}
            >
              Modern Interior
              <br />
              Design Studio
            </Typography>

            <Typography
              sx={{
                color: "rgba(255,255,255,0.65)",
                mb: 4,
                maxWidth: 460,
                lineHeight: 1.75,
                fontFamily: "Inter",
                fontSize: "0.9rem",
              }}
            >
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </Typography>

            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              {/* Shop Now */}
              <Button
                variant="contained"
                disableElevation
                sx={{
                  backgroundColor: "#F0A500",
                  color: "#1a1a1a",
                  fontWeight: 700,
                  borderRadius: "999px",
                  px: 3.5,
                  py: 1.2,
                  fontSize: "0.9rem",
                  textTransform: "none",
                  fontFamily: "Inter",
                  "&:hover": { backgroundColor: "#d4920a" },
                }}
              >
                Shop Now
              </Button>

              {/* Explore */}
              <Button
                variant="outlined"
                disableElevation
                sx={{
                  borderColor: "rgba(255,255,255,0.55)",
                  borderWidth: "1.5px",
                  color: "#fff",
                  fontWeight: 600,
                  borderRadius: "999px",
                  px: 3.5,
                  py: 1.15,
                  fontSize: "0.9rem",
                  textTransform: "none",
                  fontFamily: "Inter",
                  "&:hover": {
                    borderColor: "#fff",
                    borderWidth: "1.5px",
                    backgroundColor: "rgba(255,255,255,0.08)",
                  },
                }}
              >
                Explore
              </Button>
            </Box>
          </Box>

          {/* Right Image */}
          <Box
            sx={{
              flex: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              alignItems: "flex-end",
              alignSelf: "stretch",
              overflow: "hidden",
            }}
          >
            <Box
              component="img"
              src={couchImg}
              alt="Modern couch"
              sx={{
                width: "100%",
                maxWidth: 620,
                objectFit: "contain",
                objectPosition: "bottom right",
                filter: "drop-shadow(0 24px 32px rgba(0,0,0,0.25))",
                mb: "-4px",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
