import React from 'react'
import SingleCard from './SingleCard/SingleCard'
import { Container } from 'react-bootstrap'

function CardContainer() {
    return (
        <Container id='card-container'>
            <SingleCard />
            <SingleCard />
            <SingleCard />
            <SingleCard />
            <SingleCard />
            <SingleCard />

        </Container>
    )
}

export default CardContainer
