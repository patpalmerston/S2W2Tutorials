import React from 'react';
// import styled from 'styled-components'


// const TitleDiv = styled.div`
//   color: purple;
//   background-color: pink;

// `;


function Header(props) {
	return (
    <div>
      
    <h1>{props.title}</h1>
    
    <h3>{props.author}</h3>
    <h4>{props.date}</h4>
    </div>
  );
}

export default Header;
