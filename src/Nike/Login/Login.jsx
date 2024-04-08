import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import "../Login/Login.css";
import { SiNike } from "react-icons/si";
import { MdOutlineSportsHandball } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    if (data) {
      localStorage.setItem("isLogin", JSON.parse(true));
      navigate("/dashboard");
    }
  };
  return (
    <>
      <Box
        textAlign={"left"}
        width={"30%"}
        margin={"0 auto"}
        style={{ position: "relative" }}
      >
        <Flex
          alignContent={"flex-start"}
          fontSize={"40px"}
          className="icon-react-login"
          mt={"20px"}
        >
          <SiNike />
          <MdOutlineSportsHandball />
        </Flex>
        <Text m={"20px 0"} fontSize={"25px"}>
          Enter your username and password to join <br></br> us
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            backgroundColor={"#E8F0FE"}
            w={"90%"}
            placeholder="Please in put your username..."
            fontWeight={"600"}
            {...register("userName", { required: "Username must not empty" })}
          ></Input>
          <Text style={{ color: "red" }}>{errors.userName?.message}</Text>
          <br></br>
          <Input
            type="password"
            backgroundColor={"#E8F0FE"}
            mt={"10px"}
            w={"90%"}
            placeholder="Please input your password..."
            fontWeight={"600"}
            {...register("passWord", { required: "Password must not empty" })}
          ></Input>
          <Text style={{ color: "red" }}>{errors.passWord?.message}</Text>
          <br></br>
          <Text style={{ color: "rgb(117, 117, 117)", fontSize: "18px" }}>
            By continuing, I agree to Nike’s <a href="#">Privacy Policy</a> and
            <a href="#"> Terms of Use</a>
          </Text>
          <Button
            style={{
              width: "150px",
              position: "absolute",
              backgroundColor: "black",
              color: "white",
              borderRadius: "20px",
              marginTop: "50px",
              right: "50px",
            }}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Box>
    </>
  );
};

export default Login;
