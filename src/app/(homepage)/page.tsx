import { Container, Flex, Text, Box, Stack, Title, Paper, Input, Space } from '@mantine/core';
import { HeroParallax } from 'components';
import { ParallaxImg, LasticaFont } from 'libs';
import classes from './styles.module.css';

export default function Home() {
  return (
    <>
      {/* Start Main Hero */}
      <Flex className={classes.hero} id="hero">
        <Stack className={classes.heroStack}>
          <h1 className={`m-1 text-4xl font-light tracking-widest lg:text-6xl ${LasticaFont.className}`}>Comprice</h1>
          <h2 className={`m-3 text-xl font-light tracking-widest lg:text-2xl ${LasticaFont.className}`}>Worldwide Trade</h2>
        </Stack>
        <Box className={classes.heroVideo} component="video" src="/videos/hero.mp4" autoPlay muted loop />
        <Container className={classes.heroCard} w="40%">
          <Paper shadow="xs" withBorder p="xl">
            <Title order={2}>Let&apos;s get started quickly</Title>
            <Text size="sm">Search your desired item or categories</Text>
            <Space h="md" />
            <Input placeholder="Input component" />
          </Paper>
        </Container>
      </Flex>
      {/* End Main Hero */}

      <section className="bg-grid-black/[0.2] dark:bg-grid-white/[0.2] relative flex w-full flex-col">
        {/* Start Hero Parallax */}
        <section className="w-full">
          <HeroParallax products={ParallaxImg} />
        </section>
        <section className="h-[500px] w-full">
          <h2 className="text-2xl font-bold md:text-7xl ">
            Comprices <br /> more than 70 sectors
          </h2>
          <p className="mt-8 max-w-2xl md:text-xl ">
            We build beautiful products with the latest technologies and frameworks. We are a team of passionate developers and
            designers that love to build amazing products.
          </p>
        </section>
        {/* End Hero Parallax */}

        {/* Start Info */}
        <section className="w-full p-4">
          <div className="flex w-full gap-4">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </section>
      </section>
    </>
  );
}
