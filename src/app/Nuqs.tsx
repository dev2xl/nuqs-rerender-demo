"use client"
import React from 'react';
import {useQueryState} from "nuqs";

const Nuqs = () => {
    const [value, setValue] = useQueryState("nuqs", {
        defaultValue: "",
    })

    console.log("NUQS rendered")
    return (
        <div className="flex flex-col gap-10">
            <h1>Nuqs</h1>
            <button className="px-2 py-1 bg-slate-700 rounded-xl h-12 text-white" onClick={() => setValue(`${value}n`)}>Update with Nuqs</button>
        </div>
    );
};

export default Nuqs;