import React from 'react'
import "./Skeleton.scss"

const Skeleton = ({count}) => {
    const COUNTER = count;

    const FeedSkeleton = () => (
       
        <div className="postSk">
            <div className="postImgSk"></div>
                <div className="postInfoSk">
                    <div className="postHead"></div>
                    <div className="postDetail">
                    <div className="postBrand"></div>
                    <div className="postPrice"></div>
                    </div>
                    {/* <div className="postAdd"></div> */}
               
            </div>
        </div>
     
    )
  return Array(COUNTER).fill(<FeedSkeleton/>)
    
}

export default Skeleton
