'use client'
import { motion, useScroll  } from "framer-motion";

export function ScrollMotion({children}) {

  const { scrollYProgress } = useScroll();

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>  
      {children}
    </motion.div>
    );
}

export function FadeMotion({delay, children}){

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: delay ?? delay }}>  
      {children}
    </motion.div>
  )
}

