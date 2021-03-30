export default function Works() {
    return (
        <section id="works" className="sm:mb-48 mb-28">
            <h2 className="text-5xl sm:text-7xl pb-28 font-martel">Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                <article className="max-w-xs relative sm:ml-8 mb-14 font-chakra text-lg">
                    <span className="text-green-300 absolute -right-0 -top-4 text-6xl">0</span>
                    <h3 className="text-xl text-green-300">MeroIPO </h3>
                    <span className="block my-4">NextJs, Material UI</span>
                    <p>personal project, closed source, updates about new IPOs in Nepal.</p>
                    <a href="https://meroipo.com" target="_blank" title="visit site"
                       className="mt-8 block text-blue-400">Demo
                    </a>
                </article>
                <article className="max-w-xs relative sm:ml-8 mb-14 font-chakra text-lg">
                    <span className="text-green-300 absolute -right-0 -top-4 text-6xl">1</span>
                    <h3 className="text-xl text-green-300">IPO Tracker </h3>
                    <span className="block my-4">ExpressJs, MongoDB</span>
                    <p>opensource, REST API, backend only, in progress.</p>
                    <a href="https://github.com/sombii/ipo-tracker" target="_blank" title="source and demo"
                       className="mt-8 block text-blue-400">Source (github) </a>
                </article>
                <article className="max-w-xs relative sm:ml-8 mb-14 font-chakra text-lg">
                    <span className="text-green-300 absolute -right-0 -top-4 text-6xl">2</span>
                    <h3 className="text-xl text-green-300">Mero Share Clone </h3>
                    <span className="block my-4">ReactJs, Material UI</span>
                    <p>opensource, clone of CDSC's Meroshare web app.</p>
                    <a href="https://mero-share-clone.sanjogr.com.np" target="_blank" title="source and demo"
                       className="mt-8 block text-blue-400">Demo and Source
                    </a>
                </article>
            </div>
        </section>
    )
}