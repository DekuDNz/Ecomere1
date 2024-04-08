import { Box, Flex, Grid } from "@chakra-ui/react";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <Box
        backgroundColor={"black"}
        color={"white"}
        style={{ listStyleType: "none" }}
        padding={"50px"}
      >
        <Flex justifyContent={"space-around"} lineHeight={"30px"}>
          <ul>
            <li style={{ fontWeight: "800" }}>Find A Store</li>
            <li>Become A Member</li>
            <li>Send Us Feedback</li>
            <li>Find A Store</li>
            <li>Become A Member</li>
            <li>Send Us Feedback</li>
          </ul>
          <ul>
            <li style={{ fontWeight: "800" }}>Help</li>
            <li>Get Help</li>
            <li>Order Status</li>
            <li>Delivery</li>
            <li>Returns</li>
            <li>Payment Options</li>
            <li>Contact us</li>
          </ul>
          <ul>
            <li style={{ fontWeight: "800" }}>About Nike</li>
            <li>News</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Sustainability</li>
          </ul>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
