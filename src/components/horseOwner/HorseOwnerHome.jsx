import "../../Styles/css/horseOwner.css";
import "../../Styles/css/userProfile.css";
import { Container, Row } from "react-bootstrap";
import OwnerProfile from "./OwnerProfile";
import HorseProfile from "./HorseProfile";
import HorseOwnerNavbar from "./HorseOwnerNavbar";
import Cover from "../../utils/Cover";
import HorseOwnerSubMenu from "./HorseOwnerSubMenu";


function HorseOwnerHome() {

    return (
        <Container fluid className='usersProfile' id='horseOwner'>
            <HorseOwnerNavbar />
            <Cover />
            <Row className='userProfileHeader'>
                <OwnerProfile />
                <HorseProfile />
            </Row>
            <HorseOwnerSubMenu />
        </Container>
    );
}

export default HorseOwnerHome;
