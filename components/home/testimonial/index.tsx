import { Box, Heading, Text, Center, Container } from "@chakra-ui/react";
import TestimonialCard from "./card";
import Slider from "../slider";

const data = [
  {
    text: "",
    image: "/assets/lp/testimonial/tes-1.png",
    name: "",
    bg: "linear-gradient(180deg, #989BF1 0%, #6667AA 100%)",
  },
  {
    text: "",
    image: "/assets/lp/testimonial/tes-2.png",
    name: "",
    bg: "linear-gradient(180deg, #5DABE8 0%, #2675B3 100%)",
  },
  {
    text: "",
    image: "/assets/lp/testimonial/tes-3.png",
    name: "",
    bg: "linear-gradient(180deg, #02A59C 0%, #06837B 100%)",
  },
  {
    text: "",
    image: "/assets/lp/testimonial/tes-4.png",
    name: "",
    bg: "linear-gradient(180deg, #626262 0%, #454646 100%)",
  },
  {
    text: "",
    image: "/assets/lp/testimonial/tes-5.png",
    name: "",
    bg: "linear-gradient(180deg, #F85555 0%, #AF1423 100%)",
  },
  {
    text: "",
    image: "/assets/lp/testimonial/tes-6.png",
    name: "",
    bg: "linear-gradient(180deg, #D6A440 0%, #8F650E 100%)",
  },
  {
    text: "",
    image: "/assets/lp/testimonial/tes-7.png",
    name: "",
    bg: "linear-gradient(180deg, #606CDE 0%, #313C9E 100%)",
  },
  {
    text: "",
    image: "/assets/lp/testimonial/tes-8.png",
    name: "",
    bg: "linear-gradient(180deg, #51AE67 0%, #228839 100%)",
  },
  {
    text: "",
    image: "/assets/lp/testimonial/tes-9.png",
    name: "",
    bg: "linear-gradient(180deg, #DE3ED8 0%, #96028F 100%)",
  },
];

export default function Testimonial() {
  return (
    <Box pb={"60px"} id={"testimonial"}>
      <Center flexDirection={"column"} pt={"136px"}>
        <Heading
          fontSize={{ base: "25px", md: "28px" }}
          mb={{ base: "20px", md: "31px" }}
          textAlign={"center"}
          as={"h2"}
          maxW={700}
        >
          Apa Kata Mereka Tentang Rons Packaging?
        </Heading>
        <Text
          maxW={"753px"}
          textAlign={"center"}
          fontSize={"20px"}
          p={"16px"}
          mb={{ base: "40px", md: "90px" }}
        >
          Berbekal pengalaman selama lebih dari 5 tahun dalam melayani ratusan
          pelanggan mulai dari perorangan hingga corporasi, sehingga kepuasan
          pelanggan adalah prioritas utama kami.
        </Text>
      </Center>
      <Container maxW={"1709px"}>
        <Slider slide={3}>
          {data.map((item, index) => (
            <TestimonialCard key={index} data={item} />
          ))}
        </Slider>
      </Container>
    </Box>
  );
}
