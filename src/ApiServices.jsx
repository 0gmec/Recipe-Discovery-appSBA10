export async  function getApiData(url) {
try{
    const response = await fetch(url)
    const data = await response.json()
    return data

}catch (error){
    throw new Error("Error retreiving data from API")
}
}
