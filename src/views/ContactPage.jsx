import { Button, TextField, Box, Typography } from "@mui/material";

export default function ContactPage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // Adjusted for better mobile behavior
        padding: { xs: "20px", sm: "40px", md: "64px" }, // Adjust padding for different screens
        backgroundColor: "#f269a0",
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: "90%", sm: "80%", md: 600 }, // Responsive maxWidth
          width: "100%",
          padding: { xs: 2, sm: 3, md: 4 }, // Dynamic padding
          backgroundColor: "#ffffff",
          borderRadius: 2,
          boxShadow: 3,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" sx={{ fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" } }} gutterBottom>
          CONTACT
        </Typography>

        <address style={{ fontStyle: "italic", marginBottom: "1rem", fontSize: "1rem" }}>
          456 Culinary Avenue, Gourmet Town, 1010 Vienna, Austria
        </address>

        <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
          <a
            href="mailto:dishdelights@contact.com"
            style={{ color: "#f269a0", textDecoration: "none" }}
          >
            dishdelights@contact.com
          </a>
        </p>

        <Typography variant="h6" sx={{ fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" } }} gutterBottom>
          Need help? Send us a message👇👇👇
        </Typography>

        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            marginBottom: 3,
          }}
        >
          <TextField label="Title" variant="outlined" fullWidth required />
          <TextField label="Your email" variant="outlined" fullWidth required type="email" />
          <TextField label="Message" variant="outlined" fullWidth required multiline rows={4} />

          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#004d40",
              padding: { xs: "8px 16px", sm: "10px 20px" },
              borderRadius: "30px",
              fontSize: { xs: "0.9rem", sm: "1rem" },
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "rgb(255, 221, 0)",
              },
            }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
