import React, { useState, useEffect } from "react";
// import styled from 'styled-components'
import axios from 'axios';
import "./App.css";
import Header from './components/Header';
import Image from './components/image/Image';
import Profile from './components/profile/Profile';
import Video from './components/video/Video';


// const HeaderDiv = styled.div`
//   border: 3px solid blue

// `;


function App() {
  const [nasa, setNasaPic] = useState('');
  
  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        setNasaPic(res.data)
        console.log('res', res)
      })
      
      .catch(err => console.log(err));
  }, [])

  return (
    
    <div className="App">
      
        <Header 
          author={nasa.copyright} 
          date={nasa.date} 
          title={nasa.title}
          
        />
     
      

      {nasa.media_type === 'video' ? <Video nasaVid={nasa.url} /> : <Image nasaPic={nasa.url}/>
      }
      
      <Profile info={nasa.explanation} />
    </div>
  );
}

export default App;
