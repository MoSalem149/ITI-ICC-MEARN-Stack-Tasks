import { Box, Container, Typography } from "@mui/material";
import whyImg from "../assets/images/why-choose-us-img.jpg";
import dotsYellow from "../assets/icons/dots-yellow.svg";
import truckIcon from "../assets/icons/truck.svg";
import bagIcon from "../assets/icons/bag.svg";
import supportIcon from "../assets/icons/support.svg";
import returnIcon from "../assets/icons/return.svg";

const features = [
  {
    icon: truckIcon,
    title: "Fast & Free Shipping",
    desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
  },
  {
    icon: bagIcon,
    title: "Easy to Shop",
    desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
  },
  {
    icon: supportIcon,
    title: "24/7 Support",
    desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
  },
  {
    icon: returnIcon,
    title: "Hassle Free Returns",
    desc: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
  },
];

export default function WhyChooseUs() {
  return (
    <Box sx={{ py: 12, backgroundColor: "#f3f3f3" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: { xs: 6, md: 8 },
          }}
        >
          {/* LEFT SIDE */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              sx={{ fontWeight: 700, fontSize: "2.2rem", mb: 2, color: "#222" }}
            >
              Why Choose Us
            </Typography>

            <Typography
              sx={{
                color: "#777",
                mb: 5,
                lineHeight: 1.8,
                fontSize: "0.9rem",
                maxWidth: 420,
              }}
            >
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </Typography>

            {/* features grid */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "36px 32px",
              }}
            >
              {features.map((f) => (
                <Box key={f.title}>
                  {/* Icon */}
                  <Box
                    sx={{
                      position: "relative",
                      width: 52,
                      height: 52,
                      mb: 1.5,
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 4,
                        right: 4,
                        width: 34,
                        height: 34,
                        borderRadius: "50%",
                        backgroundColor: "#c0d0cb",
                        opacity: 0.7,
                      }}
                    />
                    <Box
                      component="img"
                      src={f.icon}
                      alt=""
                      sx={{
                        position: "relative",
                        zIndex: 1,
                        width: 36,
                        height: 36,
                      }}
                    />
                  </Box>

                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      color: "#222",
                      mb: 0.7,
                    }}
                  >
                    {f.title}
                  </Typography>

                  <Typography
                    sx={{ fontSize: "0.8rem", color: "#777", lineHeight: 1.7 }}
                  >
                    {f.desc}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* RIGHT SIDE */}
          <Box sx={{ flex: 1, minWidth: 0, position: "relative" }}>
            {/* Yellow dots decoration */}
            <Box
              component="img"
              src={dotsYellow}
              alt=""
              sx={{
                position: "absolute",
                top: -80,
                left: -80,
                width: { xs: 130, md: 200 },
                opacity: 0.9,
                zIndex: 0,
                pointerEvents: "none",
              }}
            />

            {/* Main photo */}
            <Box
              component="img"
              src={whyImg}
              alt="Why choose us"
              sx={{
                width: "100%",
                borderRadius: "22px",
                position: "relative",
                zIndex: 1,
                display: "block",
                boxShadow:
                  "0 28px 48px -16px rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.02)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 32px 56px -12px rgba(0,0,0,0.25)",
                },
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
