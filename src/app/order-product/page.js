"use client"

import { useRouter } from "next/navigation";
const OrderProduct = () =>{

    const router = useRouter();

    const handleClick = () =>{
        console.log('order placed')
        router.push('/')
    }

    return(
        <>
            <h1>Order product</h1>
            <button onClick={handleClick}>Place order</button>
        </>
    )
}

export default OrderProduct;