import { useState, useEffect } from 'react'

export function useFetchData(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        if (!url) return

        const controller = new AbortController()
        setData(null)
        setLoading(true)
        setError(null)

        const fetchData = async () => {
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error(error)
                }
                const result = await response.json()
                setData(result)
            } catch (error) {
                if (error.name !== 'AbortError') {
                    setError(error)
                }
            } finally {
                setLoading(false)
            }
        }
        fetchData()

        return () => {
            controller.abort()
        }
    }, [url])
    return { data, loading, error }


}