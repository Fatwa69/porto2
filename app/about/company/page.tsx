"use client";

import React from "react";
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/util/animation";
import Image from "next/image";
const page = () => {
  return (
    <div className="mb-20">
      <div className="bg-[url('/about1.jpg')] bg-center bg-hover">
        <h1 className="container py-32 text-5xl font-semibold text-black tracking-widest text-center">
          About Mamamoon Skincare
        </h1>
      </div>

      <div className="container">
        <div className="pt-4">
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="text-3xl font-semibold text-center lg:p-10 lg:text-5xl"
          >
            Based in Makassar, aimed to be best skincare over Indonesia
          </motion.h2>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="text-2xl text-center font-medium pb-10 mt-5"
          >
            At Mamamoon, we believe in holistic wellness and natural beauty. Our
            skincare products are crafted with high-quality, natural ingredients
            that are gentle on the skin and environmentally friendly. We
            prioritize sustainability, using eco-friendly packaging and
            ethically sourced ingredients.
          </motion.p>
        </div>
        <div className="items-center lg:flex gap-x-8">
          <div className="mb-5">
            <Image src="/company.jpg" width={800} height={800} alt="about" />
          </div>
          <div>
            <motion.p
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants}
            >
              Innovation is at the heart of Mamamoon, combining traditional
              wisdom with modern science to create effective skincare solutions.
              We are committed to continuous improvement, listening to customer
              feedback to enhance our products and services. By choosing
              Mamamoon, you are investing in your skin&apos;s health and supporting a
              brand that values integrity, sustainability, and innovation.
              <br /> <br />
            </motion.p>
            <motion.p
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVariants}
            >
              Innovation is at the heart of Mamamoon, combining traditional
              wisdom with modern science to create effective skincare solutions.
              We are committed to continuous improvement, listening to customer
              feedback to enhance our products and services. By choosing
              Mamamoon, you are investing in your skin&apos;s health and supporting a
              brand that values integrity, sustainability, and innovation.{" "}
              <br /> <br />{" "}
              <span className="text-xl font-extrabold tracking-tight">
                Trust Your Inner Beauty
              </span>
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
