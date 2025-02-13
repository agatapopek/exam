import { Button, TextField, Box, Typography } from "@mui/material";

export default function ContactPage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full viewport height
        paddingTop: "64px", // Adjust this if your navbar height differs
        backgroundColor: "#f269a0", // Light background color
      }}
    >
      <Box
        sx={{
          maxWidth: 600,
          width: "100%",
          padding: 3,
          backgroundColor: "#ffffff",
          borderRadius: 2,
          boxShadow: 3,
          textAlign: "center",
        }}
      >
        <Typography variant="h3" gutterBottom>
          CONTACT
        </Typography>
        <address style={{ fontStyle: "italic", marginBottom: "1rem" }}>
          456 Culinary Avenue Gourmet Town, 1010 Vienna, Austria
        </address>
        <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
          <a
            href="mailto:dishdelights@contact.com"
            style={{ color: "#f269a0", textDecoration: "none" }}
          >
            dishdelights@contact.com
          </a>
        </p>

        <Typography variant="h5" gutterBottom>
          You need help? Send us a message👇👇👇
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
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            required
            sx={{
              "& .MuiInputBase-root": {
                borderRadius: "5px",
              },
            }}
          />
          <TextField
            label="Your email"
            variant="outlined"
            fullWidth
            required
            type="email"
            sx={{
              "& .MuiInputBase-root": {
                borderRadius: "5px",
              },
            }}
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            required
            multiline
            rows={4}
            sx={{
              "& .MuiInputBase-root": {
                borderRadius: "5px",
              },
            }}
          />
          <Button
            variant="contained"
            sx={{
            backgroundColor: "#004d40",
              padding: "10px 20px",
              borderRadius: "30px",
              fontSize: "1rem",
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
