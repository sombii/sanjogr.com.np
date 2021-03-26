export default function Works() {
    return (
        <section id="works" className="sm:mb-48 mb-28">
            <h2 className="text-7xl pb-28">Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 ">
                <article className="max-w-xs relative ml-8 mb-14 font-chakra text-xl">
                    <span className="text-green-300 absolute -left-8">01</span>
                    <h3>MeroIPO </h3>
                    <span className="block my-4">NextJs, Material UI</span>
                    <p>personal project, closed source, updates about new IPOs in Nepal.</p>
                    <a href="https://meroipo.com" target="_blank" title="visit site" className="mt-8 block text-blue-400">Demo
                    </a>
                </article>
                <article className="max-w-xs relative ml-8 mb-14 font-chakra text-xl">
                    <span className="text-green-300 absolute -left-8">02</span>
                    <h3>IPO Tracker </h3>
                    <span className="block my-4">ExpressJs, MongoDB</span>
                    <p>opensource, REST API, backend only, in progress.</p>
                    <a href="https://github.com/sombii/ipo-tracker" target="_blank" title="source and demo" className="mt-8 block text-blue-400">Source (github)
                        {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white"*/}
                        {/*     className="w-6 h-6">*/}
                        {/*    <path*/}
                        {/*        d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>*/}
                        {/*    <path*/}
                        {/*        d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>*/}
                        {/*</svg>*/}
                    </a>
                </article>
                <article className="max-w-xs relative ml-8 mb-14 font-chakra text-xl">
                    <span className="text-green-300 absolute -left-8">03</span>
                    <h3>Mero Share Clone </h3>
                    <span className="block my-4">ReactJs, Material UI</span>
                    <p>opensource, clone of CDSC's Meroshare web app.</p>
                    <a href="https://mero-share-clone.sanjogr.com.np" target="_blank" title="source and demo" className="mt-8 block text-blue-400">Demo and Source
                    </a>
                </article>
            </div>
        </section>
    )
}