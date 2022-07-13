import { useEffect, useState } from "react";

const useFetch = (request) => {
   
    const[data,setdata]=useState(null);
    const[pending,setpending]=useState(true);
    const[error,seterror]=useState(null)
    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:5000/tasks")
            .then((res)=>{
                if (res.ok===false) {
                    throw Error("data is not present")
                }return res.json()})
            .then((data)=>{setdata(data);setpending(false)})
            .catch((err)=>{seterror(err.message);setpending(false)})
        },2000)
    },[])
    return ( {data,pending,error} );
}
 
export default useFetch;