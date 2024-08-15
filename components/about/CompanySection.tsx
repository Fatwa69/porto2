"use client";
import Badge from "./Badge";
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from "@/util/animation";
const CompanySection = () => {
  return (
    <div className="bg-primary dark:bg-tertiary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className="mx-auto flex max-w-xs flex-col gap-y-4"
          >
            <dt className="text-white loading-7">Transaksi setiap 24 jam</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              <Badge endCountNum={100} endCountText=" ribu" />
            </dd>
          </motion.div>

          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={tagVariants}
            className="mx-auto flex max-w-xs flex-col gap-y-4"
          >
            <dt className="text-white loading-7">Total Pelanggan</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              <Badge endCountNum={11} endCountText=" juta" />
            </dd>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={titleVariants}
            className="mx-auto flex max-w-xs flex-col gap-y-4"
          >
            <dt className="text-white loading-7">User Baru Tiap Tahun</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              <Badge endCountNum={20} endCountText=" ribu" />
            </dd>
          </motion.div>
        </dl>
      </div>
    </div>
  );
};

export default CompanySection;
