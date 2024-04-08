import { Box, Button, Flex, Grid, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";

const Details = () => {
  // const {
  //   state: { listProduct },
  // } = useLocation();
  const { id } = useParams();
  const location = useLocation();
  const listProduct = location.state.listProduct;
  console.log("check list product", listProduct); // mảng danh sách giày
  const [selectedProduct, setSelectedProduct] = useState(null);

  const indexItem = listProduct.findIndex(
    (itemProduct) => itemProduct.id === id
  );
  console.log("check indexItem", indexItem); // indexItem vị trí

  const shoesItem = selectedProduct || listProduct[indexItem]; // toàn bộ thông tin của sản phẩm 1

  console.log("check shoes Item", shoesItem);

  const similarArray = shoesItem.similarProducts; // similar array liên quan

  const converArraytoString = similarArray.map((item) => item.toString());

  console.log("check array similar", similarArray);

  const newListSimilar = listProduct.filter((oldItem) =>
    converArraytoString.includes(oldItem.id)
  );

  console.log("new similar ", newListSimilar);
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <>

      <Box w={"80%"} margin={"0 auto"} p={"30px 0"}>
        <Text fontSize={"25px"} fontWeight={"800"}>
          Product detail
        </Text>
        <Flex padding={"20px 0"}>
          <Image width={"40%"} height={"500px"} src={shoesItem.image}></Image>
          <Box lineHeight={"40px"} pl={"50px"} w={"60%"}>
            <Text color={"#ff5000"} fontSize={"30px"} fontWeight={"800"}>
              {shoesItem.category}
            </Text>
            <Text fontSize={"25px"}> {shoesItem.name}</Text>
            <Text fontSize={"25px"}>{shoesItem.price}</Text>
            <Text fontWeight={"800"}>Select size</Text>
            <Grid gap={"10px"} w={"30%"} templateColumns="repeat(4, 1fr)">
              {shoesItem.sizes.map((size) => {
                return (
                  <Text
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      textAlign: "center",
                      padding: "5px",
                      borderRadius: "10px",
                      display: "block",
                    }}
                  >
                    {size}
                  </Text>
                );
              })}
            </Grid>
            <Button
              borderRadius={"20px"}
              w={"100%"}
              height={"80px"}
              mt={"20px"}
              backgroundColor={"black"}
              color={"white"}
              _hover={{
                backgroundColor: "white",
                color: "black",
                border: "1px solid black",
              }}
            >
              Add into cart
            </Button>
            <br></br>
            <Button
              borderRadius={"20px"}
              w={"100%"}
              height={"80px"}
              m={"20px 0"}
              backgroundColor={"white"}
              color={"black"}
              border={"1px solid black"}
            >
              Favourite
            </Button>
            <Text textAlign={"center"} lineHeight={"none"}>
              Review other products
            </Text>
          </Box>
        </Flex>
        <Box pt={"30px"}>
          <Text fontWeight={"700"}>Related products</Text>
          <Grid templateColumns="repeat(6, 1fr)" gap={"20px"} mt={"20px"}>
            {newListSimilar.map((relatedProduct) => {
              return (
                <Image
                  w={"100%"}
                  src={relatedProduct.image}
                  onClick={() => handleProductClick(relatedProduct)}
                ></Image>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Details;
