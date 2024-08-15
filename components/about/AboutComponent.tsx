"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/util/animation";
const AboutComponent = () => {
  return (
    <div className="container py-12 xl:py-24 h-[auto]">
      <div className="grid lg:grid-cols-2 place-items-center">
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
        >
          <Image
            src="/aboutfront.jpg"
            width={900}
            height={500}
            alt="About"
            className="max-md:hidden"
          />
        </motion.div>
        <div className="items-center">
          <motion.h2
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="px-12 py-4 text-3xl font-extrabold leading-tight lg:text-5xl"
          >
            High Quality Brand, High Quality Ingredients.
          </motion.h2>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={desVariants}
            className="px-12 tracking-wider uppercase text-gray-400 mt-3"
          >
            Why Mamamoon?
          </motion.p>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className="px-12 pb-4 mt-4"
          >
            Choosing our skincare products is a decision that prioritizes your
            skin's health and radiance. Our products are formulated with
            high-quality, natural ingredients that nourish and protect your
            skin. By using our skincare line, you can maintain a healthy
            complexion, prevent common skin issues like acne and dryness, and
            enhance your skin's natural barrier against environmental damage.
          </motion.p>
          <motion.p
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className="px-12 pb-4"
          >
            Our commitment to gentle, effective formulations ensures that your
            skin stays hydrated, smooth, and youthful. Trust in our skincare to
            reveal your skin's true potential and enjoy the confidence that
            comes with a glowing, healthy appearance.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
