import {
  Box,
  Heading,
  Text,
  Center,
  Button,
  Container,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <Box
      id={"cta"}
      color={"white"}
      bg={"linear-gradient(180deg, #6368E0 0%, #494DC9 100%)"}
    >
      <Container pb={"60px"} maxW="1150px" position={"relative"}>
        <Box
          display={{ base: "block", md: "block" }}
          position={{ base: "relative", md: "absolute" }}
          bottom={0}
          left={{ md: -100 }}
        >
          <Image
            src={"/assets/parcel.png"}
            width={600}
            height={517}
            alt={"cta"}
          />
        </Box>
        <Center
          flexDirection={"column"}
          pt={{ md: "136px" }}
          mr={{ base: 0, md: -600 }}
        >
          <Heading
            fontSize={"28px"}
            mb={"26px"}
            fontWeight={"bold"}
            textAlign={"center"}
            as={"h2"}
            maxW={700}
          >
            Percayakan desain kemasan anda <br />
            kepada
          </Heading>
          <Text
            as={"h2"}
            maxW={"753px"}
            fontSize={"40px"}
            textAlign={"center"}
            mb={"31px"}
            fontWeight={900}
          >
            Ron's Print n' Package
          </Text>
          <Text
            maxW={"753px"}
            fontSize={"36px"}
            fontWeight={900}
            textAlign={"center"}
            mb={"40px"}
          >
            Segera hubungi kami dan dapatkan penawaran dengan harga menarik!
          </Text>
          {/* <Text fontSize={"50px"} fontWeight={900} lineHeight={"100%"}>
            Rp. 49.000
          </Text>
          <Text w={"279px"} mb={"30px"} textAlign={"right"} fontSize={"28px"}>
            /bulan
          </Text> */}
          <Link href={"/register"}>
            <Button
              _hover={{ backgroundColor: "gray.100" }}
              rounded={"full"}
              bg={"white"}
              color={"brand.500"}
            >
              {" "}
              Pesan Sekarang!
            </Button>
          </Link>
        </Center>
      </Container>
    </Box>
  );
}
