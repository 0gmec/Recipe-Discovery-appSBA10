import { useState, useEffect } from "react"
import { getApiData } from "../ApiServices"



export default function ApiFetcher() {
    const [apiData, setApiData]= useState({loading:true, error:null, data:null})

    // fetching api

    useEffect(()=> {
        const fetchapiData = "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
        getApiData(fetchapiData)
        .then((result)=> {
           setApiData ({loading:false, error:null, data:result })
        })

    }, [])
}