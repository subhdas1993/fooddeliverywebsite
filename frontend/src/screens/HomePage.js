import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FoodItems from '../component/FoodItems'
import { getAllFoodItems } from '../actions/fooditemsActions'
import { getAllFoodCategories } from '../actions/foodcategoriesActions'
import Row from 'react-bootstrap/Row'
import Loading from '../component/status/Loading'
import Error from '../component/status/Error'

export default function HomePage() {
  const fooditemState = useSelector(state => state.getAllFoodItemsReducer)
  const foodcategoryState = useSelector(state => state.getAllFoodCategoryReducer)

  const { fooditems, error, loading } = fooditemState
  const { foodcategories, error2, loading2 } = foodcategoryState
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFoodItems())
    dispatch(getAllFoodCategories())
  }, [])

  return (
    <>
    <div className='col-12 col-md-10 m-auto'>
      {loading && loading2 ? (<Loading/>)
        : error && error2
          ? (<Error error='Something went wrong'/>) :
          (
            foodcategories.map((category)=>{
              return (
                <>
                <div key={category._id} className="fs-3 my-3">{category.CategoryName}</div>
                <hr />
                {
                  <Row xs={1} md={2} xl={3} className="g-3">
                  {fooditems.filter((itemcategorydata)=>(itemcategorydata.CategoryName === category.CategoryName)).map((fooditemdata, idx) => {
                    return <FoodItems data={fooditemdata} options={fooditemdata.options[0]}/>
                  })}
                </Row>
                }
                </>
              )
            })
            
          )

      }
      </div>
    </>
  )
}