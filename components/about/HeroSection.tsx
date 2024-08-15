"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import { TbArrowUpRight } from "react-icons/tb";
import { desVariants, tagVariants, titleVariants } from "@/util/animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="container py-12 xl:py-24 h-[auto] text-center lg:py-0 lg:text-left lg:flex lg:justify-between">
      <div className="lg:w-1/2 xl:py-0 lg-py-8">
        <motion.p
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className="tracking-widest uppercase"
        >
          Mamamoon Skincare
        </motion.p>
        <motion.h1
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          className="h1"
        >
          Temukan Kecantikan Alami <br /> Dari Produk Kami
        </motion.h1>
        <motion.p
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
          className="pb-6 text-muted-foreground xl:pb-10"
        >
          Innovation is at the heart of Mamamoon, combining traditional wisdom
          with modern science to create effective skincare solutions. We are
          committed to continuous improvement, listening to customer feedback to
          enhance our products and services. By choosing Mamamoon, you are
          investing in your skin&apos;s health and supporting a brand that
          values integrity, sustainability, and innovation.
        </motion.p>
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
        ></motion.div>
        <Link href={"/"}>
          <Button className="inline-flex items-center px-8 py-3 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
            Beli Produk
            <TbArrowUpRight className="w-5 h-5 ml-2" />
          </Button>
        </Link>
      </div>
      <div className="w-1/2">
        <video
          className="absolute right-10 xl:h-[448px] xl:w-[700px] lg:h-[344px] lg:w-[500px] hidden lg:block"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/background-video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
