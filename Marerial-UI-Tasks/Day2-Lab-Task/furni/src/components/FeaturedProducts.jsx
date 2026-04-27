import { Box, Container, Typography, Button, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import product1 from "../assets/images/product-1.png";
import product2 from "../assets/images/product-2.png";
import product3 from "../assets/images/product-3.png";

const products = [
  { id: 1, name: "Nordic Chair", price: "$50.00", image: product1 },
  { id: 2, name: "Kruzo Aero Chair", price: "$78.00", image: product2 },
  { id: 3, name: "Ergonomic Chair", price: "$43.00", image: product3 },
];

function ProductCard({ product }) {
  return (
    <Box
      sx={{
        textAlign: "center",
        position: "relative",
        cursor: "pointer",
        "&:hover .card-bg": { opacity: 1 },
        "&:hover .add-btn": { opacity: 1, transform: "translateY(0)" },
        "&:hover .product-img": { transform: "translateY(-12px)" },
      }}
    >
      {/* Card background */}
      <Box
        className="card-bg"
        sx={{
          position: "absolute",
          bottom: 60,
          left: 0,
          right: 0,
          height: "65%",
          backgroundColor: "#d8eae6",
          borderRadius: 3,
          opacity: 0,
          transition: "opacity 0.3s ease",
          zIndex: 0,
        }}
      />

      {/* Product Image */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          height: 280,
          mb: 0,
        }}
      >
        <Box
          component="img"
          src={product.image}
          alt={product.name}
          className="product-img"
          sx={{
            maxHeight: 260,
            width: "100%",
            objectFit: "contain",
            transition: "transform 0.3s ease",
            filter: "drop-shadow(0 8px 20px rgba(0,0,0,0.10))",
          }}
        />
      </Box>

      {/* Add to Cart button */}
      <Box
        className="add-btn"
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          mt: "-18px",
          mb: 1.5,
          opacity: 0,
          transform: "translateY(8px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
      >
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            backgroundColor: "#1a1a1a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            "&:hover": { backgroundColor: "#3b5d50" },
            transition: "background-color 0.2s ease",
            cursor: "pointer",
          }}
        >
          <AddIcon sx={{ fontSize: 20 }} />
        </Box>
      </Box>

      {/* Product Name */}
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: "0.95rem",
          fontFamily: "Inter",
          color: "#1a1a1a",
          mb: 0.5,
          position: "relative",
          zIndex: 1,
        }}
      >
        {product.name}
      </Typography>

      {/* Price */}
      <Typography
        sx={{
          fontWeight: 800,
          fontSize: "1.1rem",
          fontFamily: "Inter",
          color: "#1a1a1a",
          position: "relative",
          zIndex: 1,
        }}
      >
        {product.price}
      </Typography>
    </Box>
  );
}

export default function FeaturedProducts() {
  return (
    <Box sx={{ py: 10, backgroundColor: "#eff2f1" }}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          alignItems="center"
          wrap="nowrap"
          sx={{ flexWrap: { xs: "wrap", md: "nowrap" } }}
        >
          {/* Left Text */}
          <Grid
            item
            sx={{ minWidth: { md: 280 }, maxWidth: { md: 300 }, flexShrink: 0 }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "1.9rem",
                lineHeight: 1.25,
                mb: 2.5,
                fontFamily: "Inter",
                color: "#1a1a1a",
                letterSpacing: "-0.4px",
              }}
            >
              Crafted with
              <br />
              excellent material.
            </Typography>
            <Typography
              sx={{
                color: "#888",
                mb: 3.5,
                lineHeight: 1.75,
                fontFamily: "Inter",
                fontSize: "0.88rem",
              }}
            >
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </Typography>
            <Button
              disableElevation
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
                "&:hover": {
                  backgroundColor: "#1f1f1f",
                  boxShadow: "none",
                },
              }}
            >
              Explore
            </Button>
          </Grid>

          {/* Product Cards */}
          {products.map((product) => (
            <Grid item key={product.id} sx={{ flex: 1, minWidth: 0 }}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
