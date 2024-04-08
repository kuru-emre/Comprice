import { Sidebar, Companies } from 'components';
import { LasticaFont } from 'libs';
import {Box, Container, Flex} from "@mantine/core"
import classes from "./styles.module.css"

export default function Marketplace() {
  return (
    <Box>
      <Container fluid className={classes.header}>
        <h1 className={`text-center text-3xl tracking-widest text-white lg:text-4xl ${LasticaFont.className}`}>Marketplace</h1>
      </Container>
      <Flex >
        <Sidebar />
        <Companies />
      </Flex>
    </Box>
  );
}
