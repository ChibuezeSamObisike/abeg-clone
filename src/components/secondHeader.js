import { Container } from "@mui/material";
import React from "react";
import WebCards from "./WebCards";
import animationDataSend from "../84225-fly-send-icon-animation.json";
import animationDataSecure from "../47337-online-shopping-pay-online-secure-payment.json";
import animationDataWishList from "../52009-wishlist.json";
const SecondHeader = () => {
  const webData = [
    {
      text: "Send Money",
      animationData: animationDataSend,
      color: "rgba(63, 102, 246, .2)",
      textContent:
        "Transfer money easily just enter an abegtag or a phone number.",
    },
    {
      text: "Pay Securely",
      animationData: animationDataSecure,
      color: "rgba(225, 173, 13, .2)",
      textContent:
        "Protect your money with escrow and make sure you get what you paid for",
    },
    {
      text: "Wishlist",
      animationData: animationDataWishList,
      color: "rgba(63,102,246,.2)",
      textContent:
        "Show your friends what you want  so they can help you get it in a click",
    },
  ];
  return (
    <Container sx={{ marginTop: "50px" }}>
      <div className="wrapIt">
        {webData.map((data, i) => (
          <WebCards key={i} {...data} />
        ))}
      </div>
    </Container>
  );
};

export default SecondHeader;
