'use client';

import React from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import Image from 'next/image';
import classes from "./HeroParallax.module.css"

const Text = () => {
  return (
    <div className={classes.textContainer}>
      <h1 className="text-2xl font-bold md:text-7xl">More than 70 sectors</h1>
      <p className="mt-4 max-w-2xl md:text-xl">
        Get Noticed by Potential Customers with Our HS Code Catalog System. Create Your Own Demand, Find Your New Business
        Partners
      </p>
    </div>
  );
};

const ProductCard = ({
  product,
  translate
}: {
  product: {
    title: string;
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
      className={classes.productMotion}
    >
      <Image
        src={product.thumbnail}
        height="600"
        width="600"
        className={classes.productImg}
        alt={product.title}
      />
      <div className={classes.productBox}></div>
      <span className={classes.productBoxInner}>
        {product.title}
      </span>
    </motion.div>
  );
};

export default function HeroParallax({ products }: { products: { title: string; thumbnail: string }[] }) {
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
      className={classes.parallax}
    >
      <Text />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
          zIndex: "-10"
        }}
      >
        <motion.div className={classes.parallaxLine}>
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className={classes.parallaxLineReverse}>
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
