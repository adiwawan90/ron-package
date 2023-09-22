import {
  Box,
  Heading,
  Text,
  Center,
  Container,
  Divider,
  Flex,
  Spacer,
} from "@chakra-ui/react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const data = [
  {
    ask: "Apa itu Ron's Print n' Package?",
    answer:
      "Kami adalah salah satu percetakan dan pembuatan packaging di wilayah Bekasi. Melayani pembuatan berbagai jenis produk percetakan dan produk kemasan",
  },
  {
    ask: "Bagaimana cara custom dan apakah ada biaya tambahan?",
    answer:
      "Konsultasikan kepada kami design seperti apa yang anda inginkan melalui Whatsapp Admin kami. Biaya menyesuaikan tingkat customisasi",
  },
  {
    ask: "Apakah bisa pesan walaupun beda kota, dan berapa lama estimasi nya?",
    answer:
      "Sangat bisa, untuk estimasi waktu kurang lebih 2-5 hari. *(sesuai kurir)",
  },
  {
    ask: "Apakah Ron's Print n' Package hanya melayani produk kemasan?",
    answer:
      "Selain produk kemasan, kami juga melayani jasa percetakan. Seperti, kalender, undangan, majalah, brosur, buku yasin, sablon dll",
  },
];
export default function FAQ() {
  return (
    <Box pb={"60px"} id={"faq"}>
      <Center flexDirection={"column"} pt={"136px"}>
        <Heading
          fontSize={{ base: "25px", md: "28px" }}
          mb={"31px"}
          textAlign={"center"}
          as={"h2"}
          maxW={700}
        >
          Pertanyaan yang Sering Diajukan
        </Heading>
      </Center>
      <Container pb={"60px"} maxW="1150px" position={"relative"}>
        <Accordion allowMultiple>
          {data.map((item) => (
            <AccordionItem
              p={"10px"}
              mb={"16px"}
              bg={"brand.100"}
              rounded={"md"}
              key={item.ask}
            >
              <h2>
                <AccordionButton>
                  <Flex w={"full"} align={"center"}>
                    <Text as={"div"} textAlign="left" fontWeight={700}>
                      {item.ask}
                    </Text>
                    <Spacer />
                    <AccordionIcon fontSize={"30"} color={"brand.500"} />
                  </Flex>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Divider my={2} />
                <Text as={"div"}>{item.answer}</Text>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Box>
  );
}
