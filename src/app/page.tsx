'use client'
import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import React, {useEffect, useState} from "react";
import {Container} from "@/components/Container";
import Image from 'next/image'
import {TypeAnimation} from "react-type-animation";
import "animate.css"
import Footer from "@/components/Footer";
import {AnimationOnScroll} from 'react-animation-on-scroll';
import TopComps from "@/components/topcomps";
import axios from "axios";
import {NextUIProvider} from "@nextui-org/react";

export default function Home2() {
    const [about, setaboutus] = useState();
    const [aboutImages, setAboutImages] = useState([]);

    const [features, set_features] = useState([]);
    useEffect(() => {
        const options = {
            method: 'GET',
            url: '/api/home',
            headers: {'Content-Type': 'application/json'}
        };

        axios.request(options).then(function (response) {
            const data = JSON.parse(JSON.stringify(response.data))
            setaboutus(data[0].about_us);
            set_features(data[0].why_choose_us);

        }).catch(function (error) {
            console.error(error);
        });

    }, []);

    useEffect(() => {
        fetchAboutImages();
    }, []);

    function fetchAboutImages(){
            axios.get("/api/homeaboutImages/all")
                .then(resp => {
                    console.log("resp", resp);
                    const images = resp.data.map(item => item.imageUrl);
                    console.log(images);
                    
                    setAboutImages(images);
                    
                })
                .catch(err => console.error(err));
    }


    return (
        <>

                <Header/>
                <Container className="pt-28  text-center lg:pt-36 h-screen">

                    <div className="relative isolate px-6 pt-14 lg:px-8">
                        <div
                            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                            aria-hidden="true"
                        >
                            <div
                                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                                style={{
                                    clipPath:
                                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                }}
                            />
                        </div>
                    </div>
                    <h1 className="mx-auto max-w-4xl z-20 font-display text-5xl font-medium tracking-tight text-black sm:text-7xl">
                        We have wide range of{' '}< br/>
                        <span className="relative whitespace-nowrap text-[#5F3b28]">
                          <svg
                              aria-hidden="true"
                              viewBox="0 0 418 42"
                              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-[#C7AB8E]"
                              preserveAspectRatio="none"
                          >
                            <path
                                d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"/>
                          </svg>
                  <span className="relative">
                   {/*Electrical, Instrumentation, Automation, Mechanical*/}
                   <TypeAnimation
                       sequence={[
                           // Same substring at the start will only be typed out once, initially
                           'Electrical', 1000,
                           'Instrumentation', 1000,
                           'Automation', 1000,
                           'Mechanical', 1000
                       ]}
                       wrapper="span"
                       speed={20}
                       style={{fontSize: '1em', display: 'inline-block'}}
                       repeat={Infinity}
                   /></span>
                </span>{' '}
                        products
                    </h1>

                    <div className="mt-10 flex justify-center space-x-6">

                    </div>
                    <div className="animate__animated animate__bounce animate__infinite mt-10">
                        <svg className="mx-auto" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.8285 12.0259L16.2427 13.4402L12 17.6828L7.7574 13.4402L9.17161 12.0259L11 13.8544V6.31724H13V13.8544L14.8285 12.0259Z"
                                fill="currentColor"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M19.7782 19.7782C15.4824 24.0739 8.51759 24.0739 4.22183 19.7782C-0.0739417 15.4824 -0.0739417 8.51759 4.22183 4.22183C8.51759 -0.0739419 15.4824 -0.0739419 19.7782 4.22183C24.0739 8.51759 24.0739 15.4824 19.7782 19.7782ZM18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63604 18.364C2.12132 14.8492 2.12132 9.15076 5.63604 5.63604C9.15076 2.12132 14.8492 2.12132 18.364 5.63604C21.8787 9.15076 21.8787 14.8492 18.364 18.364Z"
                                  fill="currentColor"/>
                        </svg>
                    </div>
                </Container>

                {/*<div className="bg-white py-10 ">*/}
                {/*    <div className="mx-auto max-w-7xl px-6 lg:px-8">*/}
                {/*        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">*/}
                {/*            Trusted by Manufacturers around the world.*/}
                {/*        </h2>*/}
                {/*        <div*/}
                {/*            className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">*/}
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
                <div className="overflow-hidden bg-white py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                        <div
                            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                            <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About
                                    us</h2>
                                <p className="mt-6 text-base leading-7 text-gray-600">
                                    {/*In our quest for excellence, Shri Krishna Commercial was formed in 2010 with objective*/}
                                    {/*of becoming specialisation in Electrical, Mechanical and Instrumentation products line.*/}
                                    {/*Since then Shri Krishna Commercial has grown many folds to become one of the best most*/}
                                    {/*sought after and reputed aggregators and traders with presence in in Jharkhand, West*/}
                                    {/*Bengal, Orissa and Chhattisgarh and other parts of India.*/}
                                    {/*In pursuance to our vision of*/}
                                    {/*becoming a leading one stop industrial supplies services and solutions we have*/}
                                    {/*collaborated and tied up with leading manufacturers and OEMs of various Electrical,*/}
                                    {/*Mechanical, Instrumentaion equipments, spares, fittings and supplies. While we have*/}
                                    {/*expanded our footprints to Four States, we are tirelessly working towards pan India*/}
                                    {/*abroad.*/}
                                    {about}
                                </p>
                                <div className="mt-10 flex">
                                    <a
                                        href="#"
                                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Join our team <span aria-hidden="true">&rarr;</span>
                                    </a>
                                </div>
                            </div>
                            <div
                                className="flex flex-wrap items-start md:block hidden justify-end gap-6 sm:gap-8 lg:contents">
                                <AnimationOnScroll animateIn="animate__fadeInUp">
                                    <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                                        <img
                                            // src="/img/temp/FIRST IMAGE.jpg"
                                            src={aboutImages.at(0)}
                                            alt="About-Image-1"
                                            className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                                        />
                                    </div>
                                </AnimationOnScroll>
                                <div
                                    className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                                    <AnimationOnScroll animateIn="animate__fadeInUp">
                                        <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                                            <img
                                                // src="/img/temp/8TH.jpg"
                                                src={aboutImages.at(1)}
                                                alt="About-Image-2"
                                                className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                                            />
                                        </div>
                                    </AnimationOnScroll>
                                    <AnimationOnScroll animateIn="animate__fadeInUp">
                                        <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                                            <img
                                                // src="/img/temp/6TH.jpg"
                                                src={aboutImages.at(2)}
                                                alt="About-Image-3"
                                                className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                                            />
                                        </div>
                                    </AnimationOnScroll>
                                    <AnimationOnScroll animateIn="animate__fadeInUp">
                                        <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                                            <img
                                                // src="/img/temp/SECONG IMAGE.jpg"
                                                src={aboutImages.at(3)}
                                                alt="About-Image-34"
                                                className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                                            />
                                        </div>
                                    </AnimationOnScroll>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div
                            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            <div>
                                <h2 className="text-base font-semibold leading-7 text-indigo-600">Everything you
                                    need</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">WHY
                                    CHOOSE
                                    US ?</p>
                                <p className="mt-6 text-base leading-7 text-gray-600">
                                    Choose us because we deliver unparalleled expertise and unwavering commitment to
                                    exceed
                                    your expectations. Our track record of excellence speaks for itself.
                                </p>
                            </div>
                            <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
                                {features.map((feature) => (
                                    <AnimationOnScroll animateIn="animate__fadeInUp" key={feature["name"]}>
                                        <div key={feature["name"]} className="relative pl-9">
                                            <dt className="font-semibold text-gray-900">
                                                <svg width="24"
                                                     className="absolute left-0 top-1 h-5 w-5 text-indigo-500"
                                                     height="24" viewBox="0 0 24 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M10.5858 13.4142L7.75735 10.5858L6.34314 12L10.5858 16.2427L17.6568 9.1716L16.2426 7.75739L10.5858 13.4142Z"
                                                        fill="currentColor"/>
                                                </svg>

                                                {feature["name"]}
                                            </dt>
                                            <dd className="mt-2">{feature["description"]}</dd>
                                        </div>
                                    </AnimationOnScroll>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>

                <Carousel/>
                

                <AnimationOnScroll animateIn="animate__fadeInUp">
                    <div className="bg-white py-16 sm:py-24">
                        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                            <div
                                className="relative isolate flex flex-col gap-10 overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:flex-row xl:items-center xl:py-32">
                                <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl xl:max-w-none xl:flex-auto">
                                    Want product news and updates?
                                    Sign up for our newsletter.
                                </h2>
                                <form className="w-full max-w-md">
                                    <div className="flex gap-x-4">
                                        <label htmlFor="email-address" className="sr-only">
                                            Email address
                                        </label>
                                        <input
                                            id="email-address"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                                            placeholder="Enter your email"
                                        />
                                        <button
                                            type="submit"
                                            className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                                        >
                                            Notify me
                                        </button>
                                    </div>
                                    <p className="mt-4 text-sm leading-6 text-gray-300">
                                        We care about your data. Read our{' '}
                                        <a href="#" className="font-semibold text-white">
                                            privacy&nbsp;policy
                                        </a>
                                        .
                                    </p>
                                </form>
                                <svg
                                    viewBox="0 0 1024 1024"
                                    className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
                                    aria-hidden="true"
                                >
                                    <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                                            fillOpacity="0.7"/>
                                    <defs>
                                        <radialGradient
                                            id="759c1415-0410-454c-8f7c-9a820de03641"
                                            cx={0}
                                            cy={0}
                                            r={1}
                                            gradientUnits="userSpaceOnUse"
                                            gradientTransform="translate(512 512) rotate(90) scale(512)"
                                        >
                                            <stop stopColor="#7775D6"/>
                                            <stop offset={1} stopColor="#E935C1" stopOpacity={0}/>
                                        </radialGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </AnimationOnScroll>
                <Footer/>

        </>
    )
}