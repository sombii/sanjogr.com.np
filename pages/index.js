import Head from 'next/head'
import Particle from "../components/particle";
// import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className="flex justify-center font-bungee px-4 text-white outer-hero relative xl:bg-600 bg-50p">
            <Head>
                <title>Sanjog Rai</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className="xLine sm:top-36 top-14"/>
            <div className="max-w-5xl sm:px-16 px-4 yLine w-full sm:mx-16 mx-8 relative">
                {/*<p className="absolute px-2 bg-blue-600 top-64 sm:-mx-24 -mx-20 left-1 transform -rotate-90">phpstorm</p>*/}
                <p className="absolute px-2 bg-blue-600 top-64 sm:-mx-24 -mx-20 left-1 transform -rotate-90">manjaro-xfce</p>
                <p className="absolute px-2 bg-blue-600 top-3/4 sm:-mx-20 -mx-16 left-2 transform -rotate-90">phpstorm</p>
                {/*<div className=""/>*/}
                <section id="id" className="hero flex sm:mt-52 mt-20 sm:mb-32 flex-col lg:flex-row">
                    <Particle/>
                    <div className="">
                        <h1>
                            <span className="md:text-5xl text-4xl block z-10 relative">RAI,</span>
                            <span
                                className="hero-text lg:text-8xl text-7xl py-3"
                            >SANJOG</span>
                        </h1>
                        <div className="mt-20 font-chakra text-xl ml-4">
                            <span className="block">React Developer</span>
                            <span>Hetauda, Nepal</span>
                        </div>
                        <nav
                            className="flex text-lg items-center justify-start w-full pb-20 ml-4 mt-16 font-chakra">
                            <a href="#works" className="mr-16 relative nav-item z-10">
                                <div>
                                    <span className="relative z-10">github</span>
                                    <span
                                        className="w-2 h-2 bg-blue-600 rounded-full inline-block absolute -right-6 bottom-1/2 transform translate-y-1/2 transition-all duration-20"/>
                                </div>
                            </a>
                            <a href="#contact" className="relative nav-item z-10">
                                <div>
                                    <span className="relative z-10">linkedin</span>
                                    <span
                                        className="w-2 h-2 bg-blue-600 rounded-full inline-block absolute -right-6 bottom-1/2 transform translate-y-1/2 transition-all duration-20"/>
                                </div>
                            </a>
                        </nav>
                    </div>
                    {/*<Particle/>*/}
                </section>
                {/*<section id="skills" className="sm:mb-48 mb-28">*/}
                {/*    <div className="grid font-chakra text-xl tools justify-items-center items-center gap-y-4">*/}
                {/*        <img src="./assets/react.svg" alt="react" title="react" className="w-12 h-12"/>*/}
                {/*        <img src="./assets/next.svg" alt="nextjs" title="nextjs" className="w-12 h-12"/>*/}
                {/*        <img src="./assets/materialui.svg" alt="materialui" title="materialui" className="w-12 h-12"/>*/}
                {/*        <img src="./assets/tailwind.svg" alt="tailwindcss" title="tailwindcss" className="w-12 h-12"/>*/}
                {/*        <img src="./assets/mongodb.svg" alt="mongodb" title="mongodb" className="w-12 h-12"/>*/}
                {/*        <span className="tracking-tight font-bold text-red-500" title="mongoosejs">mongoose</span>*/}
                {/*        <img src="./assets/firebase.svg" alt="firebase" title="firebase firestore"*/}
                {/*             className="w-12 h-12"/>*/}
                {/*        <img src="./assets/github.svg" alt="github" title="github" className="w-12 h-12"/>*/}
                {/*        <img src="./assets/figma.svg" alt="figma" title="figma" className="w-12 h-12"/>*/}
                {/*        <span title="ExpressJs">Express</span>*/}
                {/*        <img src="./assets/framermotion.svg" alt="framer motion" title="framer motion"*/}
                {/*             className="w-12 h-12"/>*/}
                {/*    </div>*/}
                {/*</section>*/}
                <section id="skills" className="sm:mb-48 mb-28">
                    <div className="flex font-chakra text-xl tools justify-center items-center flex-wrap">
                        <img src="./assets/react.svg" alt="react" title="react" className="w-12 h-12"/>
                        <img src="./assets/next.svg" alt="nextjs" title="nextjs" className="w-12 h-12"/>
                        <img src="./assets/materialui.svg" alt="materialui" title="materialui" className="w-12 h-12"/>
                        <img src="./assets/tailwind.svg" alt="tailwindcss" title="tailwindcss" className="w-12 h-12"/>
                        <img src="./assets/mongodb.svg" alt="mongodb" title="mongodb" className="w-12 h-12"/>
                        <span className="tracking-tight font-bold text-red-500" title="mongoosejs">mongoose</span>
                        <img src="./assets/firebase.svg" alt="firebase" title="firebase firestore"
                             className="w-12 h-12"/>
                        <img src="./assets/github.svg" alt="github" title="github" className="w-12 h-12"/>
                        <img src="./assets/figma.svg" alt="figma" title="figma" className="w-12 h-12"/>
                        <span title="ExpressJs">Express</span>
                        <img src="./assets/framermotion.svg" alt="framer motion" title="framer motion"
                             className="w-12 h-12"/>
                    </div>
                </section>
                <section id="works" className="sm:mb-48 mb-28">
                    <h2 className="text-7xl pb-28">Works</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 ">
                        <article className="max-w-xs relative ml-8 mb-14 font-chakra text-xl">
                            <span className="text-green-300 absolute -left-8">01</span>
                            <h3>MeroIPO</h3>
                            <span className="block my-4">NextJs, Material UI</span>
                            <p>Closed source project, updates about new IPOs in Nepal.</p>
                        </article>
                        <article className="max-w-xs relative ml-8 mb-14 font-chakra text-xl">
                            <span className="text-green-300 absolute -left-8">01</span>
                            <h3>MeroIPO</h3>
                            <span className="block my-4">NextJs, Material UI</span>
                            <p>Closed source project, updates about new IPOs in Nepal.</p>
                        </article>
                        <article className="max-w-xs relative ml-8 mb-14 font-chakra text-xl">
                            <span className="text-green-300 absolute -left-8">01</span>
                            <h3>MeroIPO</h3>
                            <span className="block my-4">NextJs, Material UI</span>
                            <p>Closed source project, updates about new IPOs in Nepal.</p>
                        </article>
                    </div>
                </section>
                <section id="contact" className="mb-48 flex flex-col justify-between">
                    <h2 className="text-7xl pb-20">Contact</h2>
                    <div className="font-chakra flex flex-col items-start ml-4 text-xl">
                        <span className="border-b-2 border-blue-500 pb-1">
                            <a href="tel:09807123304">09807123304</a>
                        </span>
                        <span className="border-b-2 border-blue-500 pb-1 my-3">
                            <a href="mailto:sanjog@sombex.com">sanjog@sombex.com</a>
                        </span>
                        <span>Hetauda, Makawanpur, Nepal</span>
                    </div>
                </section>
            </div>
        </div>
    )
}
