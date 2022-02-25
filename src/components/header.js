import { Box, Typography } from "@mui/material";
import { headerStyle, inputStyleDiv } from "../style";
import ImageHeader from "../assets/product-screen.png";

import x from "../assets/abegLogo";

const Header = () => {
  return (
    <Box sx={headerStyle}>
      <div>
        {x}
        <Typography
          component="h1"
          variant="h1"
          sx={{ color: "white", fontWeight: "bold", fontSize: "3.25em" }}
        >
          The simplest &#38;
          <br /> coolest way to <br />
          pay for anything.
        </Typography>
        <Typography sx={inputStyleDiv}>
          Pay for anything and get paid with ease; no delays, no downtime,
          highly secure. Just enter an abeg tag or phone number
        </Typography>
      </div>

      <div>
        <img src={ImageHeader} alt="" className="imgClass" />
      </div>
    </Box>
  );
};

export default Header;
