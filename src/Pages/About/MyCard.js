import React, {useState, useEffect} from 'react'
import "./About.scss"

const MyCard = ({slides}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goPrev = () => {
    const isFirstSlide = currentIndex === 0 
    const newIndex = isFirstSlide ? slides.length-1 : currentIndex - 1
    setCurrentIndex(newIndex)
       }
       const goNext = () => {
        const isLastSlide = currentIndex === slides.length -1 
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
           }
    const goToSlide = (id) => {
      setCurrentIndex(id)
    }
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1)
    //     }, 2000);
    //     return ()=>  clearInterval(interval)
       
    // },[currentIndex])
  return (
    <>
      <div className="slider-style">
      <div className="left-arrow" onClick={() => goPrev()} >
  ◀   
  </div>
  <div className="right-arrow" onClick={() => goNext()}> ▶</div>
  <img src={slides[currentIndex].url} alt={slides.title} className='slideStyles'/>
  <div className='divider'></div>
        <h2 className='title'>{slides[currentIndex].title}</h2>
      </div>
      <div className="dots">
      {
                slides.map((slide, index) => {
                    return(
                        <div key={index} className={currentIndex===index? 'dot Nactive': "dot"} onClick={() => goToSlide(index)}></div>
                    )
                })
            }
      </div>

    </>
  )
}

export default MyCard
