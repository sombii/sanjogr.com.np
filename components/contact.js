export default function Contact() {
    return (
        <section id="contact" className="mb-48">
            <h2 className="text-5xl sm:text-7xl pb-20 font-martel">Contact</h2>
            <div className="flex justify-between font-chakra md:flex-row flex-col">
                <div className="flex flex-col items-start ml-4 mt-4 text-lg">
                    <span className="pb-1 text-blue-400">
                        <a href="tel:09807123304">09807123304</a>
                    </span>
                    <span className="pb-1 text-blue-400 my-3">
                        <a href="mailto:sanjog@sombex.com">sanjog@sombex.com</a>
                    </span>
                    <span>Hetauda, Makawanpur, Nepal</span>
                </div>
                <div className="md:mt-0 mt-14">
                    <div className="flex items-center">
                        <a href="https://nextjs.org/" target="_blank">
                            <img src="./assets/next.svg" alt="nextjs" title="nextjs" className="w-14 h-14 m-4"/>
                        </a>
                        <a href="https://tailwindcss.com/" target="_blank">
                            <img src="./assets/tailwind.svg" alt="tailwindcss" title="tailwindcss"
                                 className="w-12 h-12 m-4"/>
                        </a>
                        <a href="https://github.com/sombii/sanjogr.com.np" target="_blank">
                            <img src="./assets/github.svg" alt="tailwindcss" title="source code"
                                 className="w-8 h-8 m-4"/>
                        </a>
                    </div>
                    <p className="m-4 text-xl">Deployed on {" "}<a href="https://vercel.com/" target="_blank">
                        <img src="vercel.svg"
                             alt="vercel"
                             className="w-20 inline"/>
                    </a>
                    </p>
                </div>
            </div>
        </section>
    )
}