import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useSelector, useDispatch } from 'react-redux'
import { deleteFromCart } from '../actions/cartActions'
import Checkout from '../component/Checkout'

export default function CartScreen() {
  const cartState = useSelector(state => state.cartReducers)
  const cartItems = cartState.cartItems
  const dispatch = useDispatch()
  let alltotal = cartItems.reduce((total, item)=>total + item.price, 0)
  return (
    <>
      <div style={{minHeight:"90.8vh"}}>
        <Row xs={1} lg={2} className='col-11 col-lg-9 g-3 m-auto'>
          <Col>
            <h2>List of Items Ordered</h2>
            <h2>{cartItems.length}</h2>
            {cartItems.map(items => {
              return (
                <>
                <hr/>
                <Row xs={3} className='g-3 fs-4 my-3'>
                  <Col xs={8}>
                    <Row xs={1}>
                      <Col>{items.name}[{items.type}]</Col>
                      <Col>Price: {items.quantity} * ₹{items.selectOption} = ₹{items.price}</Col>
                    </Row>
                  </Col>
                  <Col xs={3} style={{textAlign:"right"}}><img src={items.img} alt={items.img} style={{width:'50%', aspectRatio: '1/1', borderRadius:'50%'}}/></Col>
                  <Col xs={1} style={{textAlign:"left",padding:'1vmax 0'}}><button className='btncolor text-danger' onClick={()=>dispatch(deleteFromCart(items))}><i className="bi bi-trash-fill"></i></button></Col>
                </Row>
                </>
              )
            })}
          </Col>
          <Col style={{ textAlign: "right" }}>
            <h2>Total Price: ₹{alltotal}</h2>
            <Checkout alltotal = {alltotal} />
            {/* <button className='btn btn-success'>Pay Now</button> */}
          </Col>
        </Row>
      </div>
    </>
  )
}
