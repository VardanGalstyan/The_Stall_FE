import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../utils/useFetch'

function Stable() {

    const { data } = useFetch("http://localhost:3001/stables")
    const { id } = useParams()


    return (
        <div>
            {data && data.filter(filteredStabel => id === filteredStabel._id).map(stable => {
                return (
                    <h1 key={stable._id} style={{ color: 'white' }}>Welcome to {stable.stable_name} Stable</h1>
                )
            })}
            <button>Add a horse</button>
        </div>
    )
}

export default Stable
