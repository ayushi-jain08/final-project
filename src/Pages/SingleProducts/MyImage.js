import React, { useState } from 'react'

const MyImage = ({imgs =[{url: ""}]}) => {
    const [mainImage, setMainImage] = useState(imgs[0])
  return (
    <>
       <div className="img-wrapper">
        <div className="img-container">
            {
                imgs.map((curElem, index) => {
                    return (
                        <figure>
                            <img src={curElem.url} alt={curElem.filename} key={index} className='img-box' onClick={() => setMainImage(curElem)} />
                        </figure>
                    )
                })
            }
        </div>
        <div className="main-img">
            <img src={mainImage.url} alt={mainImage.filename}  />
        </div>
      </div>
    </>
  )
}

export default MyImage
