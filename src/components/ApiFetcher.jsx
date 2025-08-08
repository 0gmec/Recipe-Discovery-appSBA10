import { useState, useEffect } from "react"
import { GetApiData } from "../ApiServices"



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
            (error)
        })

    }, [])

    if (apiData.loading) {
        return(
            <p>loading...</p>
        )
    }

    return (
        <div>
            
            {apiData.error && <p>Error: {apiData.error}</p>}
            
        </div>
    )
}