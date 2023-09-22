import { Grid, Box, Text, Flex, Center } from "@chakra-ui/react";

import { useCallback, useState } from "react";
import AddOnCard from "./add-on-card";

const _data = {
  corrugated_box: [
    {
      category: "Corrugated Box",
      name: "Box Kardus Dengan Lubang Pegangan",
      image: "/assets/products/1.png",
      description:
        "Kardus yang dibuat dengan teknik die cutting, box ini adalah varian dari box kardus die cut yang dilengkapi dengan handle atau pegangan sehingga mudah untuk dibawa.",
    },
    {
      category: "Corrugated Box",
      name: "Box Kardus Untuk Botol",
      image: "/assets/products/2.png",
      description:
        "Box yang digunakan untuk membungkus botol dengan bentuk yang sesuai dengan bentuk botol. Box ini terbuat dari bahan corrugated yang kuat dan tahan lama.",
    },
    {
      category: "Corrugated Box",
      name: "Master Box Kardus Corrugated",
      image: "/assets/products/3.png",
      description:
        "Corrugated berarti bahwa kardus tersebut terbuat dari lapisan-lapisan kertas yang digabungkan, yang membuatnya kuat dan tahan lama.",
    },
  ],
  flexible_packaging: [
    {
      category: "Flexible Packaging",
      name: "Standing Pouch",
      image: "/assets/products/4.png",
      description:
        "Ukuran dan desain bisa di custom, sesuai kebutuhan. Terbuat dari kertas atau plastik. Standing pouch menjadi populer karena terlihat elegan.",
    },
  ],
  paper_bowl: [
    {
      category: "Paper Bowl",
      name: "Paper Bowl",
      image: "/assets/products/5.png",
      description:
        "Terbuat dari bahan paper food grade dengan berlaminasi PE yang aman untuk bersentuhan langsung dengan makanan.",
    },
  ],
  paper_cup: [
    {
      category: "Paper Cup",
      name: "Paper Cup Cold",
      image: "/assets/products/6.png",
      description:
        "Terbuat dari bahan paper food grade dengan berlaminasi PE yang aman untuk bersentuhan langsung dengan makanan.",
    },
    {
      category: "Paper Cup",
      name: "Paper Cup Hot",
      image: "/assets/products/7.png",
      description:
        "Terbuat dari bahan paper food grade dengan berlaminasi PE yang aman untuk bersentuhan langsung dengan makanan.",
    },
  ],
  special_paper: [
    {
      category: "Special Paper",
      name: "Alquran Paper",
      image: "/assets/products/8.png",
      description:
        "Halal bahan baku yang dipakai, halal proses pembuatan dan peralatan yang digunakan serta halal pula proses penyimpanannya. Dan Merupakan kertas berwarna dengan tekstur halus berikut daya serap tinta yang baik serta tingkat pencerahan warna yang maksimal",
    },
  ],
};

const RenderProduct = ({ type }) => {
  const menuType = type?.toLowerCase().split(" ").join("_");
  return (
    <Center>
      <Box maxW={"1440px"}>
        <Grid
          mb={"127px"}
          templateColumns={{
            base: "1fr",
            xl: "repeat(3, 1fr)",
            "2xl": "repeat(4, 1fr)",
          }}
          gap={{ base: "16px", md: "31px" }}
          p={4}
        >
          {_data[menuType]?.map((item, index) => (
            <AddOnCard data={item} key={index} />
          ))}
        </Grid>
      </Box>
    </Center>
  );
};

const Product = () => {
  const [active, setActive] = useState(0);
  const [selectedMenu, setSelectedMenu] = useState("Corrugated Box");
  const menu = [
    "Corrugated Box",
    "Flexible Packaging",
    "Paper Bowl",
    "Paper Cup",
    "Special Paper",
  ];

  const enableList = (menu) => {
    return true;
  };

  const handleClick = useCallback((menu, index) => {
    setSelectedMenu(menu);
    enableList(menu) && setActive(index);
  }, []);

  return (
    <Box>
      <Center w={"100vw"} pt={"46px"} pb={"30px"}>
        <Flex gap={"69px"} overflowX={"auto"} whiteSpace={"nowrap"}>
          {menu.map((item, index) => (
            <Text
              p={"8px 16px"}
              rounded={"40px"}
              fontWeight={active === index && "bold"}
              key={item}
              opacity={enableList(item) ? "1" : "0.5"}
              cursor={!enableList(item) ? "not-allowed" : "pointer"}
              onClick={() => handleClick(item, index)}
            >
              {item}
            </Text>
          ))}
        </Flex>
      </Center>
      <RenderProduct type={selectedMenu} />
    </Box>
  );
};

export default Product;
