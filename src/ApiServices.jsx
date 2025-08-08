export async  function GetApiData(url) {
try{
    const response = await fetch(url)
    const data = await response.json()
    return data

}catch (error){
    throw new Error("Error retrieving data from API")
}
}
