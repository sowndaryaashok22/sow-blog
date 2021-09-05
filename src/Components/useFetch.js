 import { useState, useEffect } from 'react';


  

const useFetch =  (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState('yaso')

    useEffect(async()=>{
        const fetchData = await fetch(url)
        const result = await fetchData.json();
        console.log('result is', result)
        if(!result || result.length == 0){

            setIsPending(true)
            setError('message')
            throw Error('could not fetch the data from that resource')
        }

        setData(result)
        setIsPending(false)
        setError(null)


        }, [url])

        // console.log('data is,',data)
        // console.log('ispending is,',isPending)
        // console.log('error is,',error)
        //if we use usefetch as hook we dont need to import d state variables if we use return
        return {data, isPending, error}
}
export default useFetch