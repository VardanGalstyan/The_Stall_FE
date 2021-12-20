import React from 'react'
import './styles/jumbotron.css'
import { Container } from 'react-bootstrap'

function Jumbotron() {
    return (
        <Container id='jumbotron'>
            <div className='jumbotron-main-content'>
                <div className='jumbotron-blob'>
                    <svg viewBox="0 0 200 200"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path fill="#FFCC56"
                            fillOpacity="0.48"
                            d="M45.3,-59.9C55.7,-54.7,59.3,-37.6,66.3,-20.5C73.2,-3.5,83.5,13.5,79.8,26.2C76.1,39,58.3,47.4,42.7,58.8C27.1,70.2,13.5,84.5,-2.6,88.1C-18.8,91.7,-37.5,84.6,-51.2,72.5C-64.8,60.5,-73.4,43.6,-79.6,25.6C-85.8,7.6,-89.6,-11.4,-81.2,-23C-72.7,-34.6,-52.1,-38.9,-36.5,-42.4C-20.9,-46,-10.5,-48.8,3.5,-53.5C17.4,-58.3,34.8,-65.1,45.3,-59.9Z"
                            transform="translate(100 100)"
                        />
                    </svg>
                </div>
            </div>
        </Container>
    )
}

export default Jumbotron
