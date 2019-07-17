import React from 'react'


function Video({nasaVid}) {
  return(
    <div> 
      <iframe src={nasaVid} 
      frameBorder='0'
      allow='autoplay; encrypted-media'
      allowFullScreen
      title='video'
      style={{height: '400px', width: '600px'}}
      />
    </div>
  )
}

export default Video;