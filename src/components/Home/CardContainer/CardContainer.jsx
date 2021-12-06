import React from 'react'
import { Container } from 'react-bootstrap'
import SingleHorseCard from '../../Cards/HorseCards/SingleHorseCard'
import StableCards from '../../Cards/StableCards/StableCards'

function CardContainer() {
    return (
        <Container id='card-container'>
            <SingleHorseCard />
            <StableCards />
        </Container>
    )
}

export default CardContainer
