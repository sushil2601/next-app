"use client"

//reset --> is used to recovered from error -> only used in client
//To handle server side error recovery we used useRouter,startTransition

import { useRouter } from "next/navigation";
import { startTransition } from "react";

const Error = ({error,reset}) =>{

    const reload = () =>{
        startTransition(()=>{
            routerServerGlobal.refresh();
            reset();
        })
    }

    return <div>
        <p>{error.message}</p>
        <button onClick={()=>reset()}>Try again</button>
    </div>

}

export default Error;