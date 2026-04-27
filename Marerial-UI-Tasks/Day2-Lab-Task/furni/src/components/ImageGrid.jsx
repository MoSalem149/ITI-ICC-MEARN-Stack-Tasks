import { Box, Container, Typography, Button } from "@mui/material";
import img1 from "../assets/images/img-grid-1.jpg";
import img2 from "../assets/images/img-grid-2.jpg";
import img3 from "../assets/images/img-grid-3.jpg";
import dotsGreen from "../assets/icons/dots-green.svg";
import product1 from "../assets/images/product-1.png";
import product2 from "../assets/images/product-2.png";
import product3 from "../assets/images/product-3.png";

const features = [
  "Donec vitae odio quis nisl dapibus malesuada",
  "Donec vitae odio quis nisl dapibus malesuada",
  "Donec vitae odio quis nisl dapibus malesuada",
  "Donec vitae odio quis nisl dapibus malesuada",
];

const productItems = [
  {
    image: product1,
    title: "Nordic Chair",
    desc: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
  },
  {
    image: product2,
    title: "Kruzo Aero Chair",
    desc: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
  },
  {
    image: product3,
    title: "Ergonomic Chair",
    desc: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
  },
];

export default function ImageGrid() {
  return (
    <Box
      sx={{
        p: { xs: 7, md: 10 },
        backgroundColor: "#f3f4f1",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: { xs: 6, md: 0.5, lg: 1 },
          }}
        >
          {/* Left collage */}
          <Box
            sx={{
              width: { xs: "100%", md: "52%" },
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: 860,
                height: { xs: 430, sm: 520, md: 650, lg: 700 },
                minHeight: { xs: 430, sm: 520, md: 650 },
              }}
            >
              <Box
                component="img"
                src={dotsGreen}
                alt=""
                sx={{
                  position: "absolute",
                  top: { xs: -10, md: -26 },
                  left: { xs: -8, md: -92 },
                  width: { xs: 110, sm: 125, md: 220 },
                  opacity: 0.95,
                  zIndex: 0,
                }}
              />

              <Box
                component="img"
                src={img1}
                alt="Interior with sofa and plants"
                sx={{
                  position: "absolute",
                  top: 42,
                  left: 10,
                  width: { xs: "68%", sm: "64%", md: "62%" },
                  height: { xs: 300, sm: 390, md: 540 },
                  objectFit: "cover",
                  borderRadius: "24px",
                  zIndex: 1,
                  display: "block",
                }}
              />

              <Box
                component="img"
                src={img2}
                alt="Modern chair interior"
                sx={{
                  position: "absolute",
                  top: 42,
                  right: { xs: 0, md: 36 },
                  width: { xs: "31%", sm: "29%", md: "28%" },
                  height: { xs: 120, sm: 155, md: 205 },
                  objectFit: "cover",
                  borderRadius: "20px",
                  zIndex: 2,
                  display: "block",
                }}
              />

              <Box
                component="img"
                src={img3}
                alt="Minimal wooden stool"
                sx={{
                  position: "absolute",
                  top: { xs: 180, sm: 235, md: 235 },
                  left: { xs: "43%", sm: "42%", md: "41%" },
                  width: { xs: "44%", sm: "43%", md: "42%" },
                  height: { xs: 230, sm: 290, md: 430 },
                  objectFit: "cover",
                  borderRadius: "22px",
                  zIndex: 3,
                  display: "block",
                  boxShadow: "0 18px 35px rgba(0,0,0,0.08)",
                }}
              />
            </Box>
          </Box>

          {/* Right content */}
          <Box
            sx={{
              width: { xs: "100%", md: "42%" },
              maxWidth: { xs: "100%", md: 860 },
              pt: { xs: 0, md: 5 },
              ml: { md: -2 },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: { xs: "2.1rem", sm: "2.5rem", md: "3rem" },
                lineHeight: 1.12,
                letterSpacing: "-0.03em",
                color: "#2f2f2f",
                mb: 3,
                maxWidth: 480,
              }}
            >
              We Help You Make Modern Interior Design
            </Typography>

            <Typography
              sx={{
                fontFamily: "Inter, sans-serif",
                fontSize: { xs: "0.94rem", md: "0.9rem" },
                lineHeight: 2,
                color: "#6c757d",
                mb: 4,
                maxWidth: 470,
              }}
            >
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant morbi tristique senectus et netus et malesuada.
            </Typography>

            <Box
              component="ul"
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                columnGap: 4,
                rowGap: 2,
                pl: 0,
                mb: 5,
                listStyle: "none",
                maxWidth: 500,
              }}
            >
              {features.map((item, index) => (
                <Box
                  component="li"
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 1.4,
                    color: "#6c757d",
                    fontSize: { xs: "0.92rem", md: "0.88rem" },
                    lineHeight: 1.75,
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      width: 7,
                      height: 7,
                      border: "1.5px solid #5b7c69",
                      borderRadius: "50%",
                      mt: "8px",
                      flexShrink: 0,
                    }}
                  />
                  {item}
                </Box>
              ))}
            </Box>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#2f2f2f",
                color: "#fff",
                borderRadius: "999px",
                px: 3.5,
                py: 1.6,
                textTransform: "none",
                fontWeight: 700,
                fontSize: "0.95rem",
                fontFamily: "Inter",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#1f1f1f",
                  boxShadow: "none",
                },
              }}
            >
              Explore
            </Button>
          </Box>
        </Box>

        {/* Product list under section */}
        <Box
          sx={{
            mt: { xs: 8, md: 10 },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            columnGap: { xs: 3, md: 6 },
            rowGap: { xs: 4, md: 2 },
            alignItems: "start",
          }}
        >
          {productItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 2.5,
              }}
            >
              <Box
                sx={{
                  width: 115,
                  height: 115,
                  borderRadius: "20px",
                  backgroundColor: "#dce5e4",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: "88%",
                    height: "88%",
                    objectFit: "contain",
                  }}
                />
              </Box>

              <Box sx={{ pt: 0.5 }}>
                <Typography
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: { xs: "0.95rem", md: "0.98rem" },
                    color: "#2f2f2f",
                    mb: 0.8,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: { xs: "0.84rem", md: "0.86rem" },
                    lineHeight: 1.65,
                    color: "#6c757d",
                    mb: 0.8,
                    maxWidth: 220,
                  }}
                >
                  {item.desc}
                </Typography>

                <Typography
                  component="a"
                  href="#"
                  sx={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: { xs: "0.88rem", md: "0.9rem" },
                    color: "#2f2f2f",
                    textDecoration: "none",
                    fontWeight: 500,
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Read More
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
