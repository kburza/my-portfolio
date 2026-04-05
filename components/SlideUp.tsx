"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface Props {
  children?: ReactNode
  offset?: string // kept for API compatibility, unused
}

export default function SlideUp({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
