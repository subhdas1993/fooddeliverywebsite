import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserActions } from '../actions/userActions';
import Loading from '../component/status/Loading'
import Error from '../component/status/Error';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const loginState = useSelector(state=>state.loginUserReducers)
  const {loading, error} = loginState
  const dispatch = useDispatch()

  useEffect(()=>{
    if(localStorage.getItem('currentuser'))
    {
      window.location.href="/"
    }
  })
  function loginuser(){
    const user = {email,password}
    dispatch(loginUserActions(user))
  }
  return (
    <>
    <div style={{minHeight:'90.8vh', paddingTop:'12vmax'}}>

    <Form className='w-50 m-auto'>
    {loading && (<Loading/>)}
      {error && (<Error error='Please enter the correct EmailID and Password'/>)}
    <h2 className='py-2 text-center'>Login</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* <Form.Label>Email address</Form.Label> */}
        <Form.Control type="email" placeholder="Enter the email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        {/* <Form.Label>Password</Form.Label> */}
        <Form.Control type="password" placeholder="Enter the Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      </Form.Group>

      <Form.Group className='d-flex justify-content-around w-100'>
      <Button variant="success" className='px-5' onClick={loginuser}>
        Login
      </Button>
      </Form.Group>
    </Form>
    <center className='my-3'>
      <Link to='/SignUp' className ='anchorstyling'>DO NOT HAVE ANY ACCOUNT, CLICK HERE TO REGISTER!!!!</Link>
      </center>
    </div>
    </>
  )
}
