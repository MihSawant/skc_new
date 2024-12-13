'use client'
import React, {useEffect, useState} from 'react'
import {Dialog} from '@headlessui/react'
import {Testimonials} from "@/components/testimonial";
import Header from "@/components/Header";
import axios from "axios";
// import {AnimationOnScroll} from "react-animation-on-scroll";
import 'animate.css';
import TopComps from "@/components/topcomps";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
    ssr: false,
});
export default function About() {

    const [aboutImages, setAboutImages] = useState([]);
    let [stats, setstats] = useState([
        {label: 'Established in 2010', value: new Date().getFullYear() - 2010 + "+ Years in Business"},
        {label: 'States', value: '15+'},
        {label: 'Clients', value: '200+'},
    ]);
    let [headerline, setHeaderline] = useState("We are a dedicated team committed to providing innovative solutions and exceptional experiences. With a passion for excellence, we aim to exceed expectations and create lasting value for our customers.");
    let [about, setaboutus] = useState("M/S SHRI KRISHNA COMMERCIAL was established in 2010, The Company was formed with a vision of becoming specialists in the Industrial sector with a motive to pioneer in Electrical, Instrumentation, Mechanical and safety solution. Over the years, Shri Krishna Commercial has emerged as a one-stop solution for many Industrial, Electrical, Instrumentation and Mechanical products with the core value of the company's growth in line with its employees’. In sync with the idea of becoming a leading one-stop electrical product solution, we have tied up with leading OEM’s of various unique and innovative segments. Since its inception, M/S Shri Krishna commercial has grown many folds to become one of the most trusted aggregators and channel partners with more than 35+ OEMs serving more than 119+ customers. We've branched our services to 8+ states of India (both in Private and Government sectors) and are working tirelessly towards expanding our base over Pan India. We envisioned on becoming the most reliable, sustainable and competitive company for industrial business solution globally.");
    let [values, setvalues] = useState("Our values drive us forward, guiding our actions to prioritize integrity, collaboration, and continuous growth. We embrace diversity and are devoted to delivering excellence in all we do.")

    useEffect(() => {
        const options = {
            method: 'GET',
            url: '/api/about',
            headers: {'Content-Type': 'application/json'}
        };
        axios.request(options).then(function (response) {
            const data = JSON.parse(JSON.stringify(response.data));
            if (data != null) {

                let newArr = [...stats]; // copying the old datas array
                newArr[1].value = data[0]["state"] + "+"
                newArr[2].value = data[0]["clients"] + "+"
                setstats(newArr);
                setHeaderline(data[0]["aboutus"])
                setaboutus(data[0]["know_who_we"])
                setvalues(data[0]["values"])
            }
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    useEffect(() => {
        fetchAboutImages();
    }, []);

    function fetchAboutImages(){
            axios.get("/api/aboutImages/all")
                .then(resp => {
                    console.log("resp", resp);
                    const images = resp.data.map(item => item.imageUrl);
                    console.log(images);
                    
                    setAboutImages(images);
                    
                })
                .catch(err => console.error(err));
    }

    const [num, setNum] = React.useState(331231);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-white">
            {/* Header */}
            <Header/>

            <main className="isolate">
                {/* Hero section */}
                <div className="relative isolate -z-10">
                    <svg
                        className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                                width={200}
                                height={200}
                                x="50%"
                                y={-1}
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M.5 200V.5H200" fill="none"/>
                            </pattern>
                        </defs>
                        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                            <path
                                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                                strokeWidth={0}
                            />
                        </svg>
                        <rect width="100%" height="100%" strokeWidth={0}
                              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"/>
                    </svg>
                    <div
                        className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
                        aria-hidden="true"
                    >
                        <div
                            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                            style={{
                                clipPath:
                                    'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
                            }}
                        />
                    </div>
                    <div className="overflow-hidden">
                        <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                        About us
                                    </h1>
                                    <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                                        {headerline}
                                    </p>
                                </div>
                                <div
                                    className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                                    <div
                                        className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                                        <div className="relative">
                                            <img
                                                // src="/img/temp/imagee 1.jpg"
                                                src={aboutImages.at(0)}
                                                alt=""
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div
                                                className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                                        </div>
                                    </div>
                                    <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                                        <div className="relative">
                                            <img
                                                // src="/img/temp/image 2.jpg"
                                                src={aboutImages.at(1)}
                                                alt=""
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div
                                                className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                                        </div>
                                        <div className="relative">
                                            <img
                                                // src="/img/temp/IMAGE 3.jpg"
                                                src={aboutImages.at(2)}
                                                alt=""
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div
                                                className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                                        </div>
                                    </div>
                                    <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                                        <div className="relative">
                                            <img
                                                // src="/img/temp/IMAGE 4.jpg"
                                                src={aboutImages.at(3)}
                                                alt=""
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div
                                                className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                                        </div>
                                        <div className="relative">
                                            <img
                                                // src="/img/temp/IMAGE 5.jpg"
                                                src={aboutImages.at(4)}
                                                alt=""
                                                className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                            />
                                            <div
                                                className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content section */}
                <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">

                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Know who we are</h2>
                        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                                <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                                    <p>
                                        {about}
                                    </p>

                                </div>
                                {/*<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:mt-10 mt-3">Our*/}
                                {/*    mission</h2>*/}
                                {/*<div className="mt-10 max-w-xl text-base leading-7 text-gray-700">*/}
                                {/*    <p>*/}
                                {/*        Our mission is to flourish our trades in India and across the world to become*/}
                                {/*        the most reliable, sustainable, and competitive company for industrial business*/}
                                {/*        solution provider, globally.*/}
                                {/*    </p>*/}

                                {/*</div>*/}
                            </div>
                            <div className="lg:flex lg:flex-auto lg:justify-center">

                                <dl className="w-64 space-y-8 xl:w-80">
                                    {stats.map((stat, k) => (
                                        <div key={stat.label} className="flex flex-col-reverse gap-y-4">

                                            <dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
                                            <dd className="text-5xl font-semibold tracking-tight text-gray-900 flex">
                                                <AnimatedNumbers
                                                    includeComma
                                                    animateToNumber={parseInt(stat.value.replace("+", ""))}
                                                    fontStyle={{fontSize: 40, fontWeight: "black"}}
                                                    locale="en-US"
                                                    configs={[
                                                        {mass: 1, tension: 220, friction: 100},
                                                        {mass: 1, tension: 180, friction: 130},
                                                        {mass: 1, tension: 280, friction: 90},
                                                        {mass: 1, tension: 180, friction: 135},
                                                        {mass: 1, tension: 260, friction: 100},
                                                        {mass: 1, tension: 210, friction: 180},
                                                    ]}
                                                ></AnimatedNumbers>
                                                <p className="-mt-1">+ {k == 0 ? " Years" : ""}</p></dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image section */}
                <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
                    <img
                        src="/img/temp/FIRST IMAGE.jpg"
                        alt=""
                        className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
                    />
                </div>

                {/* Values section */}
                <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our values</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            {values}
                        </p>
                    </div>
                    <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {/*{values.map((value) => (*/}
                        {/*    <AnimationOnScroll animateIn="animate__fadeInUp">*/}
                        {/*    <div key={value.name}>*/}
                        {/*        <dt className="font-semibold text-gray-900">{value.name}</dt>*/}
                        {/*        <dd className="mt-1 text-gray-600">{value.description}</dd>*/}
                        {/*    </div>*/}
                        {/*    </AnimationOnScroll>*/}
                        {/*))}*/}
                    </dl>
                </div>

                {/* Logo cloud */}
                <div className="relative isolate -z-10 mt-32 sm:mt-48">
                    <div
                        className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
                        <svg className="h-[40rem] w-[80rem] flex-none stroke-gray-200" aria-hidden="true">
                            <defs>
                                <pattern
                                    id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                                    width={200}
                                    height={200}
                                    x="50%"
                                    y="50%"
                                    patternUnits="userSpaceOnUse"
                                    patternTransform="translate(-100 0)"
                                >
                                    <path d="M.5 200V.5H200" fill="none"/>
                                </pattern>
                            </defs>
                            <svg x="50%" y="50%" className="overflow-visible fill-gray-50">
                                <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" strokeWidth={0}/>
                            </svg>
                            <rect width="100%" height="100%" strokeWidth={0}
                                  fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"/>
                        </svg>
                    </div>
                    {/*<div className="mx-auto max-w-7xl px-6 lg:px-8">*/}
                    {/*    <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">*/}
                    {/*        Trusted by the world’s most innovative teams*/}
                    {/*    </h2>*/}
                    {/*    <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">*/}
                    {/*        <img*/}
                    {/*            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"*/}
                    {/*            src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"*/}
                    {/*            alt="Transistor"*/}
                    {/*            width={158}*/}
                    {/*            height={48}*/}
                    {/*        />*/}
                    {/*        <img*/}
                    {/*            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"*/}
                    {/*            src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"*/}
                    {/*            alt="Reform"*/}
                    {/*            width={158}*/}
                    {/*            height={48}*/}
                    {/*        />*/}
                    {/*        <img*/}
                    {/*            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"*/}
                    {/*            src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"*/}
                    {/*            alt="Tuple"*/}
                    {/*            width={158}*/}
                    {/*            height={48}*/}
                    {/*        />*/}
                    {/*        <img*/}
                    {/*            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"*/}
                    {/*            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"*/}
                    {/*            alt="SavvyCal"*/}
                    {/*            width={158}*/}
                    {/*            height={48}*/}
                    {/*        />*/}
                    {/*        <img*/}
                    {/*            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"*/}
                    {/*            src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"*/}
                    {/*            alt="Statamic"*/}
                    {/*            width={158}*/}
                    {/*            height={48}*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <Testimonials/>
                </div>


                {/*<div className="bg-white py-24 sm:py-32">*/}
                {/*    <div className="mx-auto max-w-7xl px-6 lg:px-8">*/}
                {/*        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">*/}
                {/*            Trusted by Manufacturers around the world.*/}
                {/*        </h2>*/}
                {/*        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">*/}
                {/*            <img*/}
                {/*                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"*/}
                {/*                src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"*/}
                {/*                alt="Transistor"*/}
                {/*                width={158}*/}
                {/*                height={48}*/}
                {/*            />*/}
                {/*            <img*/}
                {/*                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"*/}
                {/*                src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"*/}
                {/*                alt="Reform"*/}
                {/*                width={158}*/}
                {/*                height={48}*/}
                {/*            />*/}
                {/*            <img*/}
                {/*                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"*/}
                {/*                src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"*/}
                {/*                alt="Tuple"*/}
                {/*                width={158}*/}
                {/*                height={48}*/}
                {/*            />*/}
                {/*            <img*/}
                {/*                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"*/}
                {/*                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"*/}
                {/*                alt="SavvyCal"*/}
                {/*                width={158}*/}
                {/*                height={48}*/}
                {/*            />*/}
                {/*            <img*/}
                {/*                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"*/}
                {/*                src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"*/}
                {/*                alt="Statamic"*/}
                {/*                width={158}*/}
                {/*                height={48}*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <TopComps/>
            </main>

            {/* Footer */}
            <Footer/>
        </div>
    )
}
