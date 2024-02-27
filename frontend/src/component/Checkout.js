import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { placeOrder } from '../actions/orderActions'
import Error from './status/Error'
import Loading from './status/Loading'
import Success from './status/Success'

export default function Checkout(props) {
  const dispatch = useDispatch()
  const orderState = useSelector(state => state.placeOrderReducers)
  const { loading, success, error } = orderState
  return (
    <>
      {loading && (<Loading />)}
      {success && (<Success success='Your order is confirmed' />)}
      {error && (<Error error='Your order is not confirmed due to technical issue, try again after sometime' />)}
      <button className='btn btn-danger' onClick={() => { dispatch(placeOrder(props.alltotal)) }}>Pay Now</button>
    </>
  )
}
