import { useEffect, useState } from 'react'
// import { RAPID_API_KEY } from '@env'
import axios from 'axios'

const useFetch = (endpoint, query) => {
    const [data, setdata] = useState([])
    const [isLoading, setisLoading] = useState(false)
    const [error, seterror] = useState(null)

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'x-rapidapi-key': '03119db087msh7a05b9315072742p1a2f85jsn1517786eff44',
            'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query },
    };

    const fetchData = async () => {
        setisLoading(true);

        try {
            const response = await axios.request(options)
            setdata(response.data.data)
            setisLoading(false)
        } catch (error) {
            seterror(error)
            alert("There is an error")
            console.log(error)
        } finally {
            setisLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const refetch = () => {
        setisLoading(true);
        fetchData()
    }

    return { data, isLoading, error, refetch }
}

export default useFetch