// @ts-nocheck
'use client'
import {Fragment, useEffect, useState} from 'react'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// @ts-ignore
import {StarIcon} from '@heroicons/react/solid'
import {Dialog, Tab, Transition} from '@headlessui/react'

// @ts-ignore
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import axios from "axios";
import toast from "react-hot-toast";


// @ts-ignore
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function id({params}: { params: { end: string } }) {
    const [open, setOpen] = useState(false)
    const [product, setproduct] = useState({})
    const [email, setEmail] = useState('');

    function getfinal() {
        const options = {
            method: 'GET',
            url: '/api/endproduct/products/final/' + params.end,
            headers: {'Content-Type': 'application/json'}
        };
        axios.request(options).then(function (response) {
            var data = JSON.parse(JSON.stringify(response.data))
            setproduct(data)
        }).catch(function (error) {
            console.error(error);
        });
    }

    function postQuote(name: string) {
        const data = {
            email: email,
            // @ts-ignore
            product: name
        }
        if (email.length === 0) {
            toast.error("Please Enter Email", {
                position: 'top-right',
                // @ts-ignore
                autoClose: 3000,
                closeOnClick: true
            });
        } else {
            axios.post('/api/quotes/new', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(resp => {
                if (resp.status === 201) {
                    toast.success("Quote Submitted", {
                        position: 'top-right',
                        // @ts-ignore
                        autoClose: 3000,
                        closeOnClick: true
                    });
                } else {
                    if (resp.data.error === true && resp.data.message === "Duplicate Entry") {
                        toast.error("Quote Already Submitted", {
                            position: 'top-right',
                            // @ts-ignore
                            autoClose: 3000,
                            closeOnClick: true
                        });
                    }
                }

            }).catch(err => console.error(err.message));
        }

    }

    const avg = Math.floor(Math.random() * (4 - 3 + 1) + 4)
    // const reviews = []
    const [faq, setFaq] = useState([])
    // const faqs = [
    //     {
    //         question: 'Do Shri Krishna Commercial supplies in the west part of India?',
    //         answer:
    //             "Yes"
    //     },
    //     {
    //         question: 'Is Shri Krishna Authorized Partner of xyz?',
    //         answer:
    //             ""
    //     }, {
    //         question: 'What is the minimum order quantity?',
    //         answer:
    //             ""
    //     }, {
    //         question: ' Can I get a demo of this product?',
    //         answer:
    //             ""
    //     },
    //     // More FAQs...
    // ]
    const license = {
        href: '#',
        summary: 'For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.',
        content: `
            <h4>Overview</h4>
            <p>The initial fault analysis provides the basis for determining the subsequent procedure in the fault location process. During pre-location, the position of the fault is roughly located. The subsequent pin-pointing enables precise determination of the cable fault. Cable identification is used to identify the defective cable in a route. You can use various measurement methods depending on the type of fault and cable type.</p>
        `,
    };

    async function get_faq() {
        var options = {
            method: 'GET',
            url: '/api/faq/single/' + params.end,
            headers: {'Content-Type': 'application/json'}
        };

        axios.request(options).then(function (response) {
            var data = JSON.parse(JSON.stringify(response.data))
            setFaq(data)
        }).catch(function (error) {
            console.error(error);
        });
    }

    useEffect(() => {
        // @ts-ignore
        get_faq()
        // @ts-ignore
        getfinal()

    }, [])
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-white">
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
                    <div
                        className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div
                                className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                                <div>
                                    {/*<div*/}
                                    {/*    className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">*/}
                                    {/*    <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true"/>*/}
                                    {/*</div>*/}
                                    <div className="mt-3 text-center sm:mt-5">
                                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                                            Submit Details
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <div>
                                                <label htmlFor="email"
                                                       className="block text-sm font-medium text-gray-700">
                                                    Email
                                                </label>
                                                <div className="mt-1">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        id="email"
                                                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                                        placeholder="you@example.com"
                                                        onChange={event => setEmail(event.target.value)}
                                                    />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 sm:mt-6">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                                        onClick={() => {
                                            setOpen(false)
                                            // // @ts-ignore
                                            // console.log(product["name"])
                                            // @ts-ignore
                                            postQuote(product["name"]);
                                        }}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
            {/* Mobile menu */}
            <Header/>
            <div className="bg-white">
                <div className="mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    {/* Product */}
                    <div className="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
                        {/* Product image */}
                        <div className="lg:row-end-1 lg:col-span-4">
                            {/* @ts-ignore*/}
                            ` <div
                            className="aspect-w-3 aspect-h-2 rounded-lg bg-white overflow-hidden"> {/* @ts-ignore*/}
                            <img src={"/img/endproduct/" + product["image"]} alt={product["name"]}
                                 className="object-scale-down object-center"/></div>`
                        </div>

                        {/* Product details */}
                        <div
                            className="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3">
                            <div className="flex flex-col-reverse">
                                <div className="mt-4">
                                    {/* @ts-ignore*/}
                                    <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{product["name"]}</h1>

                                    <h2 id="information-heading" className="sr-only">
                                        Product information
                                    </h2>
                                    {/*<p className="text-sm text-gray-500 mt-2">*/}

                                    {/*</p>*/}
                                </div>

                                <div>
                                    <h3 className="sr-only">Reviews</h3>
                                    <div className="flex items-center">
                                        {[0, 1, 2, 3, 4].map((rating) => (

                                            <StarIcon
                                                key={rating}
                                                className={classNames(
                                                    avg > rating ? 'text-yellow-400' : 'text-gray-300',
                                                    'h-5 w-5 flex-shrink-0'
                                                )}
                                                aria-hidden="true"
                                            />
                                        ))}
                                    </div>
                                    {/*<p className="sr-only">{reviews.average} out of 5 stars</p>*/}
                                </div>
                            </div>
                            {/* @ts-ignore*/}
                            <p className="text-gray-500 mt-6">
                                {/* @ts-ignore*/}
                                <div dangerouslySetInnerHTML={{__html: product["info"]}}/>
                            </p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                                <button onClick={() => {
                                    setOpen(true)
                                }}
                                        type="button"
                                        className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                                >
                                    Get Quote
                                </button>

                            </div>

                            <div className="border-t border-gray-200 mt-10 pt-10">
                                <h3 className="text-sm font-medium text-gray-900">ASSOCIATE PARTNER</h3>
                                <div className="mt-4 prose prose-sm text-gray-500">
                                    <ul role="list">
                                        {/* @ts-ignore*/}
                                        {
                                            // @ts-ignore
                                            product["partner"]
                                        }
                                        {/*{product.highlights.map((highlight) => (*/}
                                        {/*    <li key={highlight}>{highlight}</li>*/}
                                        {/*))}*/}
                                    </ul>
                                </div>
                            </div>

                            {/*<div className="border-t border-gray-200 mt-10 pt-10">*/}
                            {/*    <h3 className="text-sm font-medium text-gray-900">Information</h3>*/}
                            {/*    <p className="mt-4 text-sm text-gray-500">*/}
                            {/*        {license.summary}{' '}*/}
                            {/*        <a href={license.href}*/}
                            {/*           className="font-medium text-indigo-600 hover:text-indigo-500">*/}
                            {/*            Read full license*/}
                            {/*        </a>*/}
                            {/*    </p>*/}
                            {/*</div>*/}

                            <div className="border-t border-gray-200 mt-10 pt-10">
                                <h3 className="text-sm font-medium text-gray-900">Share</h3>
                                <ul role="list" className="flex items-center space-x-6 mt-4">
                                    <li>
                                        <a href="#"
                                           className="flex items-center justify-center w-6 h-6 text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">Share on Facebook</span>
                                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="flex items-center justify-center w-6 h-6 text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">Share on Instagram</span>
                                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor"
                                                 viewBox="0 0 24 24">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="flex items-center justify-center w-6 h-6 text-gray-400 hover:text-gray-500">
                                            <span className="sr-only">Share on Twitter</span>
                                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor"
                                                 viewBox="0 0 20 20">
                                                <path
                                                    d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-full max-w-2xl mx-auto mt-16 lg:max-w-none lg:mt-0 lg:col-span-4">
                            <Tab.Group as="div">
                                <div className="border-b border-gray-200">
                                    <Tab.List className="-mb-px flex space-x-8">


                                        <Tab
                                            className={({selected}) =>
                                                classNames(
                                                    selected
                                                        ? 'border-indigo-600 text-indigo-600'
                                                        : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                                                    'whitespace-nowrap py-6 border-b-2 font-medium text-sm'
                                                )
                                            }
                                        >
                                            Information
                                        </Tab>
                                        {
                                            faq.length > 0 ?
                                                <Tab
                                                    className={({selected}) =>
                                                        classNames(
                                                            selected
                                                                ? 'border-indigo-600 text-indigo-600'
                                                                : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                                                            'whitespace-nowrap py-6 border-b-2 font-medium text-sm'
                                                        )
                                                    }
                                                >
                                                    FAQ
                                                </Tab>
                                                : <></>
                                        }
                                    </Tab.List>
                                </div>
                                <Tab.Panels as={Fragment}>
                                    <Tab.Panel className="pt-10">
                                        <h3 className="sr-only">License</h3>

                                        <div
                                            className="prose prose-sm max-w-none text-gray-500"
                                            dangerouslySetInnerHTML={{__html: license.content}}
                                        />
                                    </Tab.Panel>

                                    {
                                        faq.length > 0 ?

                                            <Tab.Panel as="dl" className="text-sm text-gray-500">
                                                <h3 className="sr-only">Frequently Asked Questions</h3>

                                                {faq.map((faqs) => (
                                                    <Fragment key={faqs.question}>
                                                        <dt className="mt-10 font-medium text-gray-900">{faqs.question}</dt>
                                                        <dd className="mt-2 prose prose-sm max-w-none text-gray-500">
                                                            <p>{faqs.answer}</p>
                                                        </dd>
                                                    </Fragment>
                                                ))}
                                            </Tab.Panel>
                                            : <></>}

                                </Tab.Panels>
                            </Tab.Group>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
