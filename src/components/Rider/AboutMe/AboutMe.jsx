import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import MainReview from '../Reviews/MainReview'
import SingleUserProperty from './SingleUserProperty'


function AboutMe() {

    const [isShow, setIsShow] = useState(false)
    const showTheText = !isShow ? "Show More..." : "Show less..."

    return (
        <Row className='aboutMe'>
            <Col md={6} sm={11} xs={11} className='aboutMainProperty'>
                <div className='aboutHeaders'>About Anna</div>
                <div className='aboutProperties'>
                    <SingleUserProperty url='https://cdn-icons-png.flaticon.com/512/71/71482.png' keys={"Style"} value={"Western"} />
                    <SingleUserProperty url='https://icon-library.com/images/experiences-icon/experiences-icon-1.jpg' keys={"Experience"} value={"Advanced"} />
                    <SingleUserProperty url='https://www.pngitem.com/pimgs/m/526-5268839_icon-smart-mobility-png-transparent-png.png' keys={"Mobility"} value={"Yes"} />
                    <SingleUserProperty url='https://icon-library.com/images/age-icon-png/age-icon-png-13.jpg' keys={"Age"} value={"34"} />
                    <SingleUserProperty url='https://www.pngitem.com/pimgs/m/287-2875093_plant-height-icon-png-transparent-png.png' keys={"Height"} value={"154"} />
                    <SingleUserProperty url='https://www.pngkit.com/png/detail/279-2792199_body-weight-diet-lose-comments-lose-weight-icon.png' keys={"Weight"} value={"61 kg"} />
                </div>
                <div className='aboutMyStory'>
                    <div>My Story</div>
                    <div className={(isShow ? 'showMore' : 'showLess')}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate dolore quasi veritatis quia explicabo eveniet nobis fugiat magni aspernatur fugit aliquid veniam, libero ab cupiditate? Ipsa possimus nulla, consequatur iusto sequi aspernatur nesciunt porro ipsum harum quo voluptatibus. Ad excepturi architecto debitis numquam delectus est qui tempora rerum quas laudantium sed vel laboriosam accusamus voluptatum nemo similique non a voluptate totam repellat, earum optio sunt. Adipisci similique maxime ut maiores. Eius sed corporis quisquam. Nisi, possimus. Ipsam consequuntur corporis repellendus eius possimus repudiandae quis molestias eveniet, debitis qui illo fugiat aut blanditiis, nesciunt praesentium eligendi harum, magni perspiciatis ea cum.</div>
                    <div onClick={() => setIsShow(!isShow)}>{showTheText}</div>
                </div>
            </Col >
            <MainReview />
        </Row>
    )
}

export default AboutMe
