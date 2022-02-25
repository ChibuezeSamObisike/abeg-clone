import { Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <div className="footerImg">
      <Typography
        component="h1"
        variant="h1"
        sx={{
          color: "white",
          fontWeight: "bold",
          fontSize: "3.25em",
          marginBottom: "10px",
        }}
      >
        Download the app Abeg
      </Typography>
      <Typography
        variant="p"
        component="p"
        sx={{
          opacity: "0.4",
          color: "white",
          fontSize: "1.5em",
          textAlign: "center",
        }}
      >
        Pay for anything and get paid with ease; no delays, no downtime,
        <br /> highly secure. Just enter an abeg tag or phone number
      </Typography>
      <Box sx={{ display: "flex" }}>
        <button>App Store</button>
        <button>Google Play Store</button>
      </Box>
    </div>
  );
};

export default Footer;
