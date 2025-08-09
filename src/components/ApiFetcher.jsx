
import { GetApiData } from "../ApiServices"
import { useFetchData } from "./Utils/useFetchData"



export default function ApiFetcher() {


    // custom hook
    const { data, loading, error } = useFetchData("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")

    console.log("Fetched data:", JSON.stringify(data))

    if (loading) {
        return (
            <p>loading...</p>
        )
    }

    if (error) {
        return (
            <p>Error: {error}</p>
        )
    }

    return (
        <div>
            <h3>Meals</h3>
            <ul style={{listStyle:'none', padding: 8, borderBottom: '1px solid #eee'}}>


                {data.meals.map((meal) => (
                    <li key={meal.idMeal}>
                        <div>
                            {meal.strMeal}
                        </div>
                        <div>
                            {meal.strInstructions}
                        </div>
                    </li>

                ))}
            </ul >
        </div >
    )
}