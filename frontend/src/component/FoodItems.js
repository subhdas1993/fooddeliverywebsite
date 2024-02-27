import React, { useRef, useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { addToCartAction } from '../actions/cartActions';

export default function FoodItems(props) {
  const foodItems = props.data;
  const foodoptions = props.options;
  const [qty, setQty] = useState(1);
  const [type, setType] = useState("");
  const priceRef = useRef();

  const loginUserState = useSelector(state => state.loginUserReducers)
  const { currentUser } = loginUserState

  const handleQty = (e) => { setQty(e.target.value) }
  const handleType = (e) => { setType(e.target.value) }

  useEffect(() => {
    setType(priceRef.current.value)
  }, [])

  let finalPrice = qty * parseInt(foodoptions[type]);

  const dispatch = useDispatch()
  function addToCart(){
    dispatch(addToCartAction(foodItems,qty,foodoptions,type))
  }
  return (
    <>
      <Col>
        <Card border="light" bg="dark" variant="dark">
          <Card.Img variant="top" src={foodItems.img} style={{ width: "100%", aspectRatio: "16/9" }} />
          <Card.Body>
            <Card.Title>{foodItems.name}</Card.Title>
            <Card.Text>
              {foodItems.description}
            </Card.Text>
            <div className='d-flex justify-content-between'>
              <div className='d-flex flex-column justify-content-between col-5'>
                <label htmlFor="options" className="form-label">Options</label>
                <select className="form-select" onChange={handleType} ref={priceRef}>
                  {Object.keys(foodoptions).map((value) => {
                    return <option key={value} value={value}>{value}</option>
                  })}
                </select>
              </div>
              <div className='d-flex flex-column justify-content-between col-5'>
                <label htmlFor="quantity" className="form-label" style={{ textAlign: "right" }}>Quantity</label>
                <select className="form-select" onChange={handleQty}>
                  {Array.from(Array(10), (e, i) => {
                    return (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>)
                  })}
                </select>
              </div>
            </div>

            {currentUser ? (
              <div className='d-flex justify-content-between mt-3'>
              <Card.Text>
                Price: ₹{finalPrice}/-
              </Card.Text>
              <Button variant="light" onClick={addToCart}>Add to Cart</Button>
            </div>
            ):(<h5 className='text-center text-warning mt-3'>Please login and place the order</h5>)}
            
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}
