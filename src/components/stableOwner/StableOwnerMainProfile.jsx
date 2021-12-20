import React, { useState, useEffect } from 'react'
import Feed from '../Navbar/Feed'
import ProfileHeader from '../../reusables/ProfileHeader/ProfileHeader.jsx'
import UserProfile from '../../reusables/UserProfile/UserProfile.jsx'
import { Col, Container } from 'react-bootstrap'
import './style/soStyle.css'
import { IoAddSharp } from 'react-icons/io5'
import StableOwnerModal from './StableOwnerModal'
import AboutUser from '../../reusables/AboutUser/AboutUser.jsx'
import StableCards from '../Cards/StableCards/StableCards.jsx'
import { useParams } from 'react-router-dom'


function StableOwnerMainProfile() {

    const [modalShow, setModalShow] = useState(false);
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)
    const token = localStorage.getItem('token')
    const { id } = useParams()
 

    const handleFetch = async () => {

        try {
            setIsPending(true)
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}stableowner/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            if (response.ok) {
                const data = await response.json()
                setData(data)
                setIsPending(false)
            } else {
                setError(true)
                throw new Error('Something went wrong')
            }
        } catch (error) {
            setError(true)
            setIsPending(false)
            console.log(error)
        }
    }

    useEffect(() => {
        handleFetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])




    const validateUser = data && data._id === id
    const name = data && `${data.first_name} ${data.surname}`

    return (
        <div className='container-holder'>
            {isPending ? <div className='loader'></div> :
                <>
                    <Feed />
                    <ProfileHeader
                        image={data && data.avatar}
                        name={name}
                    />
                    {
                        data && data.stable.length <= 0 ?
                            <Col className='profile-body-properties-empty' >
                                <div className='add-new-stable'>
                                    <span className='welcome-note'>Welcome to the Stable {data.first_name}</span>
                                    <div className='add-stable'>
                                        Create a new stable
                                        <span onClick={() => setModalShow(true)}><IoAddSharp /></span>
                                    </div>
                                </div>
                            </Col>
                            :
                            <Container className='profile-body'>
                                <UserProfile
                                    data={data && data}
                                    loading={isPending}
                                    location={data && data.stable[0].location}
                                    contacts={data && data.stable[0].contacts}
                                    avatar={data && data.stable[0].avatar}
                                />
                                <Col className='profile-body-properties'>
                                    <AboutUser
                                        content={data && data.description}
                                        loading={isPending}
                                        isValid={validateUser}
                                        handlefetch={handleFetch}
                                    />
                                    <div className='profile-container'>
                                        <div className='profile-container-title'>
                                            <span>Stables</span>
                                        </div>
                                        <div className='profile-container-scrollable'>
                                            {data && data.stable.map(stable =>
                                                <StableCards
                                                    key={stable.id}
                                                    stable={stable}
                                                />
                                            )}
                                        </div>
                                    </div>
                                </Col>
                            </Container>
                    }
                    <StableOwnerModal
                        show={modalShow}
                        onHide={() => { setModalShow(false) }}
                    />
                </>
            }
        </div>
    )
}

export default StableOwnerMainProfile
