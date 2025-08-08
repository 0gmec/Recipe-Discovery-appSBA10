
import { GetApiData } from "../ApiServices"
import { useFetchData } from "./Utils/useFetchData"



export default function ApiFetcher() {


    // custom hook
    const { data, loading, error } = useFetchData("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")


    if (loading) {
        return (
            <p>loading...</p>
        )
    }

    if (error) {
        return (
            <p>Error: {error.message}</p>
        )
    }

    return (
        <div>
            <ul>
        {data.map(data=> {data.meal})}
            </ul>
        

        </div>
    )
}