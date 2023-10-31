import React, { useReducer, useState } from 'react'
import "../Review/Review.scss";
import List from './List';
import { useEffect } from 'react';
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { v4 as uuidv4 } from 'uuid';



const todoReducer = (todos,action) => {
 switch (action.type) {
  case "ADD_TODO":
    return[
      ...todos,
      { id:uuidv4(),text: action.payload, completed:false},
    ]
    case "REMOVE_TODO":
      return todos.filter((item) => item.id !== action.payload)
      
  case "EDIT_TODO": 
  return todos.map((item) => item.id ===  action.payload.id ? {...item, text:action.payload.text} : item);
 
  default:
    break;
 }
}
const Review = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], () => {
    const localValue = JSON.parse(localStorage.getItem("TODOS"))
    return localValue ? localValue : []
  })
  const [review, setReview] = useState();
  const [isEditing, setIsEditing] = useState(null)

    const handleSubmit = (e) => { 
        e.preventDefault()
        if(isEditing){
          dispatch({type: "EDIT_TODO", payload: {id: isEditing.id, text:review}})
          setIsEditing(null)
          setReview('')
        }else{
          handleAdd()
        }
    }
    useEffect(() => {
        localStorage.setItem("TODOS", JSON.stringify(todos))
    }, [todos])

    const handleAdd = () => {
      if(!review){
        return null
      }
     dispatch({type:"ADD_TODO", payload:review})
      setReview('')
    }
    const removeItem = (id) => {
      dispatch({type:"REMOVE_TODO", payload:id})
    }
    const editItem = (id) => {
      setReview(id.text)
      setIsEditing(id)
    } 
  return (
    <>
      <div className="review">
        <div className="review-product container">
            <h2>Reviews</h2>
            <form className='review-form' onSubmit={handleSubmit}>
                <div className="form-control">
                    <input type="text" placeholder='Write Here...'  value={review} onChange={(e) => setReview(e.target.value)}/>
                    <button type='submit' className='submit-btn'>{isEditing ? "Update" : "Submit"}</button>
                </div>
            </form>
            <div className="review-list">
              {
                todos.length <= 0 && (
                  <h3>There's no review</h3>
                )
              }
             {
              todos.map((item) => {
                const { id,text} = item
                return(
                  <>
                  <div className="review-item">
                  <div className="review-content">
                  <p><span><RxAvatar/></span> {text}</p>
                  </div>
                  <div className="review-btn">
                    <button className='edit-review' onClick={() => editItem(item)}>
                    <AiFillEdit/>
                    </button>
                    <button className='delete-review' onClick={() => removeItem(id)}>
                    <MdDelete/>
                    </button>
                  </div>
                
                </div>
               <div className='divider'></div>
                </>

                )
              })
             }
            </div>
        </div>
      </div>
    </>
  )
}

export default Review
