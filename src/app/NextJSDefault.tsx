"use client"
import React, {useRef} from 'react';
import {usePathname, useSearchParams, useRouter} from "next/navigation";

const NextJSDefault = () => {

    const pathname = usePathname();
    const { replace } = useRouter();
    const searchParams = useSearchParams();

    const value = React.useMemo(() => {
        return searchParams.get("nextjs") || "";
    }, [searchParams]);

    function changeValue() {
        const params = new URLSearchParams(searchParams);
        params.set("nextjs", `${value}a`);
        replace(`${pathname}?${params.toString()}`);
    }

    console.log('NEXTJS rendered')

    return (
        <div className="flex flex-col gap-10">
            <h1>Default NextJS Hook</h1>
            <button className="px-2 py-1 bg-slate-700 rounded-xl h-12 text-white" onClick={changeValue}>Update with nextjs hooks</button>
        </div>
    );
};

export default NextJSDefault;