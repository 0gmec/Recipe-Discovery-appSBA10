
import {useState} from 'react'


export default function useLocalStorage(key, initialValue) {
const [storedData, setStoredData] = useState(()=> {
    const item = localStorage.getItem(key)
    const data = item ? JSON.parse(item): initialValue
    return initialValue
})
const setData = (data) => {
    localStorage.setItem(key,JSON.stringify(data))
    
}
return [storedData, setStoredData]
}