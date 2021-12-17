import React, { useState, useEffect } from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import { RiDeleteBack2Fill } from 'react-icons/ri'
import { VscAdd } from 'react-icons/vsc'

function StableSearchResult(props) {

    const initialState = {
        stable_name: "",
        "address.street_name": "",
        "address.city": "",
        "address.country": "",
    }

    const [searchResult, setSearchResult] = useState('')
    const [newStable, setNewStable] = useState(false)
    const [addStable, setAddStable] = useState(false)
    const [stables, setStables] = useState(null)
    const token = localStorage.getItem('token')
    const [stableInitial, setStableInitial] = useState(initialState)

    const handleStableSearch = async (e) => {
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

    // const handleStableDataFetch = asycn (e) => {
    //     try {
    //         const response = await fetch(`http://localhost:3001/stables/${searchResult}`)
    //     } catch (error) {
            
    //     }
    // } // need to create a backend application to create a stable

    const handleResult = (stable) => (e) => {
        setSearchResult(e.target.firstChild.data);
        props.stableValue(stable._id);
        setStables(null);
    }


    useEffect(() => {
        handleStableSearch()
    }, [])

    const something = stables && stables.stables.some(data => searchResult.length > 2 && data.stable_name.toLowerCase().includes(searchResult.toLowerCase()))

    useEffect(() => {
        console.log(something);
        setTimeout(() => {
            !something ? setAddStable(false) : setAddStable(true)
        }, 1000);

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
                        searchResult && <div
                            className='remove-search-value'
                        >

                            <span
                                className='remove-stable-button'
                                onClick={() => setSearchResult('')}
                            >
                                <RiDeleteBack2Fill /></span>
                        </div>
                    }
                </Form.Group>
            </Row>
            <Row className='stable-search-container'>
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
            {
                newStable &&
                <Row>
                    <Form.Group as={Col} md={5}>
                        <Form.Control
                            type="text"
                            placeholder="Street Name"
                            value={stableInitial["address.street_name"]}
                            onChange={(e) => setStableInitial({ ...stableInitial, "address.street_name": e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Control
                            type="text"
                            placeholder="City"
                            value={stableInitial["address.city"]}
                            onChange={(e) => setStableInitial({ ...stableInitial, "address.city": e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Control
                            type="text"
                            placeholder="Country"
                            value={stableInitial["address.country"]}
                            onChange={(e) => setStableInitial({ ...stableInitial, "address.country": e.target.value })}
                        />
                    </Form.Group>
                </Row>
            }
            {
                !addStable && searchResult.length > 3 &&
                <Row className='add-new-stable-container'>
                    <span onClick={() => setNewStable(true)} className='add-new-stable-icon' ><VscAdd /></span>
                    <span className='add-new-stable-button'>{newStable ? `Import new Stable` : `Add New Stable`}</span>
                </Row>
            }
        </>
    )
}

export default StableSearchResult
