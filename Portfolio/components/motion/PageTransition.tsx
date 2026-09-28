"use client";
import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
export function PageTransition({children}:{children:React.ReactNode}){
  const path=usePathname();
  const reduce=useReducedMotion();
  return (
    <motion.div
      className="page-flow"
      key={path}
      initial={reduce?false:{opacity:0,filter:"blur(7px)",y:12}}
      animate={{opacity:1,filter:"blur(0px)",y:0}}
      transition={{duration:reduce?0:.55,ease:[.16,1,.3,1]}}
    >
      {children}
    </motion.div>
  );
}
