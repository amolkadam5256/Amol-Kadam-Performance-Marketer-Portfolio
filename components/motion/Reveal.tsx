"use client";
import { motion, useReducedMotion } from "framer-motion";
export function Reveal({children,delay=0,className=""}:{children:React.ReactNode;delay?:number;className?:string}){const reduce=useReducedMotion();return <motion.div className={className} initial={reduce?false:{opacity:0,y:20,filter:"blur(7px)"}} whileInView={{opacity:1,y:0,filter:"blur(0px)"}} viewport={{once:true,amount:.15}} transition={{duration:reduce?0:.6,delay,ease:[.16,1,.3,1]}}>{children}</motion.div>}
