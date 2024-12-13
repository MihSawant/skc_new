"use client"
import clsx from "clsx";
import Image from "next/image";
import DashboardHeader from "@/components/Dashboard/header";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {log} from "node:util";
import { toast } from "react-toastify";

export default function AboutImagesUpdatePage(){

    const [aboutUs
        , setaboutUs

    ] = useState([]);
   // const [url, setUrl] = useState('');

    useEffect(() => {
        fetchLeaders();
    }, []);

    function fetchLeaders(){
            axios.get("/api/aboutImages/all")
                .then(resp => {
                    console.log("resp", resp);
                    
                    setaboutUs
                    (resp.data);
                })
                .catch(err => console.error(err));
    }

    // function updateChangeName(toUpdate: string, leader : object){
    //     return {...leader, name: toUpdate}
    // }

    // function updateChangeRole(toUpdate: string, leader: object){
    //     return {... leader, role: toUpdate};
    // }

    function updateChangeImg(toUpdate: string, leader: object){
        console.log(leader, toUpdate)
        return {...leader, imageUrl: toUpdate}

    }

     function changeImage(event:any){
        const form = new FormData();
        const file = event.target.files[0];
        form.append("leader", file);
        const options = {
            method: 'POST',
            url: '/api/dashboard/aboutImages/addimage',
            headers: {
                'Content-Type': 'multipart/form-data;',
            },
            data: form
        };

         return axios.request(options).then(resp => {
             const url = "/assets/img/about/"+resp.data.file;
             return "/assets/img/about/"+resp.data.file;
        })
            .catch(err => console.error(err));
    }

    async function updateLeader(aboutUsImage: object){

        const data =  {
            imageUrl: aboutUsImage.imageUrl
        }

        console.log(aboutUsImage);
        

        console.log(data);

        axios.put("/api/dashboard/aboutImages/"+aboutUsImage._id, data, {
            headers: {'Content-Type':'application/json'}
        })
            .then(resp => {
                console.log(resp.data);
            })
            .catch(err => console.error(err));
    }


    return(
        <>
            <DashboardHeader title={"About Images"}/>

            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-2">
                {aboutUs
                .map((e, i) => {
                    return (
                        <div key={i}>
                            <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                                <div
                                    className={clsx(
                                        'absolute top-0 left-0 right-4 bottom-6 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                                        [
                                            'border-blue-300',
                                            'border-indigo-300',
                                            'border-sky-300',
                                        ][i % 3]
                                    )}
                                />
                                <div
                                    className="absolute inset-0 bg-indigo-50"
                                    style={{clipPath: `url(#${e._id}-${i % 3})`}}
                                >
                                    <Image
                                        className="transition duration-300 group-hover:scale-110 object-scale-down"
                                        src={e.imageUrl}
                                        alt=""
                                        layout="fill"
                                        objectFit="auto"
                                        priority
                                        sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                                    />
                                </div>
                            </div>
                            {/*<h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">*/}
                            {/*    {e.name}*/}
                            {/*</h3>*/}
                            {/* <div className="mt-2">
                                <input
                                    type="text"
                                    onChange={event => {

                                       const updatedLeaders = aboutUs
                                       .map(p => {
                                            return e._id === p._id ?
                                                updateChangeName(event.target.value, p)
                                                : p
                                        })

                                        setaboutUs
                                        (updatedLeaders);
                                    }
                                }
                                    value={
                                        e.name
                                    }
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Leader Name"
                                />
                            </div> */}
                            {/* <div className="mt-2">
                                <input
                                    type="text"
                                    value={
                                       e.role
                                    }
                                    onChange={event => {

                                        const updatedLeaders = aboutUs
                                        .map(p => {
                                            return e._id === p._id ?
                                                updateChangeRole(event.target.value, p)
                                                : p
                                        })

                                        setaboutUs
                                        (updatedLeaders);
                                    }
                                    }
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="Leader Role"
                                />
                            </div> */}
                            <button
                                onClick={async(event) => {
                                    updateLeader(e);
                                    await toast.success("Image Upload is successfull");
                                    // fetchLeaders();
                                }
                                }
                                type="button"
                                className="rounded-md bg-indigo-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Update
                            </button>
                            <input
                                type="file"
                                onInput={async event => {
                                    const url = await changeImage(event);
                                    const updatedLeaders = aboutUs
                                    .map(p => {
                                        return e._id === p._id ?
                                             updateChangeImg(url, p)
                                            : p
                                    })

                                    setaboutUs
                                    (updatedLeaders);
                                 }

                            }
                            />

                        </div>
                    )
                })
                }
            </div>

        </>
    )
}