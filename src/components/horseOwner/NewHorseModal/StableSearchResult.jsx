import React, { useState, useEffect } from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import { RiDeleteBack2Fill } from 'react-icons/ri'


function StableSearchResult(props) {


    const [searchResult, setSearchResult] = useState('')
    const [stables, setStables] = useState(null)
    const token = localStorage.getItem('token')

    const handleStableSearch = async () => {
        try {
            const response = await fetch(`http://localhost:3001/stables`)
            if (response.ok) {
                const stables = await response.json()
                setStables(stables)
            } else {
                throw new Error('Something went wrong ...')
            }
        } catch (error) {
            console.log(error)
        }
    }


    const handleResult = (stable) => (e) => {
        setSearchResult(e.target.firstChild.data);
        props.stableValue(stable._id);
        setStables(null);
    }


    useEffect(() => {
        handleStableSearch()
    }, [searchResult])




    return (
        <>
            <Row>
                <Form.Group as={Col}>
                    <Form.Control
                        type="text"
                        placeholder="Stable Name"
                        value={searchResult}
                        onChange={(e) => setSearchResult(e.target.value)}
                    />
                    {
                        searchResult &&
                        <div
                            className='remove-search-value'
                        >
                            <span
                                className='remove-stable-button'
                                onClick={() => setSearchResult('')}
                            >
                                <RiDeleteBack2Fill />
                            </span>
                        </div>
                    }
                </Form.Group>
            </Row>
            <Row className='stable-search-container-absolute'>
                <div className='stable-search-result'>
                    {
                        stables && stables.stables.filter(data => searchResult.length > 2 && data.stable_name.toLowerCase().includes(searchResult.toLowerCase().toString())).map((stable, index) => (

                            <div
                                className='stable-search-result-item'
                                key={index}
                                onClick={(e) => handleResult(stable)(e)}
                            >
                                {stable.stable_name}
                            </div>

                        ))
                    }
                </div>
            </Row>

        </>
    )
}

export default StableSearchResult
