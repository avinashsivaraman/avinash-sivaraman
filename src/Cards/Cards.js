import React from 'react'
import './Cards.css'

function Cards() {
  return(
    <div className='Card'>
      <div className='Card__Header'>
        Graduate Service Assistant
      </div>
      <div className='Card__Body'>
        <ul>
          <li>Working as React Developer in harnessing the analytic power of
            computer-supported collaborative learning and intelligent tutoring
            systems </li>
          <li>Redesigned the build system to latest version to improve the performance of the application.</li>
          <li>Created an end-to-end demo workflow in the existing application</li>
        </ul>
      </div>
      <div className='Card__Footer'>
        React, Redux, Immutable JS, MongoDB, NodeJS and Git
      </div>
    </div>
  )
}

export default Cards;