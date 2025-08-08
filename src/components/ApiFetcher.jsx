import { useState, useEffect } from "react"
import { GetApiData } from "../ApiServices"
import { useFetchData } from "./Utils/useFetchData"



export default function ApiFetcher() {
    const [apiData, setApiData]= useState({loading:true, error:null, data:null})

    // fetching api

    useEffect(()=> {
        const fetchapiData = "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
        GetApiData(fetchapiData)
        .then((result)=> {
           setApiData ({loading:false, error:null, data:result })
        })
        .catch((error)=>{
            ({loading: false, error: error, data:null})
        })

    }, [])

    if (apiData.loading) {
        return(
            <p>loading...</p>
        )
    }

    if (apiData.error) {
        return (
            <p>Error: {error.message}</p>
        )
    }

    return (
        <div>
            
           
            
        </div>
    )
}