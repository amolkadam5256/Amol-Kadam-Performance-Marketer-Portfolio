"use client";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";
export function AnimatedCounter({end,prefix="",suffix="",decimals=0}:{end:number;prefix?:string;suffix?:string;decimals?:number}){const ref=useRef<HTMLSpanElement>(null);const active=useInView(ref,{once:true,amount:.5});return <span ref={ref}>{active&&<CountUp start={0} end={end} duration={1.3} prefix={prefix} suffix={suffix} decimals={decimals} separator=","/>}</span>}
