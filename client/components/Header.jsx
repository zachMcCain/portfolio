import React from 'react';

const Header = (props) => {
  return (
    // <nav className="navbar navbar-default">
      <div className="header">
      <div className="container-fluid">
        {/* <div className="navbar-header"> */}
        {/* <a class="navbar-brand" href="#">Zach McCain, Full-Stack Engineer</a> */}
          <span className='center'>Zach McCain, Full-Stack Engineer</span>
        {/* </div> */}
          <span className='center'><a href="https://github.com/zachMcCain"><img className='gitHub' src='/assets/25231.png'/></a></span>
      </div>
      </div>
    // </nav>
  )
}


export default Header;