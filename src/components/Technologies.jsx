import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";

const iconVarinat = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Skills</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVarinat(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVarinat(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          <IoLogoJavascript className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconVarinat(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          <FaHtml5 className="text-7xl text-red-400" />
        </motion.div>
        <motion.div 
           variants={iconVarinat(1.5)}
           initial="initial"
           animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <FaCss3Alt className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div 
           variants={iconVarinat(2.5)}
           initial="initial"
           animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <RiTailwindCssFill className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div 
           variants={iconVarinat(1.5)}
           initial="initial"
           animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <FaBootstrap className="text-7xl text-purple-400" />
        </motion.div>
        <motion.div 
           variants={iconVarinat(2.5)}
           initial="initial"
           animate="animate"
           className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <SiTypescript className="text-7xl text-blue-400" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
