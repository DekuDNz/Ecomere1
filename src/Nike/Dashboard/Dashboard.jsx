import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Grid,
  Heading,
  Image,
  Img,
  Stack,
  Text,
  list,
} from "@chakra-ui/react";
import { APIShoes } from "../API/Constant";
import Header from "./Header";
import "../Dashboard/Dashboard.css";

const Dashboard = () => {
  const [listProduct, setListProduct] = useState([]);

  const navigate = useNavigate();

  const handleRedirect = () => {
    const isLoginLocal = JSON.parse(localStorage.getItem("isLogin"));
    if (isLoginLocal) {
      navigate("/details");
    } else {
      navigate("/");
    }
  };

  const handleToDetails = (id) => {
    // console.log("id :", id);
    navigate(`/details/${id}`, { state: { listProduct } });
  };

  const handleCovertMoneyVND = (money) => {
    const result = money.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
    return result;
  };

  useEffect(() => {
    axios
      .get(APIShoes)
      .then((response) => {
        const listShoes = response.data;
        console.log("listShoes :", listShoes);
        setListProduct(listShoes);
      })
      .catch((error) => {
        console.log("error:  ", error);
      });
  }, []);
  return (
    <>
      {/* header  */}
      {/* dashboard  */}
      <Box p={"20px 40px"}>
        <Flex justifyContent={"space-between"}>
          <Text fontSize={"20px"}>Men</Text>
          <Flex mr={"40px"} fontSize={"20px"} gap={"40px"}>
            <Text>Shoes</Text>
            <Text>Clothing</Text>
            <Text>Gear</Text>
          </Flex>
          <Box></Box>
        </Flex>
        <Img
          p={"20px 0"}
          height={"600px"}
          w={"100%"}
          src="https://images4.alphacoders.com/632/632661.jpg"
        ></Img>
        <Box p={"20px 0"} textAlign={"center"} lineHeight={"50px"}>
          <Text fontSize={"25px"}>Feel the Unreal</Text>
          <Text fontSize={"60px"} fontWeight={"800"}>
            AIR MAX DN
          </Text>
          <Text fontSize={"15px"}>
            The next generation of Air technology is here
          </Text>
          <Button
            backgroundColor={"black"}
            color={"white"}
            borderRadius={"15px"}
            _hover={{
              backgroundColor: "white",
              color: "black",
              border: "1px solid black",
            }}
          >
            Shop Now
          </Button>
        </Box>
      </Box>
      {/* product  */}
      <Box p={"20px 40px"}>
        <Text fontSize={"25px"} fontWeight={"600"}>
          Men's Shoes ({listProduct.length})
        </Text>
        {/* card product  */}
        <Grid mt={"30px"} templateColumns="repeat(4, 1fr)" gap={"20px"}>
          {listProduct.map((itemShoes) => {
            return (
              <Card maxW="sm" key={itemShoes.id}>
                <CardBody>
                  <Image
                    src={itemShoes.image}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{itemShoes.name}</Heading>
                    <Text>{itemShoes.description}</Text>
                    <Text color="blue.600" fontSize="2xl">
                      {handleCovertMoneyVND(itemShoes.price * 25000)}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button
                      variant="solid"
                      colorScheme="blue"
                      onClick={() => handleToDetails(itemShoes.id)}
                    >
                      Buy now
                    </Button>
                    <Button variant="ghost" colorScheme="blue">
                      Add to cart
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
