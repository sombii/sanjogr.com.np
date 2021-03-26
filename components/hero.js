import Particle from "./particle";

export default function Hero() {
    return (
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
    )
}