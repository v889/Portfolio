import React from "react";
import { motion } from "framer-motion";
import { AiFillIeCircle, AiFillAndroid} from "react-icons/ai";
import { SiJavascript,SiPython,SiMongodb,SiCplusplus,SiExpress,SiNodedotjs,SiReact,SiDjango,SiMysql} from 'react-icons/si';
const Skill = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },

    four: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <div id="skill">
      <h2>Skill</h2>
      <section>
        
        <motion.div
          className="serviceBox3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
        >
          <SiCplusplus />
          <span>C++</span>
        </motion.div>
        <motion.div
          className="serviceBox3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay: 0.2,
          }}
        >
          <SiPython />
          <span>Python</span>
        </motion.div>
        <motion.div
          className="serviceBox3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay: 0.4,
          }}
        >
          <SiDjango />
          <span>Django</span>
        </motion.div>
        <motion.div
          className="serviceBox3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay: 0.6,
          }}
        >
          <SiMongodb />
          <span>Mongo DB</span>
        </motion.div>
        <motion.div
          className="serviceBox3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay: 0.8,
          }}
        >
          <SiExpress/>
          <span>Express JS</span>
        </motion.div>
        <motion.div
          className="serviceBox3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay: 0.8,
          }}
        >
          <SiNodedotjs/>
          <span>Node JS</span>
        </motion.div>
        <motion.div
          className="serviceBox3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay: 0.8,
          }}
        >
          <SiReact/>
          <span>React JS</span>
        </motion.div>
        <motion.div
          className="serviceBox3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay: 0.8,
          }}
        >
          <SiMysql/>
          <span>SQL</span>
        </motion.div>
        <motion.div
          className="serviceBox3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay: 0.8,
          }}
        >
          <SiJavascript/>
          <span>JS</span>
        </motion.div>

      </section>
    </div>
  );
};

export default Skill;