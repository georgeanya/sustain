import {useEffect, useState} from 'react';
const useFetch = (url: string) => {
    const [data,setData] =useState<Array<any>>([])
    const [error,setError] =useState() as any
    const [loading,setLoading] =useState(true)
    
    useEffect(() => {
        const fetchData = async ()=>{
            setLoading(true)
            try {
                const res = await fetch(url)
                const json = await res.json()
                setData(json.data)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
        fetchData()
      
    }, [url])
    

  return {loading, error, data}
}

export default useFetch