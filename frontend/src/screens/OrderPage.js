import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { getUserOrders } from '../actions/orderActions'
import Error from '../component/status/Error'
import Loading from '../component/status/Loading'

export default function OrderPage() {
  const dispatch = useDispatch()
  const orderState = useSelector(state => state.getUserOrderReducer)
  const { orders, error, loading } = orderState
  
  useEffect(() => {
    dispatch(getUserOrders())
  }, [])
  
  return (
    <div style={{ minHeight: '90.8vh' }}>
      {loading && (<Loading />)}
      {error && (<Error />)}
      {orders && orders.map(order => {
        return (
          <>
            <div className='my-3 border border-white w-75 mx-auto p-3 fs-6 mt-5'>
              <Row xs={1} md={4}>
                <Col>Name: {order.name}</Col>
                <Col>EmailID: {order.email}</Col>
                <Col>Total Amount: ₹{order.orderAmount}</Col>
                <Col>Mode of Payment: {order.mode_of_payment}</Col>
              </Row>
              <Row xs={1}>
                <Col>Delivery Address: {order.address}</Col>
              </Row>
              <Row xs={1} md={2}>
                <Col>TransactionID: {order.transactionid}</Col>
                <Col>OrderID: {order._id}</Col>
              </Row>
              <Row xs={1} md={4} className='mx-auto my-2 my-md-1'>
                {order.orderItems.map(item => {
                  return (
                    <>
                      <Col className='text-md-end'>Items: {item.name} [ {item.type} ]</Col>
                      <Col className='text-md-start'>{item.quantity} * {item.selectOption} = {item.price}</Col>
                    </>
                  )
                })}
              </Row>
            </div>
          </>
        )
      })}
    </div>
  )
}
