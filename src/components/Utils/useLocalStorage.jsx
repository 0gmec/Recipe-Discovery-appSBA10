import { initial } from 'lodash'
import {useState} from 'react'
import { data } from 'react-router-dom'

export default function useLocalStorage(key, data) {
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