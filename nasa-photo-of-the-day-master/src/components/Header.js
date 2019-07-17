import React from 'react';

function Header({author, date, title}) {
	return (
    <div>
    <h1>{title}</h1>
    <h3>{author}</h3>
    <h4>{date}</h4>
    </div>
  );
}

export default Header;
