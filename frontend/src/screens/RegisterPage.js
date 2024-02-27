import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUserActions } from '../actions/userActions';
import Loading from '../component/status/Loading'
import Success from '../component/status/Success'
import Error from '../component/status/Error';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [password, setPassword] = useState("")
  const [cpassword, setCPassword] = useState("")
  const registerState = useSelector(state=>state.registerUserReducers)
  const {error, loading, success} = registerState

  const dispatch = useDispatch()
  function register(){
    if(password !== cpassword){
      alert("Password and Confirm Password should be same")
    }
    else{
      const user={
        name,
        email,
        password,
        address
      }
      console.log(user)
      dispatch(registerUserActions(user))
    }
  }

  function clearall(){
    setName('')
    setEmail('')
    setPassword('')
    setCPassword('')
    setAddress('')
  }
  return (
    <>
    <div style={{minHeight:'90.8vh', paddingTop:'7vmax'}}>

    <Form className='w-50 m-auto'>
      {loading && (<Loading/>)}
      {success && (<Success success='Successfully Registered'/>)}
      {error && (<Error error='Email already registered'/>)}
    <h2 className='py-2 text-center'>Registration</h2>
    <Form.Group className="mb-3" controlId="formBasicName">
        {/* <Form.Label>Name</Form.Label> */}
        <Form.Control required type="text" placeholder="Enter Your Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* <Form.Label>Email address</Form.Label> */}
        <Form.Control required type="email" placeholder="Enter Your email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        {/* <Form.Label>Name</Form.Label> */}
        <Form.Control required type="text" placeholder="Enter Your Delivery Address" value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        {/* <Form.Label>Password</Form.Label> */}
        <Form.Control required type="password" placeholder="Enter the Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        {/* <Form.Label>Confirm Password</Form.Label> */}
        <Form.Control required type="password" placeholder="Enter the Same Password Again" value={cpassword} onChange={(e)=>{setCPassword(e.target.value)}}/>
      </Form.Group>

      <Form.Group className='d-flex justify-content-around w-100'>
      <Button variant="success" className='px-5' onClick={register}>
        Submit
      </Button>
      <Button variant="danger" className='px-5' onClick={clearall}>
        Clear
      </Button>
      </Form.Group>
      <center className='my-3'>
      <Link to='/Login' className ='anchorstyling'>ALREADY HAVE ONE, CLICK HERE TO LOGIN!!!!</Link>
      </center>
    </Form>
    </div>
    </>
  )
}