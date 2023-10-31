import React from 'react'
import { FacebookIcon, FacebookShareButton, TelegramIcon, TelegramShareButton } from 'react-share'

const Share = () => {
    const shareUrl = window.location.href;
  return (
    <>
      <div className="container">
        <TelegramShareButton url={shareUrl}>
            <TelegramIcon size={30}/>

            
        </TelegramShareButton>
      </div>
    </>
  )
}

export default Share
