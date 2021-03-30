export default function Hero() {
    return (
        <section id="about"
                 className="hero flex sm:mt-52 mt-36 sm:mb-32 mb-16 justify-center items-center">
            <div>
                <h1 className="font-limeLight">
                    <span className="lg:text-5xl text-4xl z-10 relative flex flex-row">RAI,</span>
                    <span
                        className="hero-text lg:text-9xl text-7xl py-3 bg-gradient-to-r from-blue-800 via-purple-600 to-green-600"
                    >SANJOG</span>
                </h1>
                <div className="mt-20 font-chakra text-xl ">
                    <span className="block">React Developer</span>
                    <span>Hetauda, Nepal</span>
                </div>
                <div
                    className="flex text-lg items-center w-full pb-20  mt-16 font-chakra">
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