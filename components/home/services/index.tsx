import { Box, Heading, Text, Flex, Center } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Products from "./products";
import { NavbarContext } from "layouts/context";

const Navbar = () => {
  const [active, setActive] = useState(0);
  const { activeNavItem } = useContext(NavbarContext);

  const mapNav = {
    "#product": 0,
    "#add-on": 1,
    "#template": 2,
    "#deposit": 3,
  };

  useEffect(() => {
    setActive(mapNav[activeNavItem] === undefined ? 0 : mapNav[activeNavItem]);
  }, [activeNavItem]);

  const menu = ["Products"];

  const disableList = (menu) => {
    return true;
  };
  return (
    <Box>
      <Center
        maxW={"full"}
        pt={"46px"}
        pb={"30px"}
        bg={"linear-gradient(180deg, #6B6FE1 0%, #5559D0 100%)"}
        id={"products"}
      >
        <Flex
          px={{ base: 5, md: 0 }}
          gap={{ base: "20px", md: "100px" }}
          overflowX={"auto"}
          whiteSpace={"nowrap"}
        >
          {menu.map((item, index) => (
            <Text
              id={item.toLowerCase()}
              p={"8px 16px"}
              rounded={"40px"}
              bg={active === index && "white"}
              key={item}
              onClick={() => disableList(item) && setActive(index)}
              color={active !== index && "white"}
              opacity={disableList(item) ? "1" : "0.5"}
              cursor={disableList(item) ? "pointer" : "not-allowed"}
              fontSize={"20px"}
              fontWeight={"bold"}
            >
              {item}
            </Text>
          ))}
        </Flex>
      </Center>
      <Center bg={"brand.100"}>
        <Products />
      </Center>
    </Box>
  );
};
export default function Services() {
  return (
    <Box>
      <Navbar />
    </Box>
  );
}
