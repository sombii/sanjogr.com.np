// import Particle from "./particle";
import {motion} from "framer-motion";

export default function Hero() {
    return (
        <section id="about"
                 className="hero flex sm:mt-52 mt-20 sm:mb-32 justify-center items-center">
            <div className="relative">
                <motion.h1
                    initial={{y: 150}} animate={{y: 0}} transition={{duration: 1, ease: "easeInOut"}}
                >
                    <span className="lg:text-5xl text-4xl z-10 relative flex flex-row"> RAI,</span>
                    <span
                        // initial={{y: 155}} animate={{y: 0}} transition={{duration: 1, ease: "easeInOut"}}
                        className="hero-text lg:text-9xl text-7xl py-3 bg-gradient-to-r from-blue-800 via-purple-600 to-green-600"
                    >SANJOG</span>
                </motion.h1>
                <motion.div className="mt-20 font-chakra text-xl"
                            initial={{y: 100}} animate={{y: 0}} transition={{duration: 1, ease: "easeInOut"}}
                >
                    <span className="block">React Developer</span>
                    <span>Hetauda, Nepal</span>
                </motion.div>
                <div
                    className="flex text-lg items-center justify-end w-full pb-20  mt-16 font-chakra">
                    <a href="https://github.com/sombii/" target="_blank" className="mr-16 relative nav-item z-10">
                        <div>
                            <span className="relative z-10">github</span>
                            <span
                                className="w-2 h-2 bg-blue-600 rounded-full inline-block absolute -right-6 bottom-1/2 transform translate-y-1/2 transition-all duration-20"/>
                        </div>
                    </a>
                    <a href="https://linkedin.com/in/sombii" target="_blank" className="relative nav-item z-10">
                        <div>
                            <span className="relative z-10">linkedin</span>
                            <span
                                className="w-2 h-2 bg-blue-600 rounded-full inline-block absolute -right-6 bottom-1/2 transform translate-y-1/2 transition-all duration-20"/>
                        </div>
                    </a>
                </div>
            </div>
            {/*<div>*/
            }
            {/*</div>*/
            }
        </section>
    )
}