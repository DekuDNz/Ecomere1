import React from "react";
import { Box, Flex, Input, Text } from "@chakra-ui/react";
import { MdOutlineSportsHandball } from "react-icons/md";
import { SiNike } from "react-icons/si";
import { AiOutlineHeart, AiOutlineSearch } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
const Header = () => {
  return (
    <>
      {/* header  */}
      <Box>
        {/* header A  */}
        <Flex
          justifyContent={"space-between"}
          p={"10px 40px"}
          backgroundColor={"#F5F5F5"}
        >
          <MdOutlineSportsHandball fontSize={"30px"} />
          <Flex>
            <Text className="headerword headerItem">Find a Store</Text>

            <Text className="headerword headerItem">Help</Text>

            <Text className="headerword headerItem">Join Us</Text>

            <Text className="headerword">Sign In</Text>
          </Flex>
        </Flex>
        {/* header B  */}
        <Flex
          p={"10px 40px"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <SiNike fontSize={"70px"} />
          <Flex
            marginLeft={"10%"}
            gap={"20px"}
            fontWeight={"800"}
            fontSize={"20px"}
          >
            <Text>New & Featured</Text>
            <Text>Men</Text>
            <Text>Women</Text>
            <Text>Kids</Text>
            <Text>Sale</Text>
            <Text>Customise</Text>
          </Flex>
          <Flex alignItems={"center"} gap={"28px"}>
            <Box position={"relative"}>
              <Input
                borderRadius={"20px"}
                backgroundColor={"#F5F5F5"}
                w={"170px"}
              ></Input>
              <AiOutlineSearch
                style={{ position: "absolute", top: "10px", left: "10px" }}
                fontSize={"25px"}
              />
            </Box>

            <AiOutlineHeart fontSize={"25px"} />
            <BsBag fontSize={"20px"} />
          </Flex>
        </Flex>
        {/* header C  */}
        <Box
          lineHeight={"30px"}
          backgroundColor={"#F5F5F5"}
          textAlign={"center"}
          p={"15px 0"}
        >
          <Text>Move, Shop, Customise & Celebrate With Us.</Text>
          <Text>
            No matter what you feel like doing today, It’s better as a Member.
          </Text>
          <Text textDecoration={"underline"} fontWeight={"600"}>
            Join Us
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Header;
