"use client"

import { useEffect, useState } from "react";

interface ClientOnlyProp{
    children:React.ReactNode;
}


const ClientOnly:React.FC<ClientOnlyProp> =  ({
    children
}) => {

    const [hasMounted,sethasMounted] = useState(false)

    useEffect(()=>{
        sethasMounted(true)
    },[])

    if(!hasMounted){
        return null
    }

  return (
    <> 
    {children}
    </>

)
}

export default ClientOnly 