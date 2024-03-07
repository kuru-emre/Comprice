'use client';

import React from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import Image from 'next/image';

export const HeroParallax = ({ products }: { products: { title: string; link: string; thumbnail: string }[] }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const springConfig = { stiffness: 500, damping: 30, bounce: 300 };
  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-600, 100]), springConfig);

  return (
    <div
      ref={ref}
      className="relative flex h-[200vh] flex-col self-auto overflow-hidden pb-20 pt-24  antialiased [perspective:800px] [transform-style:preserve-3d] lg:pt-40"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity
        }}
        className="-z-10"
      >
        <motion.div className="mb-16 flex flex-row-reverse space-x-16 space-x-reverse">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="mb-16 flex flex-row space-x-16 ">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="relative left-0 top-0 mx-auto w-full max-w-7xl px-4 py-20 md:py-40">
      <h1 className="text-2xl font-bold  md:text-7xl">More than 70 sectors</h1>
      <p className="mt-4 max-w-2xl text-base dark:text-neutral-200 md:text-xl">
        Get Noticed by Potential Customers with Our HS Code Catalog System. Create Your Own Demand, Find Your New Business
        Partners
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate
      }}
      whileHover={{
        y: -20
      }}
      key={product.title}
      className="group/product relative h-24 w-[10rem] flex-shrink-0 shadow-2xl lg:h-96 lg:w-[30rem]"
    >
      <Image
        src={product.thumbnail}
        height="600"
        width="600"
        className="absolute inset-0 h-full w-full rounded-md object-cover object-left-top"
        alt={product.title}
      />
      <div className="pointer-events-none absolute inset-0 h-full w-full rounded-md bg-black opacity-20 group-hover/product:opacity-70"></div>
      <span className="absolute bottom-[50%] w-full text-center text-2xl text-white opacity-0 group-hover/product:opacity-100">
        {product.title}
      </span>
    </motion.div>
  );
};
