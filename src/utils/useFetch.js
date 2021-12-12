import { useState, useEffect } from 'react'

const useFetch = (url, token) => {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw Error('Could not fetch the data')
                }
                return response.json()
            })
            .then(data => {
                setData(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err => {
                setIsPending(false)
                setError(err.message)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])

    return { data, isPending, error }
}

export default useFetch