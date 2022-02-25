import { Box } from "@mui/system";
const Faq = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="faq">FAQs</div>
      <div className="faq">Privacy</div>
      <div className="faq">Terms</div>
      <div className="faq">Contact</div>
    </Box>
  );
};

export default Faq;
