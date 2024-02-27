import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { logoutUserAction } from '../actions/userActions';

export default function NavBar() {
  const cartState = useSelector(state => state.cartReducers)

  const loginUserState = useSelector(state => state.loginUserReducers)
  const { currentUser } = loginUserState

  const dispatch = useDispatch()
  return (
    <>
      <div className='sticky-top'>
        <Navbar bg="dark" variant="dark" className='d-flex justify-content-between navtextsize'>
          <LinkContainer to="/"><Navbar.Brand>SnackPoint</Navbar.Brand></LinkContainer>
          <Nav style={{ fontSize: "1rem" }}>
            {currentUser ? (<><Navbar.Toggle aria-controls="navbar-dark-example" />
              <Navbar.Collapse id="navbar-dark-example">
                <Nav>
                  <NavDropdown
                    id="nav-dropdown-dark-example"
                    title={`Welcome, ${currentUser.name}`}
                    menuVariant="dark"
                  >
                    <LinkContainer to="/Order"><NavDropdown.Item>Order</NavDropdown.Item></LinkContainer>
                    {/* <NavDropdown.Divider /> */}
                    <NavDropdown.Item onClick={() => { dispatch(logoutUserAction()) }}>Logout</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse></>)

              : (<><LinkContainer to="/Login"><Nav.Link>Login</Nav.Link></LinkContainer><LinkContainer to="/SignUp"><Nav.Link>SignUp</Nav.Link></LinkContainer></>)}

            {currentUser ? (<>
              <LinkContainer to="/Cart"><Nav.Link>Cart <sup>{cartState.cartItems.length === 0 ? "" : cartState.cartItems.length}</sup></Nav.Link></LinkContainer>
            </>) : ""}
            {/* <LinkContainer to="/Cart"><Nav.Link>Cart <sup>{cartState.cartItems.length === 0 ? "" : cartState.cartItems.length}</sup></Nav.Link></LinkContainer> */}
          </Nav>
        </Navbar>
        <div className='navshadow'></div>
      </div>
    </>
  )
}