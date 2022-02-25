import { Box, Typography } from "@mui/material";
import Lottie from "react-lottie";
const WebCards = ({ animationData, text, color, textContent }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Box
      sx={{
        backgroundColor: `${color}`,
        padding: "30px",
        borderRadius: "2.65em",
        cursor: "pointer",
        "&:hover": {
          transform: "scale(1.05)",
          transition: "transform ease-in 0.5s",
        },
      }}
    >
      <Lottie options={defaultOptions} height={250} width={250} />
      <Typography
        sx={{ fontSize: "2.25em", fontWeight: "bold", letterSpacing: "-1px" }}
      >
        {text}
      </Typography>
      <Typography sx={{ opacity: "0.4", fontWeight: "500" }}>
        {textContent}
      </Typography>
    </Box>
  );
};

export default WebCards;
