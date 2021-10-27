import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'


function RiderNavbar() {

    const history = useHistory()
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        history.push('/loginOption')
    }


    return (
        <div>
            <Navbar collapseOnSelect expand="sm">
                <Navbar.Brand href="#home">THE STABLE</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>
                        <Link >Something</Link>
                        <Link >Pricing</Link>
                        <Link >More deets</Link>
                        <div eventKey={2} onClick={logout}> Log Out</div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default RiderNavbar
