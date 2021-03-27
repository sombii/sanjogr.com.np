import Head from 'next/head'
import Hero from "../components/hero";
import Skills from "../components/skills";
import Works from "../components/works";
import Contact from "../components/contact";
import Tags from "../components/tags";
// import styles from '../styles/Home.module.css'
import {useViewportScroll} from "framer-motion";

export default function Home() {
    return (
        <div className="flex justify-center font-bungee px-4 text-white outer-hero relative xl:bg-600 bg-50p relative -mb-8">
            <Head>
                <title>Sanjog Rai</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            {/*<div className="xLine sm:top-36 top-14"/>*/}
            <div className="griddy absolute top-0 left-0 w-full h-full">
                <div className="griddySon"/>
                <div className="griddySon"/>
                <div className="griddySon"/>
                <div className="griddySon"/>
                <div className="griddySon"/>
                <div className="griddySon"/>
                <div className="griddySon"/>
                <div className="griddySon"/>
                <div className="griddySon"/>
                <div className="griddySon"/>
                <div className="griddySon"/>
                <div className="griddySon"/>
                <div className="griddySon"/>
                <div className="griddySon"/>
                <div className="griddySon"/>
                <div className="griddySon"/>
                <div className="griddySon"/>
                <div className="griddySon"/>
                <div className="griddySon"/>
                <div className="griddySon"/>
                <div className="griddySon"/>
                <div className="griddySon"/>
                <div className="griddySon"/>
                <div className="griddySon"/>
                <div className="griddySon"/>
                <div className="griddySon"/>
                <div className="griddySon"/>
                <div className="griddySon"/>
                <div className="griddySon"/>
                <div className="griddySon"/>
                <div className="griddySon"/>
                <div className="griddySon"/>
                <div className="griddySon"/>
                <div className="griddySon"/>
                <div className="griddySon"/>
                <div className="griddySon"/>
                <div className="griddySon"/>
                <div className="griddySon"/>
                <div className="griddySon"/>
                <div className="griddySon"/>
            </div>
            <div className="max-w-5xl sm:px-16 px-4 yLine w-full sm:mx-16 mx-8 relative">
                <Tags/>
                <Hero/>
                <Skills/>
                <Works/>
                <Contact/>
            </div>
        </div>
    )
}
