import "../../Styles/css/horseOwner.css";
import "../../Styles/css/userProfile.css";
import { Container, Row, Col } from "react-bootstrap";
import OwnerProfile from "./OwnerProfile";
import HorseProfile from "./HorseProfile";
import HorseOwnerNavbar from "./HorseOwnerNavbar";

function HorseOwnerHome() {

    return (
        <Container className='usersProfile' id='horseOwner'>
            <HorseOwnerNavbar />
            <Row className="main-header">
                <Col className="cover">
                    <div>
                        <img
                            src="https://picsum.photos/1000/400"
                            alt="profile background"
                        />
                    </div>
                </Col>
            </Row>
            <Row className='userProfileHeader'>
                <OwnerProfile />
                <HorseProfile />
            </Row>
        </Container>
    );
}

export default HorseOwnerHome;
