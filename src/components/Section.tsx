"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      // ↓ Adjust the vertical spacing between sections here
      // Originally it may have been something like "py-20"
      // You can make it tighter by reducing to "py-12" or "py-8"
      className={`py-20 ${className || ""}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="container"
      >
        {children}
      </motion.div>
    </section>
  );
}
